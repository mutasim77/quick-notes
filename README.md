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
- 🔑 jwt-go for JWT token generation
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
> Thank you for your interest in my project. Currently, it is still a work in progress and actively under development. That's why, for the time being, I haven't deployed it anywhere (even though I briefly deployed it in development mode and then removed it). Perhaps later, I will consider deploying it on AWS Cloud.
