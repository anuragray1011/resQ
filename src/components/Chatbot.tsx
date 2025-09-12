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
      setMessages((prev) => [...prev, { text: "The backend is not deployed.", user: false }]);
    }, 500);
  };

  return (
    <div className="mt-5 border border-gray-300 rounded-lg p-3">
      <h3 className="font-bold text-base mb-2 text-gray-800">🤖Chatbot</h3>
      <div className="min-h-[50px] mb-2 space-y-1 text-sm">
        {messages.map((m, i) => (
          <div key={i} className={m.user ? "text-right text-blue-600" : "text-left text-gray-700"}>
            {m.text}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          ref={chatRef}
          placeholder="Type something to ask"
          className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
}

