import "./technology.scss";
import React, { useEffect, useRef } from 'react'; 
// import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// const skills = [
//     { href: '#git_', title: 'Git' },
//     { href: '#json_', title: 'JSON' },
//     { href: '#solidity_', title: 'AWS' },
//     { href: '#html_', title: 'HTML' },
//     { href: '#html_', title: 'CSS' },
//     { href: '#react_', title: 'React' },
//     { href: '#python_', title: 'Python' },
//     { href: '#python_', title: 'Glue' },
//     { href: '#python_', title: 'Apache Spark' },
//     { href: '#python_', title: 'Airflow DAGs' },
//     { href: '#python_', title: 'PySpark' },
//     { href: '#python_', title: 'Three.js' },
//     { href: '#python_', title: 'SQL' },
//     { href: '#python_', title: 'Java' },
//     { href: '#python_', title: 'C/C++' },
//     { href: '#python_', title: 'TensorFlow' },
//     { href: '#python_', title: 'Selenium' },
//     { href: '#python_', title: 'Pandas' },
//     { href: '#python_', title: 'Numpy' },
//     { href: '#python_', title: 'OpenCV' },
//     { href: '#python_', title: 'Tableau' },
//     { href: '#python_', title: 'PowerBI' },
//     { href: '#python_', title: 'Docker' },
//     { href: '#python_', title: 'Kubernetes' },
//   ];

export default function Intro() {
    
    useEffect(() => {
        console.log('Loading TagCanvas...');
        const TagCanvas = window.TagCanvas;
        // console.log('TagCanvas:', TagCanvas); // Add this line
        if (!TagCanvas) {
            console.log('TagCanvas is not loaded.');
            return;
        }


        const tagCanvasOptions = {
          textColour: '#08FDD8',
          outlineThickness: 0.5,
          outlineColour: '#FE0853',
          maxSpeed: 0.06,
          freezeActive: true,
          shuffleTags: true,
          shape: 'sphere',
          zoom: 1,
          wheelZoom: false,
          noSelect: true,
          textFont: null,
          freezeDecel: true,
          fadeIn: 3000,
          initial: [0.3, -0.1],
          depth: 1.1,
        };
        try {
          TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
        } catch (e) {
          console.log('Canvas error.');
          console.log(e);
        }
      }, []);


    return (
        <div class="bdy2" >
         

            <div className="techWrapper">

                <div class="techLeftWrapper">
                    <p className="h1"></p>
                <h1>
                    Tech and Tools
                </h1>
                <h2>I've been recently working on </h2>
                </div>
                <div class="techRightWrapper">
                    <div class="skills-charts">
                        <div id="myCanvasContainer">
                            <canvas 
                            id='tagcanvas'
                            width='600'
                            height='500'
                            style={{
                              maxWidth: '1000px',
                              width: '100%',
                              zIndex: '99',
                              position: 'relative',
                              margin: '0 auto',
                            }}
                            className='to-fade-in fast-anim'>
                            </canvas>
                                <div id='taglist' style={{ display: 'none' }}>
                                <ul >
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">Data Science</a></li>
                                    <li><a href="#">Python</a></li>
                                    <li><a href="#">Node JS</a></li>
                                    <li><a href="#">React</a></li>
                                    <li><a href="#">Git</a></li>
                                    <li><a href="#">AWS</a></li>
                                    <li><a href="#">Azure</a></li>
                                    <li><a href="#">AWS Glue</a></li>
                                    <li><a href="#">Apache Spark</a></li>
                                    <li><a href="#">Airflow DAGs</a></li>
                                    <li><a href="#">PySpark</a></li>
                                    <li><a href="#">Three.js</a></li>
                                    <li><a href="#">SQL</a></li>
                                    <li><a href="#">Java</a></li>
                                    <li><a href="#">C/C++</a></li>
                                    <li><a href="#">TensorFlow</a></li>
                                    <li><a href="#">Selenium</a></li>
                                    <li><a href="#">Pandas</a></li>
                                    <li><a href="#">Numpy</a></li>
                                    <li><a href="#">OpenCV</a></li>
                                    <li><a href="#">Tableau</a></li>
                                    <li><a href="#">PowerBI</a></li>
                                    <li><a href="#">Docker</a></li>
                                    <li><a href="#">Kubernetes</a></li>
                                    <li><a href="#">Databricks</a></li>
                                    <li><a href="#">Snowflake</a></li>
                                    <li><a href="#">OpenAI API</a></li>
                                    <li><a href="#">Generative AI</a></li>
                                </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>




</div>
    )
}