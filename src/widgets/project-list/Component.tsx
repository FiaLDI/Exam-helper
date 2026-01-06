"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useMounted } from "@/shared/utils/useMounted";
import { ProjectsDict, ProjectCategory } from "@/pages-data/projects";
import { useDict } from "@/shared/utils/useDict";
import { Github, Lock } from "lucide-react";

const HEAT: Record<ProjectCategory, string> = {
  Core: "from-indigo-500/20",
  Contribution: "from-sky-500/15",
  Pet: "from-emerald-500/10",
  Legacy: "from-neutral-500/5",
};

type ProjectListProps = {
  projectsDict: ProjectsDict; // SSR
};

export const ProjectList = ({ projectsDict }: ProjectListProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory | null>(null);

  const mounted = useMounted();

  // CSR словарь
  const clientDict = useDict("projects");

  // SSR → CSR
  const data = mounted ? clientDict : projectsDict;

  const grouped = data.items.reduce((acc, project) => {
    acc[project.category] = acc[project.category] || [];
    acc[project.category].push(project);
    return acc;
  }, {} as Record<ProjectCategory, typeof data.items>);

  const categories = Object.keys(grouped) as ProjectCategory[];

  return (
    <section
      ref={containerRef}
      data-scrollable
      style={{ WebkitOverflowScrolling: "touch" }}
      className="h-screen no-scrollbar relative overflow-y-auto max-w-7xl mx-auto w-full p-5 pt-15 text-white"
    >
      <h2 className="text-3xl font-bold p-5">
        {data.title}
      </h2>

      {/* CATEGORY RAIL */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-4 bg-black/40 backdrop-blur-md rounded-xl px-4 py-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              document
                .getElementById(`cat-${cat}`)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`text-sm ${
              activeCategory === cat
                ? "text-indigo-400"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CATEGORIES */}
      <div className="space-y-14 p-5 pb-20">
        {categories.map((category) => (
          <motion.section
            key={category}
            id={`cat-${category}`}
            onViewportEnter={() => setActiveCategory(category)}
            viewport={{ margin: "-40%" }}
            animate={{ opacity: activeCategory === category ? 1 : 0.35 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div
              className={`-z-10 absolute -inset-10 rounded-3xl bg-gradient-to-br ${HEAT[category]} to-transparent blur-2xl`}
            />

            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-semibold mb-2">{category}</h3>
              <p className="text-sm text-neutral-400 max-w-3xl">
                {data.categoriesMeta[category]}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
  {grouped[category].map((project) => (
    <motion.div
      key={project.id}
      className="relative p-5 rounded-xl bg-neutral-900/40
                 flex flex-col gap-3 border border-neutral-800
                 hover:border-neutral-700 transition"
    >
      {/* Repo indicator */}
      <div className="absolute top-4 right-4">
        {project.link && !project.isPrivate && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-white transition"
            title="View repository"
          >
            <Github size={18} />
          </a>
        )}

        {project.isPrivate && (
          <div
            className="text-neutral-500 cursor-default"
            title="Private repository"
          >
            <Lock size={16} />
          </div>
        )}
      </div>

      {/* Title */}
      <h4 className="text-xl font-semibold pr-8">
        {project.title}
      </h4>

      {/* Description */}
      <p className="text-sm text-neutral-300">
        {project.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs rounded-md
                       bg-neutral-900/60 border border-neutral-800"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  ))}
</div>
          </motion.section>
        ))}
      </div>
    </section>
  );
};
