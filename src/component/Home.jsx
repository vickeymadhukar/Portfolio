import React, { useRef, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import VanillaTilt from 'vanilla-tilt';
import Social from './Social';
import Works from './Works';
import Skills from './Skills';
import Worksection from './Worksection';


const Home = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05,
      });
    }
  }, []);

  return (

    <>
      <div className="w-full h-screen bg-[#2]  flex items-center justify-center px-6 z-50 relative" style={{
        backgroundImage: "linear-gradient(-120deg, #211c31 , #000 )",
      }}>
        <div className="relative max-w-6xl w-full flex  md:flex-row flex-col-reverse items-center justify-between gap-12">
          <div className="text-center  mb-[10%] md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              I am <span className="text-white drop-shadow-md">Vikas Madhukar</span>
            </h1>
            <p className="mt-4 text-xl md:text-5xl text-[#b9b2b2] font-semibold italic">
              <Typewriter
                words={['Game Developer', 'Game Designer', 'Web developer', 'ui/ux designer']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </p>

            <div className='absolute   w-[50%] h-[20%] bg-transparent text-white mt-4'>
              <p className='hidden md:block'>
                I’m a passionate and creative developer specializing in game development and web development, with a strong interest in building immersive and interactive digital experiences. Whether it's developing intense multiplayer FPS games using Unity and Photon, designing eerie environments for horror games, or crafting modern, responsive web interfaces with React, Tailwind, and Node.js, I love turning ideas into engaging user experiences.
              </p>

              <Social />

            </div>


          </div>


          <div
            ref={tiltRef}
            className="md:w-130 md:h-130 w-[370px] h-[400px] top-6 relative ml-7 mr-7 bg-black shadow-lg rounded-2xl border-4 overflow-hidden flex items-center justify-center myimage group"
            data-tilt
            data-tilt-scale="1.1"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }} // 👈 necessary for 3D
          >
            <img
              src="./vikas.png"
              alt="Vikas Madhukar"
              className="md:w-85 md:h-240 h-[770px] w-[300px] pt-50   md:pt-57"
              style={{ backfaceVisibility: 'hidden' }}
            />

          
          </div>

        </div>



      </div>


    </>
  );
};

export default Home;
