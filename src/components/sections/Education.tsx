'use client';

import { OutlinedText } from '../typography/OutlinedText';

const EDUCATION_DATA = [
  {
    institution: "BINUS University",
    degree: "Bachelor of Information Systems (Extension)",
    years: "Nov 2024 — Nov 2026",
    description: null,
  },
  {
    institution: "Pijar Camp",
    degree: "Fullstack Mobile Developer",
    years: "Sep 2019 — Jan 2020",
    description: (
      <>
        There I learned about programming logic, designing UI designs for web or mobile applications, 
        designing the application flow using flowcharts, and focusing on web development with{" "}
        <span className="text-white font-medium">React</span>, API development with{" "}
        <span className="text-white font-medium">Express & MongoDB</span>, and mobile development with{" "}
        <span className="text-white font-medium">React Native</span>.
      </>
    ),
    skills: ["React Native", "React", "Figma", "Flowchart", "MongoDB", "MySQL", "Express", "JavaScript"]
  },
  {
    institution: "Universitas Bina Sarana Informatika",
    degree: "Associate Degree in Computer Technology",
    years: "2016 — 2019",
    description: "Grade: 3.08",
  },
];

export function EducationSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-black text-white" id="education">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center gap-4 mb-4">
          <OutlinedText as="h2" size="xl" variant="white">
            Education
          </OutlinedText>
        </div>
      </div>

      {/* Education List */}
      <div className="container mx-auto px-6 space-y-20">
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="max-w-4xl">
            {/* Header: Degree & Years */}
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
                {edu.degree}
              </h3>
              <span className="text-lg md:text-2xl text-zinc-500 font-light tracking-widest whitespace-nowrap ml-4">
                {edu.years}
              </span>
            </div>

            {/* Institution Name */}
            <div className="text-xl md:text-2xl text-zinc-400 font-medium mb-4">
              {edu.institution}
            </div>

            {/* Description / Grade */}
            {edu.description && (
              <p className="text-zinc-500 text-lg leading-relaxed max-w-3xl mb-4">
                {edu.description}
              </p>
            )}

            {/* Skills Tag (Khusus untuk Pijar Camp) */}
            {edu.skills && (
              <div className="flex flex-wrap gap-2 mt-4">
                {edu.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}