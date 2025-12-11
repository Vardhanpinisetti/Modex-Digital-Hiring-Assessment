### Modex Assessment
### Title: Healthcare Lab Test Slot Booking – Backend

---
### 1. PROJECT OVERVIEW
This project is a Healthcare Lab Test Slot Booking Backend System.
It allows:
   - Admin to create lab test slots
   - Public users to view available slots
   - Public users to book a slot (with availability validation)
   - Fetch a single booking by ID
   - Automatically track:
          - Total capacity
          - Confirmed bookings
          - Remaining seats

The system is fully powered by:
   - Node.js + Express.js
   - PostgreSQL (pg module)
   - Thunder Client for testing APIs
This backend forms the foundation for any healthcare lab booking platform, enabling secure creation, listing, and booking of lab tests.

---

### 2. FEATURES IMPLEMENTED

a. Create Lab Test Slot (Admin API)
Admin can create a new test slot with:
   - Test name
   - Start time
   - Total capacity
POST /admin/slots

b. List All Slots with Remaining Capacity
Returns every slot with:
   - Total capacity
   - Confirmed bookings
   - Remaining seats
GET /slots

c. Book a Slot
A patient can book 1 or more seats if available.
POST /slots/:id/book
Validates:
   - Slot exists
   - Remaining capacity >= requested seats
   - Reduces available capacity automatically.

d. Get Booking Details
Fetch details of a specific booking.
GET /bookings/:id

e. Health Check Route
Checks if the server and database are connected.
GET /health


### 3. SIMPLE STEPS ON HOW TO EXECUTE THIS ASSIGNMENT

Step 1 : Open File Explorer and very ever u want to create u can create a File name Called
“Modex-Healthcare-Booking”

Step 2: Double click on “Modex-Healthcare-Booking”
Step 3: Now create a New Folder Called  “backend”
Step 4: Open VS Code 
Go to on File on top most one
Click on Open Folder 
Now Open “Modex-Healthcare-Booking”
Now click on that “backend” and press enter and u can see select folder press on it 

Now our Present Project Structure Loots like: 
Now your structure on Desktop looks like:

    Desktop
    └─ 📁 Modex-Healthcare-Booking
        └─ 📁 backend
  
Step 5: Open Terminal where u can see it at the top corner click on it
Step 6: Paste this Command: “npm init -y” (This creates a file called package.json)
Step 7: “npm install express pg dotenv cors” 
Step 8:  “npm install --save-dev nodemon”
Step 9: Create the “src” folder down to Backend
Step 10: Now under src Create a new files called: “server.js” & “db.js”
---
<img width="261" height="196" alt="Screenshot 2025-12-10 145726" src="https://github.com/user-attachments/assets/d7c0345c-8945-42f3-b08e-77591f1bc2e9" />

Step 11: Now Update the code in  “package.json” and Save it (CTRL+S)

Step 12: Click on Backend bestie to that there a symbol to create a New File click on it and create “.env” file 
---
<img width="270" height="455" alt="Screenshot 2025-12-10 150537" src="https://github.com/user-attachments/assets/868769dc-8621-4887-b936-f872dc62f39a" />

Step 13: Open “src/db.js” and add the code and save it

Step 14: Open “src/server.js” and add the code and save it.

Step 15: In VS Code Terminal Type this “npm run dev”
---
<img width="1918" height="1014" alt="Screenshot 2025-12-10 151227" src="https://github.com/user-attachments/assets/950f906b-5461-406b-824f-bd8f5f573e3d" />

---
<img width="1181" height="338" alt="Screenshot 2025-12-10 151250" src="https://github.com/user-attachments/assets/cb3d7d8a-d62c-4624-ba41-dece539d7c16" />


Step 16: Install PostgreSQL and setup it 
Step 17: After installation:
   - Press Windows Key
   - Type pgAdmin
   - Click pgAdmin 4
---
<img width="1263" height="953" alt="Screenshot 2025-12-11 053623" src="https://github.com/user-attachments/assets/e5b288b6-b2a4-460a-9397-9d4e53a68f54" />

Step 18: Follow the Step in Image.
---
<img width="1027" height="782" alt="Click on it , IT Asks you the Password In Which you Created While Installing and Setup, Give Your Password and Press on Ok" src="https://github.com/user-attachments/assets/1df72aca-6467-4291-950a-92da12b465d8" />

Step 19: We can see How it looks after giving Password in the Below Image.
---
<img width="1257" height="948" alt="Screenshot 2025-12-11 053916" src="https://github.com/user-attachments/assets/9f169891-5618-460e-9ba9-f84ad002f70d" />

Step 20: Now Creating a New Database
   - On the left sidebar, expand:
   - Right-click Databases
   - Click Create → New Database as “healthcare_booking”
---
<img width="633" height="311" alt="Screenshot 2025-12-11 060200" src="https://github.com/user-attachments/assets/ff8bde59-132f-4ef1-bb4e-15e13f8d76d1" />

Step 20: Follow the below image 
---
<img width="1027" height="782" alt="Click on it , IT Asks you the Password In Which you Created While Installing and Setup, Give Your Password and Press on Ok (1)" src="https://github.com/user-attachments/assets/20e956ad-bce6-4733-8543-3b34b7015ade" />

Step 21: Now We had Successfully Created a New Database
---
<img width="1027" height="782" alt="Click on it , IT Asks you the Password In Which you Created While Installing and Setup, Give Your Password and Press on Ok (2)" src="https://github.com/user-attachments/assets/120f99be-b000-48d4-95c2-70309998c211" />

Step 22: Update .env so backend can connect to PostgreSQL 
Paste this Code in .env:

    PORT=4000
    DATABASE_URL=postgres://postgres:Vardhan%40123@localhost:5432/healthcare_booking
    DB_SSL=false
    And save it.

Step 23: Now run this command in VS Code terminal: “npm run dev”
---
<img width="1277" height="962" alt="Screenshot 2025-12-11 062622" src="https://github.com/user-attachments/assets/b322ebc0-7379-4843-8081-8e6f6a585a5d" />

Step 24: Go to PostgreSQL and click on the Query Tool
---
<img width="1027" height="782" alt="Click on it , IT Asks you the Password In Which you Created While Installing and Setup, Give Your Password and Press on Ok (4)" src="https://github.com/user-attachments/assets/583fe538-30b0-48bd-ab0d-b1f48b3704d1" />

Step 25: In Query Tool Type the Code

---
<img width="1027" height="782" alt="Click on it , IT Asks you the Password In Which you Created While Installing and Setup, Give Your Password and Press on Ok (3)" src="https://github.com/user-attachments/assets/aa9a8db6-3d60-4e3f-ad96-1a15ba129b69" />

Step 26: The Output will be like the Image Below
---
<img width="595" height="193" alt="Screenshot 2025-12-11 072202" src="https://github.com/user-attachments/assets/c24411e9-a31a-44a3-b828-05ac09fdf0f7" />

Step 27: Check tables exist, Open Query Tool and Type the SQL Query in it and Click on Execute then we can know that the Table has been Created or not.

    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    ORDER BY table_name;

---
<img width="1491" height="925" alt="Screenshot 2025-12-11 072535" src="https://github.com/user-attachments/assets/5fd74950-ed9a-4abb-8405-47737288823e" />

Step 28: In VS Code under src/server.js Enter the New Code.

Step 29: and In terminal Paste this Command: “npm run dev
---
<img width="1270" height="798" alt="Screenshot 2025-12-11 073350" src="https://github.com/user-attachments/assets/eb00cab0-467d-4aad-986b-86fe46df6b95" />

Step  30: In VS Code Press: Ctrl + Shift + X - then Search Bar Enables
---
<img width="1919" height="1079" alt="Screenshot 2025-12-11 073427" src="https://github.com/user-attachments/assets/d9d2a9c1-89ed-4ce4-9b97-945eae473687" />

Step 31: In Search Bar Type: Thunder Client and click on Install 
---
<img width="1919" height="1079" alt="Screenshot 2025-12-11 073925" src="https://github.com/user-attachments/assets/4fbc567b-2688-4243-a24c-5b4968d9ea2e" />

Step 32: Follow the Image Below now
---
<img width="1027" height="782" alt="Click on it , IT Asks you the Password In Which you Created While Installing and Setup, Give Your Password and Press on Ok (5)" src="https://github.com/user-attachments/assets/f92ff1b6-ed28-4ce1-8370-7977c3413a40" />

Step 33: Then it Shows like this:
---
<img width="605" height="766" alt="Screenshot 2025-12-11 074952" src="https://github.com/user-attachments/assets/65797161-7241-4023-9b5c-9685c20b43f3" />

Step 34: Click on New Request 
   - Click the dropdown and change it to: Post
   - Under url add this: http://localhost:4000/admin/slots
   - Click Body tab (beside Query, Headers, Auth)
   - Click JSON
   - After Pasting the Code Click SEND (Blue Button)

---
<img width="958" height="991" alt="Screenshot 2025-12-11 085915" src="https://github.com/user-attachments/assets/255a527e-9317-4485-9b2b-5bf2b14b72a0" />

Step 35: GET /slots - list slots + remaining seats
   - Replace your server.js with this (copy & paste exactly)

<img width="1281" height="414" alt="Screenshot 2025-12-11 091940" src="https://github.com/user-attachments/assets/3c85fd9a-ee3a-4458-987e-0b2aa3faab40" />

Step 36: Open Thunder Client 
   - Click on New Request

Step 37: TEST THE NEW GET /slots ENDPOINT
   - Click the dropdown and change it to: GET
   - Under url add this: http://localhost:4000/slots
   - Then Click on SEND Symbol

---
<img width="960" height="1021" alt="Screenshot 2025-12-11 092112" src="https://github.com/user-attachments/assets/928c7e2a-8e5f-4b82-940c-d44f36de2920" />

Step 38: In VS Code - Open “backend/src/server.js” - Adding booking routes.

Step 39: In Terminal Press: 
   - CTRL + C
   - npm run dev

---
<img width="1274" height="413" alt="Screenshot 2025-12-11 101431" src="https://github.com/user-attachments/assets/01247d0d-5f27-42ea-96d8-91ce39f6faa2" />

Step 40: Test GET /slots
   - Open Thunder Client
   - Click on New Request
   - Click the dropdown and change it to: GET
   - Under url add this: http://localhost:4000/slots
   - Click on SEND Button

---
<img width="957" height="1021" alt="Screenshot 2025-12-11 101652" src="https://github.com/user-attachments/assets/92ed205f-dfe9-4e40-8bde-03949bfb055c" />

Step 41: Test Booking API (POST /slots/:id/book)
   - Open Thunder Client
   - Click on New Request
   - Click the dropdown and change it to: Post
   - Under url add this: http://localhost:4000/slots/f2da5341-62c9-47a6-a46b-ab6af374e757/book
   - Click Body tab (beside Query, Headers, Auth)
   - Click JSON and Paste the Code and Click on SEND Button

---
<img width="958" height="1020" alt="Screenshot 2025-12-11 101854" src="https://github.com/user-attachments/assets/2b836402-cfd0-4dac-b206-a1613f9036be" />

Step 42: So make sure you added this code at the BOTTOM of server.js

In VS Code Terminal:
   - Press: CTRL + C
   - npm run dev

Step 43: GET /bookings/:id
   - Open Thunder Client
   - Click on New Request
   - Click the dropdown and change it to: GET
   - Under url add this: http://localhost:4000/bookings/59e5bbb9-f6e0-4b25-a472-ffb69b414cad
   - Click on SEND Button

---
<img width="957" height="1017" alt="Screenshot 2025-12-11 102457" src="https://github.com/user-attachments/assets/454b8dd2-58bf-4ae1-b8ac-a10f79ae66fd" />


---
### Project Structure:

---
    Desktop
    └─ 📁 Modex-Healthcare-Booking
    ├─ 📁 backend
    │   ├─ 📁 src
    │   │   ├─ 📄 server.js                 # Express app (all routes: health, admin slots, slots, booking)
    │   │   ├─ 📄 db.js                     # Postgres pool (reads DATABASE_URL)
    │   │   ├─ 📄 services.js               # DB queries / business logic (optional separation)
    │   │   ├─ 📄 migrations.sql            # SQL to create tables (slots, bookings, users)
    │   │   └─ 📁 controllers (optional)
    │   │       ├─ 📄 slotsController.js
    │   │       └─ 📄 bookingsController.js
    │   ├─ 📁 sql
    │   │   ├─ 📄 schema.sql                # CREATE TABLE ... statements
    │   │   └─ 📄 seed.sql                  # sample data inserts
    │   ├─ 📄 .env.example                  # example env variables (no secrets)
    │   ├─ 📄 package.json
    │   ├─ 📄 package-lock.json
    │   ├─ 📄 README.md                     # backend-specific README / run instructions
    │   └─ 📄 Dockerfile                    # optional: for containerizing backend
    │
    ├─ 📁 frontend
    │   ├─ 📁 public
    │   │   └─ 📄 index.html
    │   ├─ 📁 src
    │   │   ├─ 📄 App.jsx / App.tsx
    │   │   ├─ 📄 index.jsx / index.tsx
    │   │   ├─ 📁 pages
    │   │   │   ├─ 📄 Home.jsx              # list slots, book button
    │   │   │   ├─ 📄 Booking.jsx           # booking form / confirmation
    │   │   │   └─ 📄 Admin.jsx             # create slot form, list slots
    │   │   ├─ 📁 components
    │   │   │   ├─ 📄 SlotCard.jsx
    │   │   │   └─ 📄 BookingForm.jsx
    │   │   └─ 📄 api.js                    # helper functions to call backend APIs
    │   ├─ 📄 package.json
    │   ├─ 📄 package-lock.json
    │   ├─ 📄 README.md                     # frontend run + build instructions
    │   └─ 📄 Dockerfile                    # optional frontend container
    │
    ├─ 📁 docs
    │   ├─ 📄 System_Design.md              # architecture, DB design, concurrency explanation
    │   ├─ 📄 API_Documentation.md          # endpoints, request/response examples
    │   ├─ 📄 Deployment_Instructions.md    # how to deploy backend + frontend
    │   └─ 📄 Demo_Script.md                # what to show in the demo video
    │
    ├─ 📁 postman-or-thunder
    │   ├─ 📄 thunder_collection.json       # exported requests (or Postman collection)
    │   └─ 📄 thunder_environment.json
    │
    ├─ 📁 infra (optional)
    │   ├─ 📄 docker-compose.yml
    │   └─ 📄 k8s-deployment.yaml
    │
    ├─ 📁 scripts
    │   ├─ 📄 seed-db.sh                    # run SQL seed
    │   ├─ 📄 run-tests.sh
    │   └─ 📄 simulate-concurrency.js       # script to concurrently POST bookings (for testing)
    │
    ├─ 📁 videos
    │   └─ 📄 demo.mp4                      # short demo video (link in README or upload elsewhere)
    │
    ├─ 📁 tests
    │   ├─ 📄 backend.test.js               # integration tests for booking logic
    │   └─ 📄 frontend.test.js              # simple UI tests (optional)
    │
    ├─ 📄 README.md                         # main project README (what to run, deployed links, summary)
    ├─ 📄 .gitignore
    └─ 📄 LICENSE


---
### 4. WHAT WE HAVE BUILT (DETAILED EXPLANATION)

Feature 1: Admin Slot Creation
Admin can create unlimited lab test slots.
Example:
   - Blood Test – Morning
   - 12 Dec, 9:00 AM
   - Capacity: 10

A new row is inserted into slots table.

Feature 2: Public Slot Listing
This shows:
   - Test name
   - Start time
   - Total capacity
   - Confirmed bookings
   - Remaining seats

SQL uses LEFT JOIN + SUM for accurate availability.

Feature 3: Booking System
Patient books seats:
   - Check if the slot exists
   - Check remaining seats
   - Reduce remaining capacity
   - Add booking entry

It prevents overbooking (critical in real healthcare systems).

Feature 4: Fetch Booking
Returns:
   - Booking ID
   - Slot ID
   - Patients count
   - Status (CONFIRMED)
   - Timestamp


Useful for confirmation pages.
Feature 5: Strong Error Handling
All routes handle:
   - Missing fields
   - Invalid slot ID
   - Capacity full
   - Database errors

---

### CONCLUSION
The Healthcare Lab Test Slot Booking Backend successfully demonstrates the core functionalities required for a fully operational lab appointment management system. Throughout this project, we built a robust backend architecture using Node.js, Express.js, and PostgreSQL, ensuring reliable API behavior, secure data handling, and accurate slot availability tracking.
The system enables admins to create new lab test slots, allows users to view available tests with real-time availability, and supports patient bookings with strict validation to prevent overbooking. With clearly structured database tables, efficient SQL queries, and comprehensive API routes, the backend offers a strong foundation for scaling into a full healthcare booking platform.
This implementation also reflects industry-level backend practices, including modular project structure, environment variable management, database pooling, and detailed error responses. The APIs were thoroughly tested using Thunder Client, ensuring reliability and correctness.
Overall, this assignment demonstrates a complete, functional backend service that meets real-world requirements and showcases practical backend development skills. The project is scalable, maintainable, and ready to be extended into a full-stack healthcare application.
