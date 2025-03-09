import React from 'react';
import { TrueFocus } from "@/components/ui/true-focus";

const TrueFocusComponent: React.FC = () => {
  return (
    <TrueFocus 
      sentence="From Handwritten to Actionable"
      manualMode={false}
      blurAmount={5}
      borderColor="blue"
      animationDuration={2}
      pauseBetweenAnimations={1}
    />
  );
};

export { TrueFocusComponent };
