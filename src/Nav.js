
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){

    return(
        <nav>
            <ul className="Links">
                <Link to={`/about`} className="dothing">
                    <h2>About Me</h2>
                    </Link>
                {/* <Link to={'/github'} className="dothing">
                    <h2>Github</h2>
                </Link> */}
                <a target="_blank" href="https://github.com/samburgess/" className="GhLink">
                    Github
                </a>
                <Link to={'/projects'} className="dothing">
                    <h2>Projects</h2>
                </Link>
            </ul>    
        </nav>

)}

export default Nav;
