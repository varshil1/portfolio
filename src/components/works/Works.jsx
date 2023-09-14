import { useState } from "react";
import "./work.scss"
import {LocationCity,DateRange} from "@material-ui/icons"


export default function Works() {
    const [currentSlide,setCurrentSlide]=useState(0);
    const data = [
        {
          id: "1",
          fakeId : "anicca",
          fakeId2 : "anicca2",
          id_act:"inactive",
          icon: "./assets/aws.png",
          id_date:"  August 2022 - July 2023",
          title: "Data Engineer ",
          company:"Connectfor",
          sideimg:"assets/anicca.png",
          desc:
         "• Orchestrated design and execution of high-performance data pipelines using AWS Glue and PySpark, processing 100K to Millions of rows of data .",
         desc2:"• Collaborated with cross-functional teams employing Agile Methodologies and build ETL tools to create efficient Big data solutions on Amazon AWS EC2, S3, Apache Airflow DAGs, and Redshift, reducing data processing time and saving $20,000 monthly.",
            desc3:"• Optimized data engineering processes, achieving 70% reduction in processing time. ",
            desc4:"• Profiling, modeling, analysis, error handling and partitioning strategies enhanced database performance safeguarding data integrity and user privacy.",
          img:
          "assets/anicca.png",
            img_src:"assets/chat.svg"
        },
        {
          id: "2",
          id_act:"inactive",
          icon: "./assets/mobile.png",
          id_date:"  August 2020 - Decemeber 2021",
          title: "NLP TECH (AI) Intern ",
          company:"Connectfor",
          sideimg:"assets/connectfor.png",
          desc:
            "• Developed a customizable chat bot with the help of NLP and deep Learning techniques using Artifcial Neural Networks(ANN) and Pytorch. ",
            desc2:"• Integrated the chatbot with theWhatsapp API, so the chatbot can be used directly by the audience through Whatsapp",
          img:
            "https://media-exp1.licdn.com/dms/image/C510BAQFVY9oMxNXLAg/company-logo_200_200/0/1525069905802?e=2159024400&v=beta&t=muV8wwzhrHIl4Vq27PWIkC2Af3NpEfnmQBzrWtZt8p8",
            img_src:"assets/chat.svg"
        },
        {
          id: "3",
          fakeId : "hello",
          icon: "./assets/globe.png",
          id_date:"  June 2020 - December 2020",
          title: "Research Intern",
          desc:
            "• The main goal was to enable villages to enter global mark through digital technologies. I have been selected as part of the Meghalaya project.",
            desc2: "• Worked for a company called ZeroCode and built a canvas business model for them. Pitched the concept to the government of Meghalaya in collaboration with UCB team and deployed the pilot project in villages in Meghalaya.",
            
          img:
            "./assets/svm_full_logo.png",

            collab1:"assets/UCB.png",
            collab2:"assets/GOVIN.png",
            collabMsg:"In collaboration with :",
            img_src:"assets/chat.svg",
            sideimg:"assets/svm_side.png"
        },
        {
          id: "3",
          id_act:"inactive",
          fakeId:"hello2",
          id_date:"  June 2021 - December 2021",
          icon: "./assets/writing.png",
          title: "Research Associate",
          desc:
            "• Built a Machine vision system (MVS) model which can predict Indian coins from the image given as the input.",
            desc2:"• Performing data acquisition and data augmentation of Indian coins images under various conditions.Discover a high-quality optimal network model by conducting quantitative/qualitative analysis on different Deep Neural    Networks (DNNs) for classifcation of Indian coins.",
          img:
            "assets/AU.png",
            img_src:"assets/chat.svg",
            sideimg:"assets/AU_ugrp.png"
        },
      ];

      const handleClick = (way)=>{
          way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1:2):
          setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0)
// console.log(currentSlide);
// var img=document.getElementById("side_img");
// img.src="";
//           if(currentSlide==0){
//             img.src="assets/chat.svg";
//             console.log("0");
//           }
//           else if(currentSlide==1){
//             img.src="assets/proto.svg";
          
//             console.log("1");}
//           else{
//             img.src="assets/science.svg";
          
//             console.log("2");}
      }
    return (
        <div className="work" id="works">
          {/* <img src="" alt="./assets/proto.svg" id="side_img"  style={{transform:`translateX(-${(currentSlide+1) * 150}px)`}}/> */}
          <div class="Heading">
                <h1>
                    Work Experience
                </h1>
                {/* <h2>I've been recently working on </h2> */}
            </div>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
               
               { data.map(d=>(

                 <div className="container">
                   
                    <div className="item">
                        <div className={`left ${d.fakeId2}`}>
                            <div className="leftContainer">
                                <div className="topContainer">
                                  <h3 ><img className={d.fakeId} src={d.img} alt="" /></h3>
                                  <h4>
                                    {d.collabMsg}
                                    <div id={d.id_act} className="sameLine">
                                    <img src={d.collab1} alt="" />
                                    <img src={d.collab2} alt="" /></div>
                                  </h4>
                                  <div className="imgContainer">
                                      <img src={d.icon} alt="" />
                                  </div>
                                </div>
                                
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <p>{d.desc2}</p>
                                <p>{d.desc3}</p>
                                <p>{d.desc4}</p>
                                
                                
                                <span className="dateExp"><DateRange/>{d.id_date}</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.sideimg} alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>

            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}
