import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'Game Development',
  'Unity',
  'C#',
  'C++',
  'Game Designer',
  'UI/UX Designer',
  'HTML',
  'CSS',
  'JavaScript',
  'Web Development',
  'React',
  'Tailwind CSS',
  'Node.js',
  'GSAP',
  'AR/VR/MR',
  'Animation',
  'MongoDB',
 
];

export default function Skills() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-section',
        pin: true,
        start: '50% 50%',
        end: '300% 50%',
        scrub: true,
      },
    });

    skills.forEach((skill, index) => {
      const id = skill.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      tl.to(`#${id}`, {
        opacity: 1,
        filter: 'blur(0px)',
        delay: index === 0 ? 0 : -0.3,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen  text-white font-poppins" style={{
        backgroundImage: "linear-gradient(-120deg, #211c31 , #000 )",
      }}>
      {/* Skills Section */}
      <div className="main-section flex flex-col items-center justify-center min-h-screen px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">SKILLS</h2>
        <div className="flex flex-wrap gap-4 w-full max-w-6xl justify-center">
          {skills.map(skill => (
            <h2
              key={skill}
              id={skill.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}
              className="px-5 py-2 text-base sm:text-lg md:text-xl border border-white rounded-full font-normal opacity-0 blur-sm transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              {skill}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
