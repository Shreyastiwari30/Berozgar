import React, { useState, useEffect } from "react";

import Answers from "./Answers";
import { url } from "./constant";



function Gpt() {
  const [chats, setChats] = useState(() => {
    const saved = localStorage.getItem("chats");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeChatId, setActiveChatId] = useState(() => {
    return localStorage.getItem("activeChatId") || null;
  });

  const [question, setQuestion] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!activeChatId) createNewChat();
  }, []);

  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: `Chat ${chats.length + 1}`,
      history: [],
    };
    const updated = [...chats, newChat];
    setChats(updated);
    setActiveChatId(newChat.id);
    localStorage.setItem("chats", JSON.stringify(updated));
    localStorage.setItem("activeChatId", newChat.id);
  };

  const askQuestion = async () => {
    if (!question.trim()) return;

    try {
      const payload = {
        contents: [{ parts: [{ text: question }] }],
      };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      const parts = raw
        .split(/\n|\*\*\d+\.\s|\*\*/g)
        .map((s) => s.trim())
        .filter(Boolean);

      const newQA = { question, answers: parts };

      const updatedChats = chats.map((chat) =>
        chat.id === activeChatId
          ? { ...chat, history: [...chat.history, newQA] }
          : chat
      );

      setChats(updatedChats);
      localStorage.setItem("chats", JSON.stringify(updatedChats));
      setQuestion("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white">
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-zinc-950 border-b border-zinc-800">
        <h2 className="text-xl font-bold">GPT Chat</h2>
        
          
      </div>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } lg:block fixed lg:static z-40 top-0 left-0 w-72 h-full bg-zinc-950 px-5 py-6 border-r border-zinc-800`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold">Recent Chats</span>
          
         
        </div>

        <button
          onClick={createNewChat}
          className="text-white hover:underline mb-4 block"
        >
          + New Chat
        </button>

        <input
          type="text"
          placeholder="🔍 Search..."
          className="bg-zinc-800 text-white w-full rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <ul className="space-y-2 overflow-y-auto max-h-[65vh] pr-1">
          {chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => {
                setActiveChatId(chat.id);
                localStorage.setItem("activeChatId", chat.id);
                setSidebarOpen(false); // close sidebar on mobile
              }}
              className={`px-4 py-2 rounded-lg cursor-pointer border ${
                activeChatId === chat.id
                  ? "bg-purple-700 border-purple-600 shadow-md"
                  : "border-zinc-700 hover:bg-zinc-800"
              }`}
            >
              {chat.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 pt-4 lg:ml-72 relative">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Ask Me Anything
        </h1>

        <div className="flex-1 overflow-y-auto space-y-6 max-h-[70vh]">
          {activeChat?.history.map((entry, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 p-4 rounded-lg shadow-md border border-zinc-700"
            >
              <p className="text-purple-400 font-semibold mb-2">
                Q: {entry.question}
              </p>
              <ul className="space-y-1 text-white list-disc list-inside">
                {entry.answers.map((ans, i) => (
                  <li key={i}>
                    <Answers ans={ans} index={i} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-4/5 lg:w-2/3 xl:w-1/2 bg-zinc-900 border border-zinc-700 text-white rounded-full h-14 shadow-xl flex items-center justify-between px-4 z-50">
          <input
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            type="text"
            placeholder="💬 Type your question..."
            className="bg-transparent w-full rounded-full px-4 py-2 outline-none placeholder:text-zinc-400"
          />
          <button
            onClick={askQuestion}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full px-5 py-1.5 ml-4 hover:scale-105 transition-transform"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gpt;
