import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './Headers.js';
import Projects_Text from './Projects_Text.js';
import Bubble from './Bubble.js';
import profPic from './assets/piratebaby.png';
import cb_title from './assets/codebase_icon.png'
import Montserrat from './assets/Montserrat/Montserrat-Light.ttf';
import bogosort_icon from './assets/bogosort.png';
import app1_icon from './assets/app1.png';
import app2_icon from './assets/app2.png';
import resume from './assets/resume_icon.png';
import email from './assets/email_icon.png';
import git from './assets/github_icon.png';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Name_Header">  
          <div className="name">
            <Headers text = "Warren"/>
            <Headers text = "Walker"/>
            <Headers text = "Wang"/>
            <div className = 'name_bubble'>
            <Bubble className = 'name_bubble' w = {65} h = {250} color = "#E6D6E3"/>
            </div>
          </div>
        </div>
        <div className = "About">
          <img className = "profile_pic" src = {profPic} width = "260" height = "260"/>

          <Bubble className = 'about_circle' w= {350} h = {350} color = '#E6D6E3'/>
          <p className = 'about_text'>I’m a student at UC Berkeley studing EECS. Here are a few thing’s I’ve done:</p>
          <h1 className = 'hello_text'>Hello!</h1>
        </div>
        <div className = "Exp_Section">
          <div className = "Exp_Header">
            <div className = "exp_title">
              <Headers text = "Experience"/>
            </div>
            <Bubble className = 'exp_bubble' w = {490} h = {90} color = "#C3E2E1"/>
          </div>
          <div className = "Exp_Contents"> 
          <div className = "left">
            <div className = "Codebase_Section">
              <img src = {cb_title} width = "320" height = "90"/>
              <p className = "codebase_text">In the Spring of 2019, I joined CodeBase, a student organization at Berkeley that provides innovative solutions through code to Bay area tech companies.</p>
            </div>
            <div className = "Atma_Section">
              <h className = "atma_header">Project Atma</h>
              <p className = "atma_text">In the Spring of 2019, I joined CodeBase, a student organization at Berkeley that provides innovative solutions through code to Bay area tech companies.</p>
            </div>

          </div>


          <div className = "lang_skills">
            <div className= "languages">
              <h className = "lang_header">Languages</h>
              <p className = "lang_list">Java  <br />Python <br />Swift <br />Scheme <br />SQL <br /> & Mandarin </p>
            </div>
            <div className= "skills">
              <h className = "skills_header">Skills</h>
              <p className = "skills_list">Data Analysis with Jupyter <br /> App Development <br />
               Machine Learning <br />
                React.js <br />
              Node.js <br />
              PostgreSQL <br />
              Unity Game Development
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className = "Proj_Section">
        
          <div className = "Proj_Header">
            <div className = "proj_title">
              <Headers text = "Projects"/>
            </div>
            <Bubble className = 'proj_bubble' w = {400} h = {90} color = "#C3E2E1"/>
          </div>

          <div className = "Proj_Contents"> 
            <div className = "images">
              <img className = 'bogosort_pic' src = {bogosort_icon} width = "460" height = "250"></img>
              <div className = "app_images">
                <img className = "app_1" src = {app1_icon} width = "220" height = "400"></img>
                <img className = "app_2" src = {app2_icon} width = "220" height = "400"></img>
                </div>

              </div>
              <div className = "Proj_Words">
                <Projects_Text className = "bogosort" header = "Web Design with p5" text = "Used the p5 library to write a web app in javascript that demonstrated the heinously inefficient sorting algorithm: bogosort"/>
                <Projects_Text className = "app" header = "iOS App Development" text = "Used swift to write my own iOS app that integrated locationing, google maps, and camera functionality for users to save photos to locations in a visual interface"/>
              
                <div className = "connect">
                <h className = "connect_text">Let's Connect!</h>
                <div className = "connect_icons">
                  <img className = 'resume' src = {resume} width = "90" height = "90"></img>
                  <img className = 'email' src = {email} width = "90" height = "90"></img>
                  <img className = 'git' src = {git} width = "90" height = "90"></img>

                </div>
              </div>
              </div>

              
            </div>
          </div>




        </div>
    );
  }
}

export default App;
