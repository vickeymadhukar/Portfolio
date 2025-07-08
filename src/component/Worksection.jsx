import React from 'react'
import Works from './Works';

const Worksection = () => {
  return (
    <div>
      
      <Works
        id="1"
        title="Dread Hall"
        description="A dark multiplayer horror game set inside a haunted haveli where survival means eliminating others."
        image="/images/dreadhall.png"
        buttontext="Visit Game Site"
        link="https://dreadhall.netlify.app/"
      />
      <Works
        id="2"
        title="Tank Strike"
        description="An elegant and interactive frontend design to highlight newly launched cars. This project combines smooth animations powered by GSAP with a modern UI for a captivating user experience."
        image="/images/tanskpage.png"
        buttontext="Visit Game Site"
        link="https://bright-bubblegum-e356b3.netlify.app/"

      />

      <Works
        id={3}
        title="Fanta"
        description="A clean and modern website to showcase new launches, built using HTML, CSS, and JavaScript, with smooth animations powered by GSAP."
        image="/images/fanta.png"
        buttontext="Visit Site"
        link="https://vickeymadhukar.github.io/CAN-lauch-site/"

      />

      <Works
        id="4"
        title="BMW New Launch"
        description="An elegant and interactive frontend design to highlight newly launched cars. This project combines smooth animations powered by GSAP with a modern UI for a captivating user experience."
        image="/images/carfront.png"
        buttontext="Visit Site"
        link="https://vickeymadhukar.github.io/CAR-showcase-site/"
      />
      <Works
        id="5"
        title="Platinum Card"
        description="A modern and elegant frontend design for a Platinum financial card landing page, built using React.js and animated with GSAP + ScrollTrigger."
        image="/images/platinum.png"
        buttontext="Visit Site"
        link="https://vickeymadhukar.github.io/Platinum_Credit_cardsite/"
      />
    
    </div>
  )
}

export default Worksection
