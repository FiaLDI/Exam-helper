"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useFullpage } from "./useFullpage";
import { FullpageContext } from "./FullpageContext";
import { FullpageProgress } from "./FullpageProgress";
import { ReactNode } from "react";
import { LanguageSwitcher } from "@/features/language-switcher/ui/LanguageSwitcher";
import { AnimatedBackground } from "@/features/animated-background/ui/AnimatedBackground";

const SWIPE_THRESHOLD = 80;

export function FullpageLayout({ sections }: { sections: ReactNode[] }) {
  const { index, setIndex, progress, projectsProgress } = useFullpage({
    sectionCount: sections.length,
  });

  return (
    <FullpageContext.Provider
      value={{ index, progress, projectsProgress, setIndex }}
    >
      <AnimatedBackground />

      <div className="w-full h-screen overflow-hidden relative z-10">
        <FullpageProgress />
        <LanguageSwitcher />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y < -SWIPE_THRESHOLD && index < sections.length - 1) {
                setIndex(index + 1);
              }
              if (info.offset.y > SWIPE_THRESHOLD && index > 0) {
                setIndex(index - 1);
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div
              className="h-full w-full touch-pan-y"
              data-fullpage-section={index}
            >
              {sections[index]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </FullpageContext.Provider>
  );
}
