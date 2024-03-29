<h1 align="center">🚀 QuickNotes Server 📡</h1>

<p align="center">
    Backend server for QuickNotes app. Handles JWT token-based authentication, role-based protected routes, and database manipulation.
</p> 

## 🛠️ Features

- 🔐 JWT token-based authentication and authorization.
- 🔒 Role-based protected routes for admin.
- 🛡️ Secure and protected routes using middleware.
- 📦 Adding data to the database (PostgreSQL).

## 💻 Technologies Used

- 🐍 Golang for writing backend apps.
- 🔑 jwt-go for generating JWT tokens (app is token-based auth).
- 🔌 Fiber for making fast webservers and easy-to-play-with middleware.
- 🛠️ Gorm ORM for database manipulation.

## ℹ️ How to Use

1. 📝 Set up the same `.env` file by copying `.env.example` and providing the required configurations:
    ```dotenv
    #---Database Configuration---
    DB_HOST=
    DB_USER=
    DB_PASSWORD=
    DB_NAME=
    DB_PORT=

    #---CORS Configuration---
    CORS_WHITELIST=

    #---JWT Configurations----
    JWT_SECRET_KEY=
    ```

2. 🏃‍♂️ Navigate to the `cmd` folder.
   
3. ⚙️ Run the server by executing:
    ```
    go run main.go
    ```

4. ✔️ If everything is configured correctly, you will see successful connection to the database and successful database migration.

5. 🚀 Now it's time to navigate to the [client](https://github.com/mutasim77/quick-notes/tree/master/client) folder and run the client, which is written in Next.js. (Or you can write your own client app and connect to this URL).

> Thank you for showing interest in this project. Happy coding! 🎉
