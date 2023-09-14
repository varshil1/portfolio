import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useState } from 'react';

export default function Intro() {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: false,
            backDelay: 1500,
            showCursor: true,
            backSpeed:60, 
            strings: ['An Creative Software Developer','A Data Engineer' ,'An AI ENTHUSIAST'],
         })
         setTimeout(function () { 
             
            AOS.init({delay: 2, // values from 0 to 3000, with step 50ms
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            }); 
        
        }, 7000);

         
    }, []);

    return (
        <div className="intro" id="intro">
            <ul class='circles'>
         <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   
</ul>
            <div className="left">
            <div className="imgContainer" >
            <div className="backWrapper">
                
            <div
           id="shape-1"
           class="
                  rounded-circle
                  position-absolute
                  opacity-70
                  scale-up-center
                  d-none d-md-block
                  "
           ></div>
      <div
           id="shape-2"
           class="
                  rounded-circle
                  position-absolute
                  opacity-70
                  scale-up-center
                  fade-delay-2000
                  d-none d-md-block
                  "
           ></div>
      <div
           id="shape-3"
           class="
                  rounded-circle
                  position-absolute
                  opacity-70
                  scale-up-center
                  fade-delay-4000
                  d-none d-md-block
                  "
           ></div>
      <div
           id="shape-4-ai" className={`shape-4-ai ${isHovered ? 'hovered' : ''}`}
           >
            <img src="assets/aiMotion2.gif"></img>
           </div>
           
           </div>
                <img src="assets/man_illustrator_wwithout_eyes.png" />
            </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>
                          Hey There, I'm
                    </h2>
                    <div class="logo">
  <svg class="text" viewBox="0 0 850 125">
    <text
          fill="none"
          stroke="#FFF"
          transform="translate(3 102)"
          stroke-width="3"
          font-size="102"
          font-family= "'Outfit', sans-serif"
          font-weight="600"
          letter-spacing="0.025em"
          class="is-active">
      <tspan>Varshil Shah</tspan>
    </text>
  </svg>
</div>
                    <h3><span ref={textRef}></span></h3>
                    <div class="back" data-aos="zoom-in-left" data-aos-delay="5000" data-aos-duration="3000" alt="">
                    <h1 class="ido">I 

                    <button class="btn">
<span class="btn-paint"></span>
<span class="btn-paint"></span>
<span class="btn-paint"></span>
<span class="btn-paint"></span>
<span id="btn-label"> design</span>
                    </button>
                        <span class="empty"> design</span>
                    ,
                    <span class="empty"> code</span>, <a href="https://pin.it/4ZcBf6e" target="_blank"><span class="empty" id="paint"><span class="temp_paint"></span><span class="highlight"></span> paint</span></a> and <span class="aiAnimation" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} ><span class="empty">deploy AI</span><div className={`loader ${isHovered ? 'hovered' : ''}`}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div></span>
      
      </h1>
                    <h1 class="desp"> My strong suits are Python development and machine (deep) learning in both industry and academia. Over the next
few years, I intend to develop as a generalist software engineer. For that, I have learned a bit more of python , frontend
technologies, data engineering, UI/UX designing, DevOps, software architecture, and even project management as
well.</h1>
                    </div>
                </div>
                <a class="down" href="#portfolio">
                    <img id="first" src="assets/down.png" alt=""/>
                    <img id="second" src="assets/down.png" alt="" />
                    <img id="third" src="assets/down.png" alt="" />
                </a>

                
            </div>
        </div>
    )
}
