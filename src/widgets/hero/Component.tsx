"use client";
import Image from "next/image";
import { HeroData } from "@/pages-data/hero";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto w-full p-5">
      <div className="flex w-full items-center">
        <div className="flex w-full flex-col gap-5">
          <div className="flex flex-col w-full">
            <h1 className="text-4xl font-bold tracking-tight">
            {HeroData.title}
             </h1>
            <p className="text-lg">
              {HeroData.subTitle}
            </p>
          </div>
          
          {/* Value Proposition */}
          <p className="text-xl max-w-2xl text-neutral-200">
            {HeroData.value}
          </p>

          <div className="">
            {HeroData.highlights.map((val, idx) => (
              <div key={idx}>
                {val}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <a
              href="#skills"
              className="px-5 py-2 bg-neutral-800 border text-white border-neutral-700 rounded-md text-sm hover:bg-neutral-700 transition"
            >
              {HeroData.ctaSkills}
            </a>
            <a
              href="#projects"
              className="px-5 py-2 border border-neutral-700 rounded-md text-sm hover:bg-neutral-800 transition"
            >
              {HeroData.ctaPrimary}
            </a>
          </div>
        </div>
      
        
        <div className="">
          <Image
              src={HeroData.image}
              width={500}
              height={300}
              alt={HeroData.title}
          />
        </div>
      </div>
    </section>
  );
};
