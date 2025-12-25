"use client";

import { useContext } from "react";
import { FullpageContext } from "./FullpageContext";

const sections = [
  { label: "Home", index: 0 },
  { label: "About", index: 1 },
  { label: "Projects", index: 2 },
  { label: "Timeline", index: 3 },
  { label: "Contact", index: 4 },
];

export function FullpageProgress() {
  const ctx = useContext(FullpageContext);
  if (!ctx) return null;

  const { index, setIndex } = ctx;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-4 bg-black/40 backdrop-blur-md rounded-xl px-4 py-2">
      {sections.map((section) => (
        <button
          key={section.index}
          onClick={() => setIndex(section.index)}
          className={`text-sm transition-colors ${
            index === section.index
              ? "text-indigo-400"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}
