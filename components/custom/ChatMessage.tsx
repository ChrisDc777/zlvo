// ChatMessage.tsx
import { cn } from "@/lib/utils";
import { User, Bot } from "lucide-react";

interface MessageProps {
  text: string;
}

export const UserMessage: React.FC<MessageProps> = ({ text }) => (
  <div
    className={cn(
      "mb-2 p-3 rounded-lg max-w-[35%] flex items-start gap-2 bg-blue-800 text-white",
      "self-end ml-auto flex-row-reverse",
    )}
  >
    {/* <User className="h-5 w-5 text-white shrink-0" /> */}
    <div className="break-words w-full">{text}</div>
  </div>
);

export const BotMessage: React.FC<MessageProps> = ({ text }) => (
  <div
    className={cn(
      "mb-2 p-3 rounded-lg max-w-[75%] flex items-start gap-2 text-white",
      "self-start",
    )}
  >
    {/* <Bot className="h-5 w-5 text-gray-300 shrink-0" /> */}
    <div className="break-words w-full">{text}</div>
  </div>
);
