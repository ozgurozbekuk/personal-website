
import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from 'ityped'

function Intro() {
  
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {backSpeed:60,backDelay:1500,showCursor:true, strings: ['Web','Front End','Developer' ] })
  },[])

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/heroimg.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'm</h2>
          <h1>Özgür Özbek</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
          <p>I build modern, responsive websites and web applications using React, Next.js, and WordPress. Passionate about clean design, user experience, and performance. With a problem-solving mindset, I deliver fast, functional, and visually appealing results. I'm excited to collaborate and create something great together!</p>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro
