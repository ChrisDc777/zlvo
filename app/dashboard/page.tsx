"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Users,
  Activity,
  TrendingUp,
  Lightbulb,
  Heart,
  MessageSquare,
  Calendar,
  ListChecks,
  BarChart,
} from "lucide-react";

const morningQuotes = [
  "Every morning is a fresh start. Embrace the possibilities.",
  "The sun is up, the sky is blue, it's beautiful and so are you.",
  "Today is a new day. Don't let your history interfere with your destiny!",
];

const eveningQuotes = [
  "Rest and recharge. Tomorrow is a new opportunity.",
  "The day is done, time for fun.",
  "As the day ends, let gratitude fill your heart.",
];

const defaultQuotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const emotions = [
  { label: "Happy", color: "bg-green-500" },
  { label: "Sad", color: "bg-blue-500" },
  { label: "Tired", color: "bg-yellow-500" },
  { label: "Anxious", color: "bg-orange-500" },
  { label: "Calm", color: "bg-purple-500" },
];

const DashboardPage = () => {
  const router = useRouter();
  const [quote, setQuote] = useState("");
  const [userName, setUserName] = useState("User"); // Mock user name
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Grocery Shopping", completed: false },
    { id: 2, text: "Pay Bills", completed: true },
    { id: 3, text: "Book Appointment", completed: false },
  ]);
  const [emotion, setEmotion] = useState(emotions[0]); // Initial emotion

  useEffect(() => {
    const hour = new Date().getHours();
    let selectedQuotes;

    if (hour >= 5 && hour < 12) {
      selectedQuotes = morningQuotes;
    } else if (hour >= 17 && hour < 24) {
      selectedQuotes = eveningQuotes;
    } else {
      selectedQuotes = defaultQuotes;
    }

    setQuote(selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)]);
  }, []);

  const handleChatClick = () => {
    router.push("/chat");
  };

  const analyticsData = [
    {
      label: "Users",
      value: "1,234",
      icon: Users,
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      label: "Sessions",
      value: "5,678",
      icon: Activity,
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      label: "Conversion Rate",
      value: "4.5%",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-green-400 to-green-600",
    },
  ];

  const moodTrackingData = {
    label: "Current Emotion",
    value: emotion.label, // Display current emotion label
    icon: Heart,
    color: emotion.color, // Use emotion color
  };

  const tipsAndInsightsData = {
    label: "Tips & Insights",
    value: "Read More",
    icon: Lightbulb,
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  };

  const upcomingEventsData = {
    label: "Upcoming Events",
    value: "Meeting at 2 PM",
    icon: Calendar,
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
  };

  const performanceData = {
    label: "Performance",
    value: "Good",
    icon: BarChart,
    color: "bg-gradient-to-br from-teal-400 to-teal-600",
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEmotionChange = (newEmotion: { label: string; color: string }) => {
    setEmotion(newEmotion);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Mock Analytics Content */}
      <div className="flex-grow p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold">Welcome, {userName}!</h1>
          <div className="flex items-center space-x-4">
            {emotions.map((e) => (
              <button
                key={e.label}
                className={`rounded-full px-4 py-2 text-white ${e.color} hover:opacity-75 focus:outline-none`}
                onClick={() => handleEmotionChange(e)}
              >
                {e.label}
              </button>
            ))}
          </div>
        </div>
        <p className="text-lg mb-4">Here's a little inspiration for your day:</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 transition-colors duration-300">
          <p className="text-gray-700 dark:text-gray-300 italic">"{quote}"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Analytics Boxes */}
          {[
            ...analyticsData,
            moodTrackingData,
            tipsAndInsightsData,
            upcomingEventsData,
            performanceData,
          ].map((item, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl shadow-md p-6 relative overflow-hidden transition-transform transform hover:scale-105",
                item.color,
                "text-white"
              )}
              style={{
                background: item.color,
              }}
            >
              <div className="absolute top-3 right-3 text-gray-100 opacity-50">
                <item.icon size={24} />
              </div>
              <h2 className="text-xl font-semibold mb-3">{item.label}</h2>
              <p className="text-3xl font-bold">{item.value}</p>
            </div>
          ))}

          {/* To-Do List */}
          <div className="rounded-2xl shadow-md p-6 relative overflow-hidden bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <div className="absolute top-3 right-3 text-gray-400 opacity-50">
              <ListChecks size={24} />
            </div>
            <h2 className="text-xl font-semibold mb-3">To-Do List</h2>
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 accent-blue-500"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <span className={todo.completed ? "line-through" : ""}>
                      {todo.text}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed Chat Bar */}
      <div className="bg-muted dark:bg-gray-800 p-4 shadow-md fixed bottom-0 left-0 w-full z-10 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 dark:text-gray-300">
            Need support? Start a conversation!
          </p>
          <Button onClick={handleChatClick}>
            <MessageSquare className="mr-2" size={16} />
            Open Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
