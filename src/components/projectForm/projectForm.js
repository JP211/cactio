import React, { Component } from 'react';

class Form extends Component {
  state = {
    projectName: '',
    difficultyLevel: '',
    estimatedTime: '',
    projectDescription: '',
    projectPhoto: '',
    projectVideo: '',
    suppliesList: '',
  }

  render() {
    return (
      <div className="projectForm">
      this is the form content
    </div>

    );
  }
}

export default Form;
