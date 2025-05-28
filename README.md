# 🧑‍🤝‍🧑 Shocial Media - Social Media Website

This project is part of the Prodigy InfoTech Full Stack Web Development Internship (**Track Code: FS**), fulfilling **Task 5: Social Media Website**.

## 📌 Project Description

Shocial Media is a simple social networking platform that allows users to create an account, log in, post updates, and interact with other users through likes and comments. It simulates a basic social media experience using full-stack technologies.

## 🚀 Key Features

- 🔐 User Authentication (Login/Signup)
- 📃 Post creation and deletion
- ❤️ Like functionality
- 💬 Comment system
- 👤 User profile pages
- 🧾 Feed displaying all user posts
- 🧭 Protected routes and session handling

## 🛠️ Technologies Used

- **Frontend**: Next.js / typescript 
- **Backend**:  Node.js / Typesript
- **Database**:  MongoDB
- **Authentication**: Sessions or JWT
- **Hosting**: Localhost / Vercel



## ⚙️ How to Install and Run (Next.js + TypeScript + Tailwind + MongoDB + JWT)

### ✅ Prerequisites

Make sure you have the following installed:

- Node.js (v16 or later)
- MongoDB (local or Atlas cloud instance)
- Git

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/yourusername/PRODIGY_FS_05
cd PRODIGY_FS_05
```
📦 2. Install Dependencies
```bash
npm install
```
🔐 3. Configure Environment Variables
Create a .env.local file in the root directory and add the following:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

💡 Replace your_mongodb_connection_string with your MongoDB URI and your_jwt_secret_key with a secure random string.

🏁 4. Run the Development Server
```bash
npm run dev
```

