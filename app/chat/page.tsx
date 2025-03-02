"use client";

import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";

interface Message {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [userName, setUserName] = useState<string>("User"); // Mock user name
  const [userMood, setUserMood] = useState<string>("Neutral"); // Mock user mood

  useEffect(() => {
    // Load user data from local storage or API (mock for now)
    const storedName = localStorage.getItem("userName");
    const storedMood = localStorage.getItem("userMood");

    if (storedName) {
      setUserName(storedName);
    }
    if (storedMood) {
      setUserMood(storedMood);
    }
  }, []);

  useEffect(() => {
    // Save user data to local storage (mock for now)
    localStorage.setItem("userName", userName);
    localStorage.setItem("userMood", userMood);
  }, [userName, userMood]);

  const handleSend = () => {
    if (input.trim() !== "") {
      const newMessage: Message = {
        text: input,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInput("");

      // Mock AI response (replace with actual API call)
      setTimeout(() => {
        const aiResponse = generateAIResponse(input, userMood);
        const aiMessage: Message = {
          text: aiResponse,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages([...messages, newMessage, aiMessage]); // Add both user and AI message
      }, 500); // Simulate AI response time
    }
  };

  const generateAIResponse = (userMessage: string, userMood: string): string => {
    // This is a very basic mock AI response generator
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes("sad")) {
      return "I'm sorry to hear you're feeling sad.  Remember that things will get better.";
    } else if (userMessage.includes("anxious")) {
      return "It's okay to feel anxious sometimes.  Try taking deep breaths and focusing on the present.";
    } else if (userMessage.includes("tired")) {
      return "You sound tired.  Make sure you get enough rest and take care of yourself.";
    } else {
      return "That's interesting! Tell me more.";
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-background text-foreground">
      <div className="bg-gray-100 dark:bg-gray-700 p-4">
        <h1 className="text-xl font-semibold">
          Chatting with {userName} (Mood: {userMood})
        </h1>
      </div>
      <div className="flex-grow p-6 overflow-y-auto">
        <div className="flex flex-col space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start ${
                message.sender === "user" ? "justify-end" : ""
              }`}
            >
              <div className="flex flex-col">
                <div
                  className={`rounded-xl p-2 max-w-[100%] ${
                    message.sender === "user"
                      ? "bg-muted text-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.text}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-background p-4 shadow-md fixed bottom-0 left-0 w-full">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-3/4 px-3 py-2 border rounded-full text-foreground bg-muted border-border focus:outline-none focus:ring-2 focus:ring-brand"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button className="ml-2 p-2 rounded-full bg-brand text-white" onClick={handleSend}>
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
