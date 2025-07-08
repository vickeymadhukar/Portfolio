import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Buttoncomp from './Buttoncomp';

gsap.registerPlugin(ScrollTrigger);

const Works = ({ id, title, description, image ,link,buttontext }) => {
  useGSAP(() => {
    const projectSelector = `.Project${id}`;
    const leftSelector = `.leftcontainer${id}`;
    const rightSelector = `.rightcontainer${id}`;
    const navSelector = `.innernav${id}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectSelector,
        start: '10% 100%',
        end: '100% 0%',
        scrub: true,
      },
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: projectSelector,
        start: '60% 50%',
        end: '80% 20%',
        scrub: true,
      },
    });

    tl.from(`${leftSelector} h1, ${leftSelector} p `, { y: -850, opacity: 0 }, 'a');
    tl.from(`${rightSelector} img`, { y: -850, opacity: 0 }, 'a');

    t2.to(`${leftSelector} h1, ${leftSelector} p`, { y: 850, opacity: 0 }, 'b');
    t2.to(`${rightSelector} img`, { y: 850, opacity: 0 }, 'b');

    tl.to(navSelector, { backgroundColor: "#000" });
  }, 'a');

  return (
    <div
      className={`Project${id} h-[100vh] w-full relative flex flex-col md:gap-12 items-center justify-center`}
      style={{ backgroundImage: 'linear-gradient(-120deg, #211c31, #000)' }}
    >
      <nav className={`innernav${id} w-full h-[40px] bg-zinc-400 flex items-center text-black border border-zinc-300 z-10 relative`}>
        <h1 className='text-xl md:text-2xl font-bold px-4 md:px-10'>Project {id}</h1>
      </nav>

      <div className='w-full flex flex-col md:flex-row justify-around items-center gap-0 relative z-0 h-full'>
        {/* Left */}
        <div className={`leftcontainer${id} w-full  flex flex-col justify-center text-white p-5 md:p-10 relative z-10 mt-2`}>
          <h1 className='title text-4xl md:text-6xl font-bold'>{title}</h1>
          <div className='discrip max-w-[600px] text-lg md:text-2xl mt-6 md:mt-10'>
            <p >{description}
              <br />
              <Buttoncomp className='mt-8' text={buttontext} link={link} />
            </p>
           
            
          </div>
        </div>

        {/* Right */}
        <div className={`rightcontainer${id} w-full  flex justify-center items-center p-5  md:p-0 relative z-10 mt-2`}>
          <div className='img relative z-10 w-full max-w-[500px] md:max-w-[1000px] aspect-[16/9] mr-10'>
            <img src={image} alt={title} className='h-full w-full object-cover rounded-md shadow-lg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
