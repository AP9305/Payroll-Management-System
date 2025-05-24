📊 Payroll Management System (DBMS Project)
A comprehensive web-based system for managing employee payroll, attendance, and leaves, developed as a Database Management System (DBMS) course project.

✨ Features
👤 Employee Management: Add, view, update, and delete employee records.
💰 Payroll Processing: Handle monthly payroll generation and calculations.
⏱️ Attendance Tracking: Monitor employee attendance data.
🌴 Leave Management: Manage employee leave requests and approvals.
📈 Reporting: Generate detailed reports for Attendance, Leave, Department-wise Salary, and Bonus/Deduction.
📊 Dashboard: Visualize key metrics like Department Distribution and Payroll Trends.
🔍 Analytics: Explore detailed trends for Payroll and Attendance.
🛠️ Technologies Used
Frontend: React, Material UI (MUI), Axios
Backend: Node.js, Express.js
Database: MySQL
📁 Project Structure
The project is organized into logical directories:

payroll-frontend/: The main React application (User Interface).
payroll-backend/: The Node.js/Express API server.
frontend/: (Possibly a simple or older frontend - note if applicable)
routes/: (Contains basic API routes - note if applicable)
🚀 Setup & Installation
Follow these steps to get the project up and running on your local machine:

Clone the repository:

git clone <your-repo-url>
cd dbmss
(Replace <your-repo-url> with your actual GitHub repository URL)

Database Setup:

Ensure MySQL is installed and running.
Create a new database (e.g., dbmsfinal).
Import your database schema and initial data.
Update the database connection configuration in payroll-backend/config/db.js.
Backend Setup:

Navigate to the backend directory: cd payroll-backend
Install dependencies: npm install
Start the server: npm start or node index.js
Frontend Setup:

Navigate to the frontend directory: cd ../payroll-frontend
Install dependencies: npm install
Start the development server: npm start
Access the Application: Open your web browser and visit http://localhost:3000 (or the port your frontend server is running on).

🌐 API Endpoints

Method	Endpoint	Description
GET	/api/employees	Get all employees
POST	/api/employees	Add a new employee
GET	/api/attendance-report	Get attendance report data
GET	/api/leave-report	Get leave report data
POST	/api/bonus	Add a bonus entry
DELETE	/api/deductions/:id	Delete a deduction entry
...	...	...
🤝 Contributing
Contributions are welcome! Please fork the repository and submit pull requests.

⭐ Show your support by starring this project!
