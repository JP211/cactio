import React, { Component } from 'react';

class Form extends Component {
  state = {
    projectTitle: '',
    difficultyLevel: '',
    estimatedTime: '',
    projectDescription: '',
    projectPhoto: '',
    projectVideo: '',
    suppliesList: '',
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="projectForm">
      <form>
      <input
      name = "projectTitle"
      placeholder="Project Title"
      value={this.state.projectTitle}
      onChange={e => this.change(e)}
      />
      <br />
      <input
      name = "difficultyLevel"
      placeholder = "Difficulty Level"
      value = {this.setState.difficultyLevel}
      onChange={e => this.change(e)}
      />
      <br />
      <input
      name = "estimatedTime"
      placeholder = "Estimated Time"
      value = {this.setState.estimatedTime}
      onChange={e => this.change(e)}
      />
      <br />
      <input
      name = "projectDescription"
      placeholder = "Description"
      value = {this.setState.projectDescription}
      onChange={e => this.change(e)}
      />
      <br />
      <input
      name = "projectPhoto"
      placeholder = "Photo Upload"
      value = {this.setState.projectPhoto}
      onChange={e => this.change(e)}
      />
      <br />
      <input
      name = "projectVideo"
      placeholder = "Youtube Video Embed"
      value = {this.setState.projectVideo}
      onChange={e => this.change(e)}
      />
      <br />
      <input
      name = "suppliesList"
      placeholder = "Supplies List"
      value = {this.setState.suppliesList}
      onChange={e => this.change(e)}
      />
      <br />

      <button onClick={() => this.onSubmit()}>Submit</button>

      </form>
    </div>

    );
  }
}

export default Form;
