import React from 'react';
import './App.css';

function About(){
    console.log("render about")
    return(
        <div className="About">
            <h1>About Me</h1>
            <div style={{letterSpacing:'0px'}}>
            Hi! My name is Sam, I am a Software Developer currently looking to transition back into a Software Development role after spending some time in the outdoor industry.
            I have a bachelor's in Computer Science from Western Washington University, and a real passion for creating high quality products.
            I especially enjoy working with web facing technologies, and big data sets.
            <br />
            <br />
            On this site you can find examples of my work, some of which you can run in the browser. Thanks for stopping by!

        </div>
        </div>

)}

export default About;
