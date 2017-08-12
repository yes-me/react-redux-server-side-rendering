import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class FeaturedVideos extends Component {

    render() {
        const videoSrc = "https://www.youtube.com/embed/" + 
            this.props.video + "?autoplay=" + 
            this.props.autoplay + "&rel=" + 
            this.props.rel + "&modestbranding=" +
            this.props.modest;
            
        return (
        <div>
            <iframe className="player" type="text/html" width="395" height="240" src={videoSrc} frameBorder="0"/>
        </div>
        );
    }
}