"use client";

import { useModal } from "@/features/open-modal";
import { projectsData } from "@/pages-data/projects";
import { motion } from "framer-motion";

const categoryTitles = {
  core: "Основные проекты",
  contrib: "Контрибуции",
  pet: "Pet / Side projects",
  legacy: "Legacy (старые проекты)",
};

export const ProjectList = () => {
  const { openModal } = useModal();

  const grouped = projectsData.reduce((acc, project) => {
    acc[project.category] = acc[project.category] || [];
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projectsData>);

  return (
    <section id="projects" className="max-w-7xl mx-auto w-full p-5">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="space-y-12">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-4 opacity-90">
              {categoryTitles[category as keyof typeof categoryTitles]}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {items.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="p-5 rounded-xl border border-neutral-700 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors"
                >
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs border border-neutral-700 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="text-indigo-400 text-sm font-medium hover:underline"
                      >
                        Репозиторий
                      </a>
                    )}

                    {project.case && project.case?.length > 0 && (
                      <>
                        <a
                          className="text-indigo-400 text-sm font-medium hover:underline"
                          onClick={()=>{
                            openModal(<>
                              <h4>{project.title}</h4>
                              {project.case && project.case?.length > 0 && project.case.map((val, index) => (
                                <div key={`case-${index}`}>
                                  <h5>{val.title}</h5>
                                  <p>{val.solution}</p>
                                </div>
                              ))}
                              </>
                              )}}
                        >
                          Подробнее
                        </a>
                        
                      </>
                    )}
                  </div>
                  
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
};
