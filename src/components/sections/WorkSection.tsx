'use client';

import { OutlinedText } from '../typography/OutlinedText';

const WORK_EXPERIENCES = [
  {
    company: "Diskominfo Labura",
    location: "Indonesia",
    role: "Mobile App Engineer",
    years: "Dec 2021—May 2025",
    description: (
      <>
        Diskominfo Labura was where my journey began. There, I worked on their {" "}
        <span className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-white transition-colors">
          android app
        </span>
        . I was stoked, because the app was downloaded over 10K+ users.
        I took the opportunity to improve my skills in the <span className="font-bold text-white">React Native</span> framework.
      </>
    ),
  },
  {
    company: "Geosensei Teknologi Indonesia",
    location: "Indonesia",
    role: "Mobile App Engineer",
    years: "Aug 2023—Nov 2023",
    description: (
      <>
        Create a Geographic Information Systems (GIS) mobile app using <span className="font-bold text-white">React Native</span> framework.
      </>
    ),
  },
];

export function WorkSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-black text-white font-sans" id="work">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-20">
        <OutlinedText as="h2" size="xl" variant="white">
          Work
        </OutlinedText>
      </div>

      {/* Work List */}
      <div className="container mx-auto px-6 space-y-20">
        {WORK_EXPERIENCES.map((work, index) => (
          <div key={index} className="max-w-4xl mb-35">
            {/* Header: Logo & Company Name */}
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                {work.company}, {work.location}
              </h3>
            </div>

            {/* Role & Years */}
            <div className="flex justify-between items-baseline mb-6 border-b border-zinc-800 pb-2">
              <span className="text-xl md:text-2xl text-zinc-400 font-medium">
                {work.role}
              </span>
              <span className="text-xl md:text-2xl text-zinc-500 font-light tracking-widest">
                {work.years}
              </span>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}