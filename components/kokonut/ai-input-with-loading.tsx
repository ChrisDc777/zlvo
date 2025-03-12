// AIInputWithLoading.tsx

"use client";

import { CornerRightUp } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/components/hooks/use-auto-resize-textarea";

interface AIInputWithLoadingProps {
  id?: string;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  onSubmit?: (
    value: string,
    setLoadingDuration: (duration: number) => void
  ) => Promise<void>;
  className?: string;
  autoAnimate?: boolean;
  chipText?: string | null;
}

export function AIInputWithLoading({
  id = "ai-input-with-loading",
  placeholder = "Ask me anything!",
  minHeight = 56,
  maxHeight = 200,
  onSubmit,
  className,
  autoAnimate = false,
  chipText
}: AIInputWithLoadingProps) {
  const [inputValue, setInputValue] = useState(chipText || "");
  const [submitted, setSubmitted] = useState(autoAnimate);
  const [isAnimating, setIsAnimating] = useState(autoAnimate);
  const [loadingDuration, setLoadingDuration] = useState(3000);

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight,
    maxHeight,
  });

  useEffect(() => {
    setInputValue(chipText || "");
  }, [chipText]);

  const handleSubmit = useCallback(
    async () => {
      if (!inputValue.trim() || submitted) return;

      setSubmitted(true);

      try {
        // Call the onSubmit function and wait for it to complete
        await onSubmit?.(inputValue, setLoadingDuration);

        // The API call completed successfully.
        console.log("API call completed successfully");
      } catch (error) {
        console.error("Error during API call:", error);
        // Handle error as needed
      } finally {
        setInputValue("");
        adjustHeight(true);

        // Stop the loading indicator immediately after the API call
        // completes (either successfully or with an error).
        setSubmitted(false);
      }
    },
    [adjustHeight, inputValue, onSubmit, setSubmitted],
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runAnimation = () => {
      if (!isAnimating) return;
      setSubmitted(true);
      timeoutId = setTimeout(() => {
        setSubmitted(false);
        timeoutId = setTimeout(runAnimation, 1000);
      }, loadingDuration);
    };

    if (isAnimating) {
      runAnimation();
    }

    return () => clearTimeout(timeoutId);
  }, [isAnimating, loadingDuration]);

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full flex items-start flex-col gap-2">
        <div className="relative max-w-xl w-full mx-auto ">
          <Textarea
            id={id}
            placeholder={placeholder}
            className={cn(
              "max-w-xl bg-slate-800 w-full rounded-3xl pl-6 pr-10 py-4",
              "placeholder:text-gray-300",
              "border-none ring-slate-600",
              "text-gray-300 resize-none text-wrap leading-[1.2]",
              `min-h-[${minHeight}px]`,
            )}
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            disabled={submitted}
          />
          <button
            onClick={handleSubmit}
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 rounded-xl py-1 px-1",
              submitted ? "bg-none" : "bg-slate-600",
            )}
            type="button"
            disabled={submitted}
          >
            {submitted ? (
              <div
                className="w-4 h-4 bg-slate-500 rounded-sm animate-spin transition duration-700"
                style={{ animationDuration: "3s" }}
              />
            ) : (
              <CornerRightUp
                className={cn(
                  "w-4 h-4 transition-opacity text-white",
                  inputValue ? "opacity-100" : "opacity-30",
                )}
              />
            )}
          </button>
        </div>
        <p className="pl-4 h-4 text-xs mx-auto text-white/70">
          {submitted ? "Wings are soaring..." : "Ready to submit!"}
        </p>
      </div>
    </div>
  );
}
