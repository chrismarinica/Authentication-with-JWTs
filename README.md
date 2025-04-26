# Kanban Board Application

This is a full-stack Kanban board application where users can manage tasks in different stages (e.g., To Do, In Progress, Done). It is built with the MERN stack (MongoDB, Express, React, Node.js) and incorporates user authentication, CRUD operations for tasks, and a polished user interface.

## Technologies Used

- **Frontend:** React, React Router, TypeScript, Vite
- **Backend:** Node.js, Express, Sequelize (PostgreSQL)
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** Custom CSS (dark theme)
- **Deployment:** Render (for both frontend and backend)
- **API:** RESTful API for handling tasks and user authentication

## Features

- **User Authentication:**
  - Login and Registration system with JWT-based authentication.
  - Secure login with stored JWT token in `localStorage`.
  
- **Kanban Board:**
  - View tasks in columns (e.g., To Do, In Progress, Done).
  - Add, Edit, and Delete tasks as a user.

- **Task Management:**
  - Drag-and-drop support for moving tasks between different columns.
  - Ability to create and update task details (e.g., title, description).

- **Responsive UI:**
  - Polished and responsive design for desktop and mobile devices.

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)  
- **PostgreSQL** (or another database compatible with Sequelize)

Usage
Login/Register:

You can log in or register on the home page. Upon successful authentication, a JWT token will be stored in your browser’s localStorage for subsequent requests.

Kanban Board:

Once logged in, you can view and manage tasks in different columns (To Do, In Progress, Done).

You can add, edit, and delete tasks, as well as drag-and-drop tasks between columns.

Admin Features:

If you are an admin, you will have the ability to manage users and perform admin-related tasks.

Error Handling:

The app will display appropriate error messages if there are issues with authentication or task management.

Contributing
Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit them (git commit -am 'Add feature').

Push to the branch (git push origin feature-branch).

Create a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React

Node.js

Express

Sequelize

PostgreSQL
- **PostgreSQL** (or another database compatible with Sequelize)
