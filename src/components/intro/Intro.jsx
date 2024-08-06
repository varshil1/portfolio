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
    
    
    const name3DRef = useRef();
    
    // NEW ADDDDDDDDD
    const leftRef = useRef();

    const handleCodeMouseEnter = () => {
      addCanvas();
      toggleShapesVisibility(true);
    };
  
    const handleCodeMouseLeave = () => {
      removeCanvas();
      toggleShapesVisibility(false);

    };

    const toggleShapesVisibility = (isVisible) => {
      const shapes = document.querySelectorAll('#shape-1, #shape-2, #shape-3');
      shapes.forEach(shape => {
          if (isVisible) {
              shape.classList.add('hidden-shapes');
          } else {
              shape.classList.remove('hidden-shapes');
          }
      });
  };

    const addCanvas = () => {
      const canvas = document.createElement("canvas");
      canvas.className = "canvas-bg";
      const backWrapper = document.querySelector(".backWrapper"); // Reference to the backWrapper element
      backWrapper.appendChild(canvas);
      const context = canvas.getContext("2d");
      context.globalCompositeOperation = 'lighter';
      canvas.width = backWrapper.clientWidth;
      canvas.height = backWrapper.clientHeight;
    
      // var textStrip = ['诶', '比', '西', '迪', '伊', '吉', '艾', '杰', '开', '哦', '屁', '提', '维'];
      var textStrip = ['0', '1','2','3','4','5','6','7','8','9'];
      var stripCount = 60, stripX = new Array(), stripY = new Array(), dY = new Array(), stripFontSize = new Array();
      for (var i = 0; i < stripCount; i++) {
        stripX[i] = Math.floor(Math.random() * canvas.width);
        stripY[i] = -100;
        dY[i] = Math.floor(Math.random() * 7) + 3;
        stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
      }
    
      var theColors = ['#cefbe4', '#81ec72', '#5cd646', '#54d13c', '#4ccc32', '#43c728'];
    
      function drawStrip(x, y) {
        for (var k = 0; k <= 20; k++) {
          var randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
          if (context.fillText) {
            context.fillStyle = theColors[Math.floor(k / 4)]; // Simplified color selection
            context.fillText(randChar, x, y);
          }
          y -= stripFontSize[k];
        }
      }
    
      function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.shadowOffsetX = context.shadowOffsetY = 0;
        context.shadowBlur = 8;
        context.shadowColor = '#94f475';
    
        for (var j = 0; j < stripCount; j++) {
          context.font = stripFontSize[j] + 'px MatrixCode';
          context.textBaseline = 'top';
          context.textAlign = 'center';
    
          if (stripY[j] > canvas.height) {
            stripX[j] = Math.floor(Math.random() * canvas.width);
            stripY[j] = -100;
            dY[j] = Math.floor(Math.random() * 7) + 3;
            stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
          } 
          drawStrip(stripX[j], stripY[j]);
          stripY[j] += dY[j];
        }
        requestAnimationFrame(draw);
      }
      draw();
    };
    
    const removeCanvas = () => {
      const backWrapper = document.querySelector(".backWrapper"); // Reference to the backWrapper element
      const canvas = backWrapper.querySelector(".canvas-bg");
      if (canvas) {
        backWrapper.removeChild(canvas);
      }
    };
    
    
    // END ADDDDDDDDDDDD



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


        // NEWWWWWWWWWWWWWWWWWWWWWWWWWWWW

        // 3D text shadow effect
        const handle3dMouseMove = (e) => {
          const tspanElement = name3DRef.current;
          if (tspanElement) {
              const rect = tspanElement.getBoundingClientRect();
              const rXP = (e.clientX - rect.left - tspanElement.clientWidth / 2);
              const rYP = (e.clientY - rect.top - tspanElement.clientHeight / 2);
              tspanElement.style.textShadow =
                  `${rYP / 10}px ${rXP / 80}px rgba(227,6,19,.8), 
                   ${rYP / 8}px ${rXP / 60}px rgba(255,237,0,1), 
                   ${rXP / 70}px ${rYP / 12}px rgba(0,159,227,.7)`;
          }
      };

      const handle3dMouseEnter = () => {
          const wrapperElement = document.querySelector('.logo-name');
          if (wrapperElement) {
              wrapperElement.addEventListener("mousemove", handle3dMouseMove);
          }
      };

      const handle3dMouseLeave = () => {
          const wrapperElement = document.querySelector('.logo-name');
          if (wrapperElement) {
              wrapperElement.removeEventListener("mousemove", handle3dMouseMove);
          }
          if (name3DRef.current) {
              name3DRef.current.style.textShadow = '';
          }
      };

      // Attach event listeners to the .right .wrapper element
      const wrapperElement = document.querySelector('.logo-name');
      if (wrapperElement) {
          wrapperElement.addEventListener("mouseenter", handle3dMouseEnter);
          wrapperElement.addEventListener("mouseleave", handle3dMouseLeave);
      }

      // Cleanup event listeners on component unmount
      return () => {
          if (wrapperElement) {
              wrapperElement.removeEventListener("mouseenter", handle3dMouseEnter);
              wrapperElement.removeEventListener("mouseleave", handle3dMouseLeave);
              wrapperElement.removeEventListener("mousemove", handle3dMouseMove);
          }
      };
        // END NEWWWWWWWWWWWWWWWWWWWWWW
         
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
            <div className="left" >
            <div className="imgContainer" >
            <div className="backWrapper" ref={leftRef}>
                
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
                    <div className="logo-name">
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
      <tspan ref={name3DRef} className="name_3d" 
>Varshil Shah</tspan>
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
                    

                    <span class="code-hover" onMouseEnter={handleCodeMouseEnter} onMouseLeave={handleCodeMouseLeave}> code</span>, 
                    
                    <a href="https://pin.it/4ZcBf6e" target="_blank"><span class="empty" id="paint"><span class="temp_paint"></span><span class="highlight"></span> paint</span></a> and <span class="aiAnimation" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} ><span class="empty">deploy AI</span><div className={`loader ${isHovered ? 'hovered' : ''}`}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div></span>
      
      </h1>
                    <h1 class="desp">A data engineer passionate about AI and ML, with 2 years' experience in data modeling, ETL, and data warehousing. Proficient in SQL, NoSQL, and cloud solutions like AWS and GCP. I specialize in AI, including deep learning, NLP, and computer vision, and enjoy tackling real-world challenges. Collaborative and innovative, I optimize workflows and seek opportunities to apply AI in the fusion of UI/UX for diverse fields like healthcare, finance, and marketing. </h1>
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
