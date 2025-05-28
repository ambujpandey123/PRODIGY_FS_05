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

- **Next.js** – React framework for server-side rendering and static site generation.
- **TypeScript** – Type-safe JavaScript for scalable development.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **MongoDB** – NoSQL database used to store user and post data.
- **Mongoose** – ODM for MongoDB to handle schema and queries.
- **JWT (JSON Web Token)** – Secure user authentication and route protection.
- **NextAuth (optional)** – For easy authentication integration if used.
- **Cookies** – To store JWT tokens securely on the client.
- **Vercel** – Hosting and deployment platform for Next.js apps (optional).



## ⚙️ How to Install and Run

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

