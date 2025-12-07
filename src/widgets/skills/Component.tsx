import { DescriptionSkills } from "@/features/open-skills-description/ui/DescriptionSkills";
import { skillsData } from "@/pages-data/skills";

export const Skills = () => {
  return (
    <section className="max-w-7xl mx-auto w-full p-5">
      <h2 className="text-3xl mb-6">Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillsData.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold mb-3">{category.title}</h3>

            <ul className="flex flex-wrap gap-2">
                {category.items.map(
                    ({description, time, title}, index) => 
                        <DescriptionSkills 
                            key={`${index}-${title}`} 
                            title={title} 
                            description={description} 
                            time={time} 
                        /> 
                    )
                }
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
