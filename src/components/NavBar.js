import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {


render() {
  return <div className="NavBarContainer">
  					<div className="fadeOut"><h1 className="header">Lambda Notes</h1></div>
              <input type="checkbox" />
              <span></span>
          		<span></span>
          		<span></span>
    				<ul className="menu">
							<Link to='/' style={{ textDecoration: 'none' }}><h3 className="h3">Home</h3></Link>
							<Link to='/notes' style={{ textDecoration: 'none' }}><h3 className="h3">Notes</h3></Link>
							<Link to='/create' style={{ textDecoration: 'none' }}><h3 className="h3">Create</h3></Link>
							<Link to='/create' style={{ textDecoration: 'none' }}><h3 className="h3">Sign Up</h3></Link>
						</ul>
  				</div>
}
};

export default NavBar;














