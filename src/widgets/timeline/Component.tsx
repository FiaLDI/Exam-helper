"use client";

import { timelineData } from "@/pages-data/timeline";

export const TimeLine = () => {
  return (
    <section className="max-w-7xl mx-auto w-full p-5">
      <h2 className="text-3xl font-bold mb-6">Timeline</h2>

      <ol className="relative border-l border-neutral-700/70 pl-4">
        {timelineData.map((item) => (
          <li key={item.id} className="mb-8 ml-2">
            <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(129,140,248,0.35)]" />

            <div className="flex flex-col gap-1">
              <div className="text-xs uppercase tracking-wide text-neutral-400">
                Этап {item.id}
              </div>

              <h3 className="text-lg font-semibold text-neutral-100">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="text-sm text-neutral-300">{item.subtitle}</p>
              )}

              {item.description && (
                <p className="text-sm text-neutral-400 mt-1">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
