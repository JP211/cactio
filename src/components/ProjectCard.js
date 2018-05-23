import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

export default class ProjectCard extends Component {

  render() {

    return (

      <div className="cards">
      {/* BEGIN CARD SECTION */}
      <main>
  		<Link to="/View" title="Post 1">
  			<article>
        <p className="title">Demo Project</p>
  					<figcaption>Post 1</figcaption><span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734; </span>
            <figure>
              <img src="https://placehold.it/480x360" alt="image-1"/>
  				</figure>
  			</article>
  		</Link>
  	</main>
    {/* END CARD SECTION */}
      </div>

    );
  }
}
