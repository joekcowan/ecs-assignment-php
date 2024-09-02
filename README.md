ASSIGNMENT (PHP)

Overview
This project is a full-stack PHP application that simulates user login and order checking functionalities. It demonstrates how to implement basic user authentication and view dynamic data through a fullstack project.
   - Frontend: boostrap, html, css
   - Middlewear: php
   - Backend: mysql database

Features
- User login from pre-created users.
- User-specific order viewing.

Requirements
- A local server environment such as MAMP or WAMP or XAMP.

Installation
- There are several ways you can install this project locally. I recommend downloading a zip file and opening the "public/index.php" file in your browser. In github, click on the "<> Code" button to see which works best for you.
- In order for the database to connect, you will need to edit the config/config.php file with externally provided hostname and password.
- If using a local sever, you will need to have that running while accessing the code library in your browser (e.g., http://localhost:xxxx/public/index.php).

Usage
1. Login:
  - Use the login page (login.php) to access your account with your credentials.
  - The demo user creds are provided here:
    - user: samwiseg pswd: p0t@ters!
    - user: gandalfw pswd: youshallnotp@ss!
    - user: demouser1 pswd: dem0us3r
2. View orders:
  - Once logged in, you will be directed to the home page or "Console" section of the project (index.php).
  - From here you can view orders assigned to your user (if any).
2. View order details:
  - Clicking on the order number of any particular displayed order will direct you to the orders details page (order_details.php).
  - Here the user may see all items and their details assigned to the clicked order.

Folder Structure
public/ - Publicly accessible files (e.g., index.php, assets)
src/ - PHP source code
config/ - Configuration files
