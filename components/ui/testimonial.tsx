import * as React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface TestimonialProps {
  name: string;
  username: string;
  text: string;
  className?: string;
}

export default function Testimonial({
  name,
  username,
  text,
  className,
}: TestimonialProps) {
  return (
    <div
      className={cn(
        "p-6 border rounded-lg flex flex-col text-start shadow-glow-lg bg-accent/10",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        <Avatar className="w-12 h-12">
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold leading-none">{name}</h3>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <p className="mt-4 text-md text-muted-foreground">{text}</p>
    </div>
  );
}
