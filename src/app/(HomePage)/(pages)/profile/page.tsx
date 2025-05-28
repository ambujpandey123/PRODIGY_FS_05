import React from 'react'

export default function Profile() {
  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #ddd", borderRadius: 8, background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="https://ui-avatars.com/api/?name=User&background=random"
          alt="Profile"
          style={{ width: 100, height: 100, borderRadius: "50%", marginBottom: 16 }}
        />
        <h2 style={{ margin: 0 }}>Your Name</h2>
        <p style={{ color: "#888", margin: "8px 0 16px" }}>@username</p>
        <p style={{ textAlign: "center", color: "#555" }}>
          This is your profile bio. You can update your information here.
        </p>
        <button style={{ marginTop: 20, padding: "8px 24px", borderRadius: 4, border: "none", background: "#0070f3", color: "#fff", cursor: "pointer" }}>
          Edit Profile
        </button>
      </div>
    </div>
  )
}
