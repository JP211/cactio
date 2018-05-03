import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className = "Homepage">
        <div className="jumbotron">
          <div className="container">
          <div className="shadowPanel">
            <h1 className="display-3">Welcome to Cact.io!</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Get Started »</a></p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Homepage;
