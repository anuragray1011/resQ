import React, { useState, useRef, FormEvent } from "react";

interface Message {
  text: string;
  user: boolean;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatRef = useRef<HTMLInputElement>(null);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!chatRef.current) return;

    const text = chatRef.current.value.trim();
    if (!text) return;

    // Add user message
    setMessages((prev) => [...prev, { text, user: true }]);

    chatRef.current.value = "";

    // Example bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "This is a bot reply.", user: false }]);
    }, 500);
  };

  return (
    <div style={{ marginTop: 20, border: "1px solid #ddd", padding: 10 }}>
      <h3>Chatbot</h3>
      <div style={{ minHeight: 50 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.user ? "right" : "left" }}>
            {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input ref={chatRef} placeholder="Type a message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

