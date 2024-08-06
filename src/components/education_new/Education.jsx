import "./edu.scss"

import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import { useEffect, useRef } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import {LocationCity,DateRange} from "@material-ui/icons"
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import "react-vertical-timeline-component/style.min.css";

export default function Works_new() {

  useEffect(() => {
    
     setTimeout(function () { 
         
        AOS.init({delay: 2, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        }); 
    
    }, 7000);

     
}, []);


    let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

    const timelineElements = [
        
        // {
        //   id: 1,
        //   title: "Secondary Education",
        //   location: "N.R. Secondary School,Ahmedabad,India",
        //   description:
        //     "Secondary Education, Gujarat Board: 90 % ,99.18 Percentile",
        //   date: "Mar 2016",
        //   icon: "school",
        // },
        // {
        //   id: 2,
        //   title: "Higher Secondary Education",
        //   location: "M.K. Higher Secondary School,Ahmedabad,India",
        //   description:
        //     "Higher Secondary Education, Gujarat Board: 91 % ,98.79 Percentile",
        //   date: "Mar 2016 - April 2018",
        //   icon: "school",
        // },
        
        {
          id: 1,
          title: "Bachelors in Information and Communication Technology",
          location: "Ahmedabad University, Gujarat ,India",
          description:
            "Information and Communication Technology CGPA: 3.21/4.0",
          date: "June 2018 - May 2022",
          icon: "school",
        },{
          id: 2,
          title: "Masters of Computer Science (MCS)",
          location: "Arizona State University,Tempe,Arizona",
          description:
            "",
          date: "August 2023 - May 2025 Expected",
          icon: "school",
        }
      ];
      
    return (
        <div className="edu" id="edu">
          <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="Heading">
                <h1>
                    Education
                </h1>
                
            </div>
          {/* <img src="assets/book_lover.svg" alt="" class="book"/> */}
      <VerticalTimeline lineColor="#000">
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (


            <VerticalTimelineElement  

            data-aos="fade-in" data-aos-delay="3000" data-aos-duration="3000"
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
              <LocationCity/>{element.location}
              </h5>
              <h5 className="vertical-timeline-element-subtitle">
              <DateRange/>{element.date}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
            
          );
        })}
      </VerticalTimeline>
    </div>
  
            )
}
