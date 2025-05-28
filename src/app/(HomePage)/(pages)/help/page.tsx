"use client";
import React, { useState } from "react";

const faqs = [
    {
        question: "How do I reset my password?",
        answer:
            "Go to your profile settings, click on 'Change Password', and follow the instructions. If you forgot your password, use the 'Forgot Password' link on the login page.",
    },
    {
        question: "How can I contact support?",
        answer:
            "You can contact support by emailing support@socialmedia.com or using the contact form below.",
    },
    {
        question: "Where can I find the privacy policy?",
        answer:
            "Our privacy policy is available at the bottom of every page or directly at /privacy-policy.",
    },
];

const HelpPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleFaqClick = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <main style={{ padding: "2rem", maxWidth: 700, margin: "0 auto", fontFamily: "sans-serif" }}>
            <h1 style={{ textAlign: "center", marginBottom: 24 }}>Help & Support</h1>
            <section style={{ marginBottom: 40 }}>
                <h2>Frequently Asked Questions</h2>
                <div>
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            style={{
                                border: "1px solid #e0e0e0",
                                borderRadius: 8,
                                marginBottom: 12,
                                background: "#fafbfc",
                                boxShadow: openIndex === idx ? "0 2px 8px #e0e0e0" : undefined,
                            }}
                        >
                            <button
                                onClick={() => handleFaqClick(idx)}
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                    background: "none",
                                    border: "none",
                                    padding: "16px 20px",
                                    fontSize: 18,
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    outline: "none",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-answer-${idx}`}
                            >
                                {faq.question}
                                <span style={{ fontSize: 22 }}>{openIndex === idx ? "−" : "+"}</span>
                            </button>
                            {openIndex === idx && (
                                <div
                                    id={`faq-answer-${idx}`}
                                    style={{
                                        padding: "0 20px 16px 20px",
                                        color: "#444",
                                        fontSize: 16,
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>
                    Need further assistance? Fill out the form below or email us at{" "}
                    <a href="mailto:support@socialmedia.com">support@socialmedia.com</a>.
                </p>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        background: "#f5f7fa",
                        padding: 24,
                        borderRadius: 8,
                        boxShadow: "0 1px 4px #e0e0e0",
                        marginTop: 16,
                        maxWidth: 500,
                    }}
                >
                    <div style={{ marginBottom: 16 }}>
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                style={{
                                    width: "100%",
                                    padding: 8,
                                    marginTop: 4,
                                    borderRadius: 4,
                                    border: "1px solid #ccc",
                                    fontSize: 16,
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: "100%",
                                    padding: 8,
                                    marginTop: 4,
                                    borderRadius: 4,
                                    border: "1px solid #ccc",
                                    fontSize: 16,
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>
                            Message
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                style={{
                                    width: "100%",
                                    padding: 8,
                                    marginTop: 4,
                                    borderRadius: 4,
                                    border: "1px solid #ccc",
                                    fontSize: 16,
                                    resize: "vertical",
                                }}
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        style={{
                            background: "#1976d2",
                            color: "#fff",
                            padding: "10px 24px",
                            border: "none",
                            borderRadius: 4,
                            fontSize: 16,
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                        disabled={submitted}
                    >
                        {submitted ? "Message Sent!" : "Send Message"}
                    </button>
                </form>
            </section>
        </main>
    );
};

export default HelpPage;