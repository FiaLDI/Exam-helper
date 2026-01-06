"use client";

import { useRef } from "react";
import { useMounted } from "@/shared/utils/useMounted";
import { useDict } from "@/shared/utils/useDict";
import { SkillsDict } from "@/entities/skill";
import { SkillGroup } from "./SkillGroup";

export const Skills = ({ skillsDict }: {skillsDict: SkillsDict;}) => {
  const mounted = useMounted();

  const clientDict = useDict("skills");
  const data: SkillsDict = mounted ? clientDict : skillsDict;

  return (
    <section className="h-screen w-full">
      <div
        data-scrollable
        style={{ WebkitOverflowScrolling: "touch" }}
        className="
          h-full max-w-7xl mx-auto
          px-6 py-10 pb-40
          overflow-y-auto overscroll-contain
          touch-pan-y
          no-scrollbar
          text-white
          relative
        "
      >
        <div className="max-w-2xl relative z-10">
          <h2 className="text-4xl font-semibold tracking-tight p-2">
            {data.title}
          </h2>
        </div>

        <div className="space-y-10 relative z-10">
          {data.groups.map((group, idx) => (
            <SkillGroup
              key={`skills-${idx}-${group.description}`} 
              group={group}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

