import React from 'react';
import './App.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';


//list of projectData
var projects = [];
var generated = false;

function genProjects(){

    var insiderBot = {
        title:"Insider Trading detector",
        description: "Ongoing project to utilize deep learning methods to detect insider trading on the New York Stock Exchange. The model uses an LSTM RNN to analyze windows of stock data, giving likelihoods of fraud occurence. ",
        technologies: "Python, PyTorch, Deep Learning",
        pages_link:'',
        source_link:'https://github.com/samburgess/insiderbot'
    }

    projects.push(insiderBot)

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
        description:"React app utilizing REI's Mountain Project API to find climbing routes near the user's geolocation.",
        technologies:'JavaScript, React.js',
        pages_link: 'https://samburgess.github.io/dirtbag',
        source_link: 'https://github.com/samburgess/dirtbag'
    }

    projects.push(dirtbag)

    var webtech = {
        title:'WWU Content Aggregation System',
        description:'A system that pulls content (articles etc.) from various University publications into a central database. The database is accompanied by a web portal that allows whitelisted users to search our database and create collections of content piece for projects. ',
        technologies:'JavaScript, Node.js, React.js, Next.js, MySQL, PHP ',
        pages_link:'',
        source_link:''
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
                {this.props.source_link === '' ? null : 
                <a target="_blank" href={this.props.source_link} className="Project-link">
                    View Source on Github >
                </a>
                }
                {this.props.pages_link === '' ? null : 
                <a target="_blank" href={this.props.pages_link} className="Project-link">
                    View on Github Pages >
                </a>
                }
                <h4 style={{letterSpacing:'2px'}}>{this.props.technologies}</h4>
                <div style={{letterSpacing:'0px'}}>{this.props.description}</div>
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