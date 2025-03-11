'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';
import InformaticaText from '@/public/informatica-text.svg';
import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { AIInputWithLoading } from '@/components/kokonut/ai-input-with-loading';
import { BotMessage, UserMessage } from '@/components/custom/ChatMessage';
import Salesforce from '@/public/salesforce.svg';

const SalesforceChatPage = () => {
  const apiUrl = '/api/salesforce';
  const salesforceChips = [
    'What does Salesforce do?',
    'How much does Salesforce cost?',
    'What is the latest opportunity status',
    'What is Service Cloud?',
    'Do you offer a free trial?',
  ];

  const [messages, setMessages] = useState<
    { text: string; isUser: boolean }[]
  >([]);
  const chatAreaRef = useRef<HTMLDivElement>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [chipText, setChipText] = useState<string | null>(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const simulateResponse = async (
    userPrompt: string,
    setLoadingDuration: (duration: number) => void
  ) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userPrompt, isUser: true },
    ]);

    const startTime = Date.now();
    try {
      const fullUrl = new URL(apiUrl, window.location.origin);
      const searchParams = new URLSearchParams(fullUrl.search);
      searchParams.set('User_Prompt', userPrompt);
      const updatedApiUrl = `${fullUrl.origin}${fullUrl.pathname}?${searchParams.toString()}`;

      const response = await fetch(updatedApiUrl);
      if (!response.ok) {
        throw new Error(
          `Server is busy. Please try again.`
        );
      }
      const data = await response.json();
      const aiResponse: string = data?.Final_Answer || 'No response.';

      const endTime = Date.now();
      const responseTime = endTime - startTime;
      setLoadingDuration(responseTime);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiResponse, isUser: false },
      ]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text:
            error.message || 'Server is busy. Please try again.',
          isUser: false,
        },
      ]);
    }
  };

  const SuggestionChip = ({ text }: { text: string }) => {
    const handleChipClick = () => {
      setChipText(text);
      setIsPopoverOpen(false);
    };

    return (
      <Button
        variant="outline"
        size="sm"
        className="bg-gray-800 bg-opacity-65 text-gray-300 backdrop-blur-md hover:bg-gray-700"
        onClick={handleChipClick}
      >
        {text}
      </Button>
    );
  };

  const handleAISubmit = async (
    userPrompt: string,
    setLoadingDuration: (duration: number) => void
  ) => {
    await simulateResponse(userPrompt, setLoadingDuration); // Add await here
    setChipText(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-300">
      <div className="flex flex-col items-center p-2 gap-2">
        <h1 className="text-3xl font-bold text-blue-500 flex items-center gap-2">
          Chat with
          <Image src={Salesforce} alt="Salesforce" width={68} />
        </h1>

        <div className="flex items-center text-sm text-gray-400 ml-4">
          Powered by
          <div className="relative ml-2 h-8 w-24">
            <div className="absolute inset-0 rounded-full bg-blue-200 p-1 shadow-inner">
              <Image
                src={InformaticaText}
                alt="Informatica Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <main className="mx-auto flex w-full max-w-4xl flex-grow flex-col p-4 relative">
        <Card className="flex flex-grow flex-col mt-2">
          <CardContent className="flex flex-grow flex-col p-6">
            <div
              ref={chatAreaRef}
              className="mb-4 flex-grow overflow-y-auto rounded-md p-4 text-sm"
            >
              {messages.map((message, index) =>
                message.isUser ? (
                  <div key={index} className="mb-2">
                    <UserMessage text={message.text} />
                  </div>
                ) : (
                  <div key={index} className="mb-2">
                    <BotMessage text={message.text} />
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      <div className="sticky rounded-lg bottom-0 mx-auto w-full max-w-3xl bg-opacity-65 backdrop-blur-md">
        <div className="flex items-center">
          <div className="ml-12 px-2 mb-4">
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Lightbulb className="h-5 w-5 text-blue-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto border-none bg-gray-950 bg-opacity-50 shadow-md backdrop-blur-md">
                <div className="flex flex-col gap-2 p-2">
                  {salesforceChips.map((chip, index) => (
                    <SuggestionChip key={index} text={chip} />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <AIInputWithLoading
            onSubmit={handleAISubmit}
            placeholder={chipText || 'Type a message...'}
            chipText={chipText}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesforceChatPage;
