<h1 align="center">QuickNotes 📜</h1>

<p align="center">
    Welcome to QuickNotes - your ultimate tool for note-taking and management. This project consists of the backend server, frontend client, and admin panel, all bundled together for seamless development and deployment.
</p> 

## 📂 Folder Structure

- **`server/`**: Contains the backend server written in GoLang. Handles authentication, database manipulation, and serves API endpoints.
- **`client/`**: Houses the frontend client written in Next.js. Provides a user-friendly interface for note-taking and management.
- **`admin-panel/`**: Includes the admin panel frontend built with React.js and Material-UI. Allows admin users to monitor users and their notes.

## 🛠️ Technologies Used

### Backend Server (server/)
- 🐍 Golang
- 🔑 jwt-go for JWT token-based authentication and authorization
- 🔌 Fiber for web server implementation
- 🛠️ Gorm ORM for database manipulation

### Frontend Client (client/)
- 🌐 TS + NextJs
- 🎨 Tailwind CSS for styling
- 🌟 AOS for animations
- 🚀 Headless UI for ready components

### Admin Panel (admin-panel/)
- 🌐 JS + ReactJs
- 🎨 Material-UI library for UI components
- 📊 React-apexCharts for chart and visualization

## 🚀 How to Use

1. 📝 Clone the repository by running:
    ```
    git clone https://github.com/mutasim77/quick-notes.git
    ```

2. 📂 Navigate to the project directory:
    ```
    cd quick-notes
    ```

3. 📦 Install dependencies for each component:
    ```
    make install
    ```

3. ⚙️ Set up the `.env` files for server and client based on their respective `.env.example` files.

5. 🏃‍♂️ Run each component:
    ```
    make run-server
    make run-client
    make run-admin-panel
    ```

5. 🌐 Access the client and admin panel in your browser at the provided URLs.

> [!IMPORTANT]
> The project is currently a work in progress and actively under development. That's why, for the time being, I haven't deployed it anywhere (even though I briefly deployed it in development mode and then removed it). Perhaps later, I will consider deploying it on AWS Cloud.


## 📸 Demo
Here, I will provide some screenshots to give you a glimpse of how the project looks. Since it's not deployed yet, viewing these screenshots will provide an overview of the project's user interface and functionality.

### Home Page 🧇
1. 
<img width="1000" alt="Home Page" src="https://github.com/mutasim77/quick-notes/assets/96326525/ae00b1a6-b82e-458f-b2a7-13e40c8c0363">
2.
<img width="1000" alt="Home Page" src="https://github.com/mutasim77/quick-notes/assets/96326525/382e45aa-ba80-45a7-9ed5-f87ca1be05a9">

### Login Page 🥯
1. 
<img width="1000" alt="Login Page" src="https://github.com/mutasim77/quick-notes/assets/96326525/1b200e5a-9941-453e-96df-faaea57bcea8">

### Notes Page 🍟
1.
<img width="1000" alt="Notes Page" src="https://github.com/mutasim77/quick-notes/assets/96326525/4bba2d1e-54d8-46b0-91fe-445cf970bf41">

### Admin Panel 🌯
1.
![image](https://github.com/mutasim77/quick-notes/assets/96326525/9c3e53e9-21cb-4618-90f7-2d1febaa82d5)


> [!NOTE]
> Thank you for taking the time to explore this project. If you found it interesting or useful, I would greatly appreciate it if you could give it a star ⭐. If you have any questions, feedback, or suggestions regarding the project, please feel free to open an issue.

Happy coding! 🚀
