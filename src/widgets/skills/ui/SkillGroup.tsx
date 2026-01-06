import { motion } from "framer-motion";
import { SkillGroup as SkillGroupType, SkillItem } from "@/entities/skill";

export const SkillGroup = ({ group }: { group: SkillGroupType }) => {
  return (
    <motion.section
        key={group.level}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-30%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
    >
        {group.glow && (
        <div className="absolute -inset-12 rounded-3xl
                        bg-indigo-500/10 blur-2xl
                        pointer-events-none" />
        )}

        <div className="">
            <h3 className="text-2xl font-medium p-2">{group.level}</h3>
            <p className="text-sm text-neutral-400 max-w-xl p-2">
                {group.description}
            </p>
        </div>

        <div className=" p-6 border-l border-neutral-300">
            {group.items.map((item, idx) => <SkillItem key={`item-skills-${idx}`} item={item} />)}
        </div>
    </motion.section>
  );
};
