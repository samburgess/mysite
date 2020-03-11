import React from 'react';
import gif from './7Tn.gif';
import lambda from './lambda.jpg';
import clipboard from './clipboard.jpg';
import './App.css';
import About from './About.js';
import Nav from './Nav.js';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*ensure correct routing under deployment*/}
      <Router basename={`${process.env.PUBLIC_URL}/`}>
          <Link to='/' className="dothing">
            <h1>Samuel Burgess</h1>
          </Link>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path={`/about`} component={About}/>
            <Route path='/github' component={() => { 
                window.location.href = 'https://github.com/samburgess'; 
                return null;
            }}/>
          </Switch>

          <div className="App-contacts">
            <div>
            saburgess239@gmail.com
            <CopyToClipboard text="saburgess239@gmail.com" onCopy={()=>console.log("copied email\n")}>
              <button className="App-clear"><img src={clipboard} height="30px" width="25px"/></button>
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
    {/* <h1 className="dothing">Home page</h1> */}
  </div>

);

export default App;
