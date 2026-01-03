# Creative Showcase – Full Stack Web Application

A full-stack web application where users can securely register, log in, upload images, and showcase their creative memories.

This project was built as part of the **Intern Technical Assessment – Engineering & Data**.

---

##  Live Demo
 Frontend (Netlify): 👉 https://creativosho.netlify.app

Backend (Render): 👉 https://creative-showcase-fuw5.onrender.com

---

##  Features

###  Authentication
- User Signup (Username + Email + Password)
- Secure Login using JWT
- Protected routes (Dashboard, Profile)
- Logout functionality

### Image Upload & Showcase
- Upload images from Dashboard
- View all uploaded images in a clean grid layout
- Delete uploaded images
- Images stored securely and linked to each user

---

##  Pages Included
- **Landing Page** – Public gallery with masonry layout (random images)
- **Signup Page** – Create a new account
- **Login Page** – Secure authentication
- **Dashboard** – Upload & manage images (protected)
- **Profile Page** – View user-specific images

---

## Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Custom CSS styling

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- JWT Authentication
- Multer (Image uploads)

### Tools
- Postman (API testing)
- MongoDB Atlas (Cloud database)

---

## Project Structure

CREATIVE-SHOWCASE
│
├── creative-showcase\client
│   ├── src
│   │   ├── pages
│   │   │   ├── Landing.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Profile.jsx
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server
│   ├── controllers
│   │   └── authController.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── upload.js
│   ├── models
│   │   ├── User.js
│   │   └── Image.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── imageRoutes.js
│   ├── uploads
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md



---

##  Environment Variables

Create a `.env` file inside the `server` folder:

ㆍHow to Run Locally
1 Clone the Repository
git clone https://github.com/your-username/creative-showcase.git
cd creative-showcase

2 Backend Setup
cd server
npm install
npm start
Server runs at : http://localhost:5000

3 Fronted Setup
cd client
npm install
npm run dev
Fronted runs at : http://localhost:5173

API Endpoints
Authentication
| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | User registration |
| POST   | `/api/auth/login`    | User login        |

Images
| Method | Endpoint             | Description     |
| ------ | -------------------- | --------------- |
| POST   | `/api/images/upload` | Upload image    |
| GET    | `/api/images`        | Get user images |
| DELETE | `/api/images/:id`    | Delete image    |
All image routes require JWT Authorization header:
Authorization: Bearer <token>

// Postman Testing
Register(POST)
{
  "username": "emm",
  "email": "emm@gmail.com",
  "password": "1234"
}
 
Login(POST)
{
  "email": "emm@gmail.com",
  "password": "1234"
}

##  Upload Image
Method: POST
Body: form-data
Key: image → File
Header : Authorization: Bearer <token>


##  Deployment 
Frontend: Vercel / Netlify
Backend: Render / Railway
Database: MongoDB Atlas (required)

##  Assessment Checklist
Authentication (JWT)
✔ Image Upload & Display
✔ Secure Dashboard
✔ MongoDB Integration
✔ GitHub Repository
✔ Clean README
✔ Ready for Submission

##  Author
Sneha Bagli

##  FINAL VERDICT
✅ Project requirements: FULFILLED
✅ Auth (JWT): WORKING
✅ Image upload/delete: WORKING
✅ Dashboard protected: WORKING
✅ MongoDB Atlas connected: WORKING
✅ README exists: YES
