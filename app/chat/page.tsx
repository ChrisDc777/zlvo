// pages/index.js
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';
import { Send } from 'lucide-react';
import Image from 'next/image';

export default function SupplyChainAssistant() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Header */}
      <header className="border-b border-gray-900 p-4 flex justify-between items-center">
        <div className="text-lg font-semibold text-blue-600">
          Smart Structuring
        </div>
        <button className="p-2 hover:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="p-4 max-w-6xl mx-auto">
        <Card className="bg-gray-950 border border-gray-900 mb-4 shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-blue-500">
                Supply Chain AI Assistant
              </h1>
              <div className="flex items-center text-sm text-gray-400">
                Powered by
                <div className="relative ml-2 h-8 w-24">
                  <div className="absolute inset-0 bg-blue-200 rounded-full shadow-inner p-1">
                    <Image
                      src="/informatica.svg"
                      alt="Informatica Logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Area (Empty) */}
            <div className="min-h-[300px] mb-4 p-4 rounded-md bg-gray-900">
              {/* Chat messages would appear here */}
            </div>

            {/* Suggestion Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              <SuggestionChip text="Show pending orders" />
              <SuggestionChip text="Generate details for product ordered" />
              <SuggestionChip text="Who is the primary supplier for the gpu in the product?" />
              <SuggestionChip text="What is the lead time for the GPU supplier?" />
              <SuggestionChip text="What is the transportation risk level for the supplier" />
            </div>

            {/* Input Area */}
            <div className="flex gap-2 items-center bg-gray-800 rounded-md p-2">
              <div className="p-2 text-blue-500">
                <Lightbulb className="h-5 w-5" />
              </div>
              <Input
                className="bg-transparent border-0 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-300"
                placeholder="Enter message..."
              />
              <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

// Suggestion Chip Component
function SuggestionChip({ text }: { text: string }) {
  return (
    <button className="flex items-center gap-1.5 text-sm py-1 px-3 bg-gray-800 hover:bg-gray-700 rounded-full">
      <Lightbulb className="h-4 w-4 text-gray-400" />
      <span>{text}</span>
    </button>
  );
}
