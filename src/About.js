import React from 'react';
import './App.css';

function About(){
    console.log("render about")
    return(
        <div className="About">
            <h1>About Me</h1>
            <div style={{letterSpacing:'0px'}}>
            Hi! My name is Sam, I am a Computer Science Graduate student from
            Western Washington University in Bellingham, WA.
            testesttesttestteest
            On this website you can find some examples of my work,
            some of which can be loaded in the browser.
            Feel free to reach out and ask about any other projects!

            </div>
        </div>

)}

export default About;
