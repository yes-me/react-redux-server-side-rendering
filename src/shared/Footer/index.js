import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DockVideo from './DockVideo'
import './footer.css';

/**
 * footer Component
 */
export default class Header extends Component {
  /**
   * render
   * return {ReactElement} markup
   */
  render() { 
    return (
      
      <footer>
        <DockVideo />
        <div className="footer-content">
          <ul className="footer-wrapper">
            <li className="footer-link"><Link to="/" >Home</Link></li>
            <li className="footer-link"><Link to="/about" >About</Link></li>
            <li className="footer-link"><Link to="/contact-us">Contact Us</Link></li>
            <li className="copy">Copyright © 2017 Amy Huang</li>
          </ul>
        </div>
      </footer>
    );
  }
}
