# Payroll Management System

A full-stack Payroll Management System built with React, Node.js/Express, and MySQL.

## Prerequisites

Make sure you have the following installed on your system:

*   Node.js and npm (or yarn)
*   MySQL Server
*   A MySQL client (e.g., MySQL Workbench, command-line client)

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd dbmss
    ```
    Replace `<repository_url>` with the actual URL of your GitHub repository.

2.  **Backend Setup:**

    Navigate to the backend directory and install dependencies:

    ```bash
    cd payroll-backend
    npm install # or yarn install
    ```

    Configure your database connection by editing `payroll-backend/config/db.js`. Update the `host`, `user`, `password`, and `database` fields to match your MySQL setup.

    The database name used by the application is `dbmsfinal`.

3.  **Database Setup:**

    Create the database in your MySQL server:

    ```sql
    CREATE DATABASE dbmsfinal;
    ```

    Import the database schema and data from the provided SQL dump file. Assuming the dump file is named `Dump20250606.sql` and is located in your project root (`dbmss/`):

    ```bash
    mysql -u your_mysql_username -p dbmsfinal < Dump20250606.sql
    ```
    Replace `your_mysql_username` with your MySQL username. You will be prompted to enter your MySQL password.

4.  **Frontend Setup:**

    Navigate to the frontend directory and install dependencies:

    ```bash
    cd ../payroll-frontend
    npm install # or yarn install
    ```

## Running the Application

1.  **Start the Backend:**

    Open a terminal, navigate to the `payroll-backend` directory, and run:

    ```bash
    npm start
    ```
    The backend server should start on port 5000.

2.  **Start the Frontend:**

    Open a *new* terminal, navigate to the `payroll-frontend` directory, and run:

    ```bash
    npm start
    ```
    The frontend development server should start (usually on port 3000) and open the application in your browser.

## Login

Use valid credentials from the `users` table in your `dbmsfinal` database to log in.

(If you have default development credentials, mention them here or explain how to add a user record to the `users` table directly in the database for initial access.) 