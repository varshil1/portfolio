import "./portfolio.scss"

import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio} from "../../data"

export default function Portfolio() {
    const [selected,setSelected] = useState("featured")
    const [data,setData] = useState([]);
    
    const list =[
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "ai",
          title: "Artificial Intelligence",
        },
        {
          id: "python",
          title: "Python",
        },
      ];

      useEffect(() => {

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {

  let ball = document.createElement("div");
  // document.getElementById("portfolio").prepend(ball);
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.getElementById("portfolio").append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});



          switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "ai":
                setData(designPortfolio);
                break;
            case "python":
                setData(contentPortfolio);
                break;
          }
      }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
            {list.map((item) => (
                   <PortfolioList 
                        title={item.title} 
                        active={selected == item.id}
                        setSelected={setSelected}
                        id={item.id}
                   />
                   ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <a className="item" href={d.link} target="_blank">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </a>
                ))}
            </div>
            
        </div>
    )
}
