// src/components/CodeTransitionAnimation.js
import React, { useEffect, useState } from "react";
import TypingText from "./TypingText"; // Reuse the existing TypingText component

const CodeTransitionAnimation = ({ onComplete }) => {
  const codeSnippets = [
    "function greet() { console.log('Hello, World!'); }",
    "const app = express(); app.listen(3000);",
    "public class Main { public static void main(String[] args) { ... } }",
    "import React from 'react'; const App = () => <div>Hi</div>;",
  ];

  const [currentSnippet, setCurrentSnippet] = useState("");
  const [snippetIndex, setSnippetIndex] = useState(0);

  useEffect(() => {
    // Cycle through snippets every 1 second
    const interval = setInterval(() => {
      setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 1000);

    // Complete animation after 3 seconds
    const timer = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  useEffect(() => {
    setCurrentSnippet(codeSnippets[snippetIndex]);
  }, [snippetIndex]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md font-mono">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-green-400">
          <TypingText text={currentSnippet} speed={50} />
          <span className="animate-blink">|</span>
        </div>
      </div>
    </div>
  );
};

export default CodeTransitionAnimation;
