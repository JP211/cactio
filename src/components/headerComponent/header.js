import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
      <div className = "logoBox">
          {/*<img className="card-img-top" src={require('../../Assets/images/logo.png')} alt={'Pokie'}/>*/}
          </div>
      <nav>
        <ul>
          <li className="first">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="last">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      </header>
    );
  }
}

export default Header;
