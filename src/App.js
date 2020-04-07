import React from 'react';
import gif from './7Tn.gif';
import clipboard from './clipboard.jpg';
import './App.css';
import About from './About.js';
import Nav from './Nav.js';
import Projects from './Projects.js';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*ensure correct routing under deployment*/}
      <Router basename={`${process.env.PUBLIC_URL}/`}>
          <Link to='/' className="dothing">
            <h1>Samuel C. Burgess</h1>
          </Link>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path={`/about`} component={About}/>
            <Route path='/github' component={() => { 
                window.location.href = 'https://github.com/samburgess'; 
                return null;
            }}/>
            <Route path='/covidmap_client/' component={() => { 
                window.location.href = 'https://github.com/samburgess'; 
                return null;
            }}/>
            <Route exact path={`/projects`} component={Projects}/>
          </Switch>

          <div className="App-contacts">
            <div>
            saburgess239@gmail.com
            <CopyToClipboard className="App-clear" text="saburgess239@gmail.com" onCopy={()=>console.log("copied email\n")}>
              <button ><img src={clipboard} height="30px" width="25px"/></button>
            </CopyToClipboard>
            </div>
            +1 (425) 829-5203
          </div>

      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <img src={gif} className="App-logo" alt="logo" />
  </div>

);

export default App;
