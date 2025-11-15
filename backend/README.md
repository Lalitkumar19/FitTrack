# 🏋️‍♂️ FitTrack — MERN Fitness Tracker App

> **FitTrack** is a modern fitness tracking web app built with the MERN stack (MongoDB, Express, React, Node.js).  
> It helps users register, log in, and track their fitness journey — all in one beautiful, responsive dashboard.

---

## 🌟 Features

- 🔐 **User Authentication**
  - Register new users securely with bcrypt-hashed passwords
  - JWT-based authentication for secure login sessions
- 💪 **Dashboard Overview**
  - Personalized user dashboard after login
- ⚡ **Responsive UI**
  - Tailwind CSS for modern design
- 🌈 **Attractive Design**
  - Gradient backgrounds, animations & smooth transitions
- 📡 **MongoDB Integration**
  - Fully connected backend with Mongoose ORM
- 🧩 **Scalable Code Structure**
  - Clean folder organization for easy development

---

## 🧠 Tech Stack

|       Layer          |       Technology            |
|:---------------------|:----------------------------|
| **Frontend**         | React + Vite + Tailwind CSS |
| **Backend**          | Node.js + Express.js        |
| **Database**         | MongoDB Atlas               |
| **Auth**             | JWT + bcryptjs              |      
| **State Management** | React Context API           |
------------------------------------------------------

## 🏗️ Folder Structure

fittrack/
├── backend/
│ ├── config/db.js
│ ├── controllers/
│ │ ├── userController.js
│ │ ├── mealController.js
│ │ ├── workoutController.js
│ │ └── goalController.js
│ ├── middleware/
│ │ ├── authMiddleware.js
│ │ └── errorMiddleware.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Meal.js
│ │ ├── Workout.js
│ │ └── Goal.js
│ ├── routes/
│ │ ├── userRoutes.js
│ │ ├── mealRoutes.js
│ │ ├── workoutRoutes.js
│ │ └── goalRoutes.js
│ ├── .env
│ ├── Dockerfile
│ ├── package.json
│ ├── server.js
│ └── README.md
│
├── frontend/
│ ├── public/logo.png
│ ├── src/
│ │ ├── api/api.js
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── Sidebar.jsx
│ │ │ ├── GoalCard.jsx
│ │ │ ├── MealCard.jsx
│ │ │ └── WorkoutCard.jsx
│ │ ├── context/AuthContext.jsx
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ └── Dashboard.jsx
│ │ ├── App.jsx
│ │ ├── index.css
│ │ └── main.jsx
│ ├── .env
│ ├── Dockerfile
│ ├── vite.config.js
│ ├── tailwind.config.js
│ └── postcss.config.js
│
├── docker-compose.yml
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the repository

```bash
git clone https://github.com/your-username/FitTrack.git
cd FitTrack
🔹 2. Setup Backend
bash
Copy code
cd backend
npm install
Create a .env file inside /backend:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Then run the backend:

bash
Copy code
npm run dev
🔹 3. Setup Frontend
bash
Copy code
cd ../frontend
npm install
Create a .env file inside /frontend:

env
Copy code
VITE_API_URL=http://localhost:5000
Then start the frontend:

bash
Copy code
npm run dev
🌍 API Routes
Method	Endpoint	Description
POST	/api/users/register	Register new user
POST	/api/users/login	Login existing user
GET	/api/users/me	Get logged-in user profile (Private)

🖼️ Screenshots
Login Page	Register Page	Dashboard

🚀 Future Enhancements
🧘 Add workout tracking

🥗 Nutrition log

📊 Progress analytics dashboard

👥 Social sharing / Leaderboard

🌙 Dark mode support

💻 Commands Summary
Command	Description
npm run dev	Run backend server with nodemon
npm start	Start frontend (Vite)
npm install	Install dependencies

👨‍💻 Author
Developed by Lalit Kumar
📧 klalit0859@gmail.com
💼 Passionate MERN Stack Developer

⭐ If you like this project, don’t forget to star it on GitHub!