import React from 'react';
import './App.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';


function genProjects(){

    //dirtbag
    var dirtbag = {
        title:'Dirtbag',
        description:'React app utilizing REI`s Mountain Project API to find climbing routes near the user`s geolocation.',
        technologies:'JavaScript, React.js',
        pages_link: '',
        source_link: 'github.com/samburgess/dirtbag'
    }

    projects.push(dirtbag)

    var webtech = {
        title:'WWU Content Aggregation System',
        description:'A system that pulls content (articles etc.) from various University publications into a central database. The database is accompanied by a web portal that allows whitelisted users to search our database and create collections of content piece for projects. ',
        technologies:'JavaScript, Node.js, React.js, Next.js, MySQL, PHP ',
        pages_link:null,
        source_link:null
    }

    projects.push(webtech)



}



//list of projectData
var projects = [];


function ProjectHolder(){


}

class Project extends React.Component(){

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Router>
                    <h1>{this.props.title}</h1>
                    <Link to='{this.props.pages_link}s'>
                    {this.props.pages_link}
                    {this.props.source_link}
                </Router>
                <div>{this.props.description}</div>
            </div>
    )}

}

function Projects(){

}