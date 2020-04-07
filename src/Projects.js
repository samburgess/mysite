import React from 'react';
import './App.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';


//list of projectData
var projects = [];
var generated = false;

function genProjects(){

    console.log("gen projects")

    var covidmap = {
        title:'Covid 19 Visualisation',
        description: "React app implementing Google's heatmap API. Powered by a Node.js server, using data from the New York Times (github.com/ny-times/Covid-19-data)",
        technologies: 'JavaScript, React.js, Node.js, Google Cloud Engine',
        pages_link: 'https://samburgess.github.io/covidmap_client',
        source_link: 'https://github.com/samburgess/covidmap_client/'
    }

    projects.push(covidmap)

    //dirtbag
    var dirtbag = {
        title:'Dirtbag',
        description:"React app utilizing REI's Mountain Project API to find climbing routes near the user`s geolocation.",
        technologies:'JavaScript, React.js',
        pages_link: '',
        source_link: 'https://github.com/samburgess/dirtbag'
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

    generated = true;


}

class Project extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Project">
                <h1>{this.props.title}</h1>
                <a target="_blank" href={this.props.source_link} className="Project-link">
                    View Source on Github >
                </a>
                <a target="_blank" href={this.props.pages_link} className="Project-link">
                    View on Github Pages >
                </a>
                <h2>{this.props.technologies}</h2>
                <div>{this.props.description}</div>
            </div>
    )}

}

export default function Projects(){

    console.log("projects")

    if(!generated){
        genProjects()
    }

    let projectList = projects.map((p) => 
    
        <Project 
            key={p.title}
            title={p.title}
            description={p.description}
            technologies={p.technologies}
            source_link={p.source_link}
            pages_link={p.pages_link}
        />
    )

    return(
        <ul className="Project-list">
            {projectList}
        </ul>
    )
}