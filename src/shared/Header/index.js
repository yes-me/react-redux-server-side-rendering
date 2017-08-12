import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import logo from "../Images/fox-logo.png";
/**
 * footer Component
 */
export default class Navigation extends Component {
  /**
   * render
   * return {ReactElement} markup
   */
  render() {
    return (
      <nav className="nav-container"> 
        <ul  className="nav-wrapper">
          <li className="nav-link"><Link to="/" ><img className="logo" src={logo} /></Link></li>
          <li className="nav-link" ><Link to="/" >Home</Link></li>
          <li className="nav-link" ><Link to="/video">Video</Link></li>
        </ul>
      </nav>
    );
  }
}
