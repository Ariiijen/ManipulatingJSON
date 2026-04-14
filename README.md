# Manipulating JSON Data Web App

## Description

This project is a small PHP web application that demonstrates how to store, display, and delete JSON data using a MySQL database. It reads a local JSON file (`departments.json`) containing department information and employee records, inserts the data into the database, and displays the stored JSON data in a friendly HTML table.

The user interface includes buttons to:
- Insert JSON data into the database
- Display saved department and employee data
- Delete all stored database data

## Features

- Read local JSON file and insert it into MySQL
- Store JSON employee records in a single database table
- Render department and employee details in the browser
- Clear all stored data with one click

## Files

- `index.html` - Main front-end page with buttons and the display area
- `style.css` - Styles for buttons, tables, and the page layout
- `script.js` - JavaScript to call the backend PHP endpoints and update the UI
- `departments.json` - Sample JSON data source with departments and employees
- `insert_json.php` - Inserts JSON file data into the database
- `display_data.php` - Retrieves stored JSON data and returns it as JSON
- `delete.php` - Deletes all records from the database table
- `config.php` - Database connection file

## Prerequisites

- A local web server with PHP support (such as XAMPP)
- MySQL or MariaDB database server
- A browser to open `index.html`

## Setup Instructions (Step by Step)

1. Install XAMPP
   - Download and install XAMPP from https://www.apachefriends.org/
   - Start Apache and MySQL from the XAMPP control panel

2. Copy the project files
   - Place the project folder `ManipulatingJsonWebApp` into the XAMPP `htdocs` directory.
   - Example path on Windows: `C:\xampp\htdocs\ManipulatingJsonWebApp`

3. Create the database
   - Open phpMyAdmin at `http://localhost/phpmyadmin`
   - Create a new database named `manipulating_json`

4. Create the table
   - In the `manipulating_json` database, run the following SQL in phpMyAdmin or MySQL command line:

```sql
CREATE TABLE department_employees_json (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    city_name VARCHAR(100) NOT NULL,
    employee_details JSON NOT NULL
);
```

5. Verify database credentials
   - Open `config.php` or the PHP files directly
   - Ensure the database host, user, password, and name match your local MySQL settings
   - The current default is:
     - host: `localhost`
     - user: `root`
     - password: `` (empty)
     - database: `manipulating_json`

6. Open the app in your browser
   - Navigate to `http://localhost/ManipulatingJsonWebApp/index.html`

7. Use the app
   - Click `Insert Data` to load the sample JSON into the database
   - Click `Display Data` to show stored departments and employees
   - Click `Delete All Data` to clear the table

## Notes

- If your PHP installation does not support the MySQL JSON column type, you can change `employee_details` to `TEXT` and store the JSON as text.
- Make sure the web server has permission to read `departments.json`.
- If you change database credentials, update them in all PHP files or use `config.php` consistently.

## Troubleshooting

- If the page shows a connection error, verify Apache and MySQL are running.
- If insert fails, confirm the table exists and the database name is correct.
- If data does not appear, try refreshing the browser after inserting.

## Optional Improvements

- Add validation for duplicate inserts
- Add edit or search functionality for employees
- Display totals or department summaries
