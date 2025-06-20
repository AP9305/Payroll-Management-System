# 📊 Payroll Management System Using React and MySQL

A comprehensive web-based system for managing employee payroll, attendance, and leaves, developed as a Database Management System project.

## ✨ Features

*   👤 **Employee Management:** Add, view, update, and delete employee records.
*   💰 **Payroll Processing:** Handle monthly payroll generation and calculations.
*   ⏱️ **Attendance Tracking:** Monitor employee attendance data.
*   🌴 **Leave Management:** Manage employee leave requests and approvals.
*   📈 **Reporting:** Generate detailed reports for Attendance, Leave, Department-wise Salary, and Bonus/Deduction.
*   📊 **Dashboard:** Visualize key metrics like Department Distribution and Payroll Trends.
*   🔍 **Analytics:** Explore detailed trends for Payroll and Attendance.

## 🛠️ Technologies Used

*   **Frontend:** React, Material UI (MUI), Axios
*   **Backend:** Node.js, Express.js
*   **Database:** MySQL

## 📁 Project Structure

The project is organized into logical directories:

*   `payroll-frontend/`: The main React application (User Interface).
*   `payroll-backend/`: The Node.js/Express API server.
*   `frontend/`: (Possibly a simple or older frontend - note if applicable)
*   `routes/`: (Contains basic API routes - note if applicable)

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/f1b3b5e3-8276-4d07-8b83-3fa35a3b5d9b)


![image](https://github.com/user-attachments/assets/f226f3ba-41db-444b-814a-8041042d5752)


![image](https://github.com/user-attachments/assets/86732bf9-3336-4210-834c-f78bb072bcee)


![image](https://github.com/user-attachments/assets/a1e707d0-59f2-467c-b0cd-2bbeaa39a663)


![image](https://github.com/user-attachments/assets/2341e466-d0c7-44dd-ac36-b0db8707098a)


![image](https://github.com/user-attachments/assets/173aa360-a45a-4f2c-a61b-0a332eaddb0e)


![image](https://github.com/user-attachments/assets/e8c1397b-87e0-433d-9320-ef8b5ef293e7)

## 🚀 Setup & Installation

Follow these steps to get the project up and running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd dbmss
    ```
    *(Replace `<your-repo-url>` with your actual GitHub repository URL)*

2.  **Database Setup:**
    *   Ensure MySQL is installed and running.
    *   Create a new database (e.g., `dbmsfinal`).
    *   Import your database schema and initial data.
    *   Update the database connection configuration in `payroll-backend/config/db.js`.

3.  **Backend Setup:**
    *   Navigate to the backend directory: `cd payroll-backend`
    *   Install dependencies: `npm install`
    *   Start the server: `npm start` or `node index.js`

4.  **Frontend Setup:**
    *   Navigate to the frontend directory: `cd ../payroll-frontend`
    *   Install dependencies: `npm install`
    *   Start the development server: `npm start`

5.  **Access the Application:**
    Open your web browser and visit `http://localhost:3000` (or the port your frontend server is running on).

## 🌐 API Endpoints


| Method | Endpoint                      | Description                        |
| :----- | :---------------------------- | :--------------------------------- |
| `GET`  | `/api/employees`              | Get all employees                  |
| `POST` | `/api/employees`              | Add a new employee                 |
| `GET`  | `/api/attendance-report`      | Get attendance report data         |
| `GET`  | `/api/leave-report`           | Get leave report data              |
| `POST` | `/api/bonus`                  | Add a bonus entry                  |
| `DELETE`| `/api/deductions/:id`         | Delete a deduction entry           |

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit pull requests.


⭐ Show your support by starring this project!
