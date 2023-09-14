import "./whatnew.scss";
import { useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
export default function Whatnew() {


    
// useEffect(() => {

      
//  // Select The Elements
// var toggle_btn;
// var big_wrapper;

// function declare() {
//   toggle_btn = document.querySelector(".toggle-btn");
//   big_wrapper = document.querySelector(".big-wrapper");
// }

// const main = document.querySelector(".whatnew");

// declare();

// let dark = false;

// function toggleAnimation() {
//   // Clone the wrapper
//   dark = !dark;
//   let clone = big_wrapper.cloneNode(true);
//   if (dark) {
//     clone.classList.remove("light");
//     clone.classList.add("dark");
//   } else {
//     clone.classList.remove("dark");
//     clone.classList.add("light");
//   }
//   clone.classList.add("copy");
//   main.appendChild(clone);

//   document.body.classList.add("stop-scrolling");
// //   document.body.classList.add
//   clone.addEventListener("animationend", () => {
//     document.body.classList.remove("stop-scrolling");
//     big_wrapper.remove();
//     clone.classList.remove("copy");
//     // Reset Variables
//     declare();
//     events();
//   });
// }

// function events() {
//   toggle_btn.addEventListener("click", toggleAnimation);
  
// }

// events();

// },[])
  return (
    <div className="whatnew" id="whatnew">
      <div class="big-wrapper light">
        <img src="assets/shape.png" alt="" class="shape" />

        <div class="showcase-area">
          <div class="container">
            <div class="left">
              <div class="big-title">
                <h1>Whats new in this website?</h1>
                {/* <h2></h2> */}
                {/* <h1>It's as voice based </h1>
                <h1>AI Portfolio website</h1> */}
              </div>

              <p class="text">
              It's an voice based AI Portfolio website. The website with built in app voice assistant which 
              enable human-like interface on your app. The Alan is trained in such manner to be helpful in surfing the website. I tried to make it sound more as me. So people can interact indirectly with me through this feature.
              Press the button on right bottom and unleash the power of AI 
              </p>

              <h2>Try saying "Take me to the work section"</h2>
              <div class="cta">
                <a href="#" class="btn">Get started</a>
              </div>
            </div>

            <div class="right">
              <img src="assets/person.png" alt="Person Image" class="person" />
            </div>
          </div>
        </div>

        {/* <div class="bottom-area">
          <div class="container">
            <button class="toggle-btn">
              <i className="far fa-moon"></i>
              <i className="far fa-sun"></i>
            </button>
          </div> 
              </div>*/}
      </div>
    </div>
  );
}