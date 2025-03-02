"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] w-full">
      <TextRevealCard
        text="Feeling alone?"
        revealText="I'm here to listen. "
      >
        <TextRevealCardTitle>
          Your AI Mental Health Companion
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Get personalized support and guidance, anytime, anywhere. Start
          your journey to better mental well-being today.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
