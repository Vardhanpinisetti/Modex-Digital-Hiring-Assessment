// backend/src/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { pool } = require("./db");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Default route (homepage)
app.get("/", (req, res) => {
  res.send("🧪 Healthcare Lab Test Slot Booking Backend is running successfully!");
});

// Health check route
app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1"); // test DB connection
    res.json({
      status: "ok",
      message: "Server is running and database connection is successful 🚀"
    });
  } catch (error) {
    res.json({
      status: "ok",
      message: "Server is running, but database is not connected yet ❗",
      error: error.message
    });
  }
});

// ==================================================
// 🔵 ADMIN: CREATE A NEW LAB TEST SLOT
// ==================================================
app.post("/admin/slots", async (req, res) => {
  try {
    const { test_name, start_time, total_capacity } = req.body;

    if (!test_name || !start_time || !total_capacity) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const result = await pool.query(
      `INSERT INTO slots (test_name, start_time, total_capacity)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [test_name, start_time, total_capacity]
    );

    res.json({
      message: "Slot created successfully!",
      slot: result.rows[0]
    });

  } catch (error) {
    console.error("Create Slot Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ===============================================
// PUBLIC: GET /slots  => list slots with availability
// ===============================================
app.get("/slots", async (req, res) => {
  try {
    const slotsRes = await pool.query(
      `SELECT s.id, s.test_name, s.start_time, s.total_capacity,
              COALESCE(SUM(CASE WHEN b.status = 'CONFIRMED' THEN b.patients_count ELSE 0 END),0) AS confirmed
       FROM slots s
       LEFT JOIN bookings b ON b.slot_id = s.id
       GROUP BY s.id
       ORDER BY s.start_time`
    );

    const slots = slotsRes.rows.map(row => ({
      id: row.id,
      test_name: row.test_name,
      start_time: row.start_time,
      total_capacity: row.total_capacity,
      confirmed: parseInt(row.confirmed, 10),
      remaining: row.total_capacity - parseInt(row.confirmed, 10)
    }));

    res.json({ slots });
  } catch (err) {
    console.error("GET /slots error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// =======================================================
// PUBLIC: POST /slots/:id/book
// Body: { patients_count: 1 }
// Uses a transaction + SELECT ... FOR UPDATE to avoid overbooking
// =======================================================
app.post("/slots/:id/book", async (req, res) => {
  const slotId = req.params.id;
  const { patients_count } = req.body;

  if (!patients_count || patients_count <= 0) {
    return res.status(400).json({ error: "patients_count must be > 0" });
  }

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Lock the slot row
    const slotQ = await client.query(
      `SELECT id, total_capacity FROM slots WHERE id = $1 FOR UPDATE`,
      [slotId]
    );

    if (slotQ.rowCount === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ error: "Slot not found" });
    }

    const slot = slotQ.rows[0];

    // Count confirmed bookings
    const confirmedQ = await client.query(
      `SELECT COALESCE(SUM(patients_count), 0) AS confirmed
       FROM bookings
       WHERE slot_id = $1 AND status = 'CONFIRMED'`,
      [slotId]
    );

    const confirmed = parseInt(confirmedQ.rows[0].confirmed, 10);
    const remaining = slot.total_capacity - confirmed;

    if (patients_count > remaining) {
      // optional: store failed attempt
      const failInsert = await client.query(
        `INSERT INTO bookings (slot_id, patients_count, status)
         VALUES ($1, $2, 'FAILED') RETURNING *`,
        [slotId, patients_count]
      );

      await client.query("COMMIT");
      return res.status(400).json({
        error: "Not enough seats available",
        remaining,
        booking: failInsert.rows[0]
      });
    }

    // Create confirmed booking
    const bookingQ = await client.query(
      `INSERT INTO bookings (slot_id, patients_count, status)
       VALUES ($1, $2, 'CONFIRMED') RETURNING *`,
      [slotId, patients_count]
    );

    await client.query("COMMIT");

    res.json({
      message: "Booking confirmed",
      booking: bookingQ.rows[0],
      remaining_after: remaining - patients_count
    });
  } catch (err) {
    await client.query("ROLLBACK").catch(()=>{});
    console.error("Booking error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    client.release();
  }
});

// ==============================
// GET /bookings/:id  => check booking status
// ==============================
app.get("/bookings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const q = await pool.query(`SELECT * FROM bookings WHERE id = $1`, [id]);

    if (q.rowCount === 0) return res.status(404).json({ error: "Booking not found" });
    return res.json({ booking: q.rows[0] });
  } catch (err) {
    console.error("GET /bookings/:id error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ==================================================
// START SERVER
// ==================================================
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});


// ===============================================
// GET BOOKING BY ID
// ===============================================
app.get("/bookings/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM bookings WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json({ booking: result.rows[0] });

  } catch (err) {
    console.error("GET /bookings/:id error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});
