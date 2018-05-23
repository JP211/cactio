import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard';


import {
  Link
} from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
      <div className="MainDiv">

      <div className = "Projects">
        <div className="jumbotron">
          <div className="container">
          </div>
      </div>

      <div className="addProjectButton">
        <h1>ADD NEW PROJECT FORM</h1>
          <i className="material-icons">palette</i>
        </div>
      </div>

      <div className="ProjectCard">
      <ProjectCard />
      </div>

      </div>
    );
  }
}

export default Projects;
