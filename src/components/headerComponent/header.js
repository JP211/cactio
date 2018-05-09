import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      	<nav>
      		<div>
            <img className="logo" src={require('../../Assets/images/logo.png')} alt={'text'} />
            </div>

      			<ul>
      				<li><Link to="/">Home</Link></li>
      				<li><Link to="/Projects">Projects</Link></li>
      				<li><Link to="/">Design</Link></li>
      				<li><Link to="/">Profile</Link></li>
      				<li><Link to="/">Login</Link></li>
              <li><Link to="/">Contact</Link></li>

      			</ul>
      	</nav>
    );
  }
}

export default Header;
