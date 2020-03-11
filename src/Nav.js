
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){

    return(
        <nav>
            <ul className="Links">
                <Link to={`/about`} className="dothing">
                    <h2>About</h2>
                    </Link>
                <Link to={'/github'} className="dothing">
                    <h2>Github</h2>
                </Link>
                <Link to={'/projects'} className="dothing">
                    <h2>projects</h2>
                </Link>
            </ul>    
        </nav>

)}

export default Nav;
