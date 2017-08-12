import React, {Component} from 'react';
import {Link} from 'react-router';
import FeaturedVideos from './FeaturedVideos'
import './FeaturedVideos.css'

/**
 * footer Component
 */
export default class Aside extends Component {
  /**
   * render
   * return {ReactElement} markup
   */
  render() {

    return (
      <section className="feature-videos">
        <ul className="feature-video-list">
            <li className="feature-video-item">
              <FeaturedVideos video="A63kWP9DrKQ" autoplay="0" rel="0" modest="1" />
              <h3>Meet Mr Cobra: The King of Shelby Cobras - XCAR</h3>
            </li>
            <li className="feature-video-item">
              <FeaturedVideos video="dyGU1-1qlj0" autoplay="0" rel="0" modest="opaque" />
              <h3>Pedal to the Metal: Interview with Mr. Cobra</h3>
            </li>
            <li className="feature-video-item">
              <FeaturedVideos video="WkkES24xc-w" autoplay="0" rel="0" modest="opaque" />
              <h3>Allan Grant Lynn Park interview</h3>
            </li>
        </ul>
      </section>
    );
  }
}
