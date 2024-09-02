import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Education from "./components/education/Education";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Google from "./components/google/Google"
import Technology from "./components/technology/Technology"
import Whatnew from "./components/whatnew/Whatnew"
import "./app.scss"
import { useState,useEffect } from "react";
import Menu from "./components/menu/Menu";
import Anime, { anime } from 'react-anime';

import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

function App() {

  return (
    // ***********************************************************

    // Main code
    
    // ***********************************************************
     <div className="app">
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/intro" element={<Second />}/>
      </Routes>
      </div>

  );
}


function First() {
  return (
    <div className="app">
      <Google/>
    </div>
  );
}

function Second() {

// Set loading state to true initially
const [loading, setLoading] = useState(true);

useEffect(() => {


  anime({
    targets: '#svg_id path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 1000 },
    direction: 'alternate',
    loop: false,
    endDelay: 1000,
    
    translateY: anime.stagger(10, {grid: [1, 5], from: 'center', axis: 'y'}),
  //   delay: anime.stagger(200, {grid: [4, 5], from: 'center'}),
  
    loopComplete: function() {
      document.getElementById('svg_id').style="transition: fill .4s smooth;fill: white;";
      // console.log("Yes");

  },
  
  });
// Loading function to load data or 
  // fake it using setTimeout;
  const loadData = async () => {

    // Wait for two second
    await new Promise((r) => setTimeout(r, 5500));

    // Toggle loading state
    setLoading((loading) => !loading);

    
  };
    
  loadData();
    
    
  },[])

  const [menuOpen,setMenuOpen]= useState(false)
  if (loading) {
    return <div class="load" >
      <svg  id="svg_id" width="433" height="500" viewBox="0 0 433 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="433" height="500" fill="black"/>
        <path d="M221.5 463L113 401V267V130L54 164H79V421.5L221.5 503.5L366 422V163.5H390L330 128.5V401.5L221.5 463Z" stroke="white"/>
        <path d="M275.5 302L131 219V114.5L222 63L313 115.5V261L250.5 225H275.5V135L222 104.5L168 135.5V198.5L313 283V387.5L221 440L131 387V240L192 275H168V366.5L221 397.5L275.5 365V302Z" stroke="white"/>
        </svg>
        
    </div>
}
  
// If page is not in loading state, display page.
else {
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections">
         <Intro/>
         <Education/>
         <Portfolio/>
         <Works/>
         <Technology/>
         <Testimonials/>
         <Contact/>
    </div>
    </div>
  );
}
}

export default App;
