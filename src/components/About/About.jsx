import React, { Component } from 'react';
import './About.css';

import aboutPic from '../../images/ab.jpg'

class About extends Component{
    render(){
        return(
            <div className="about-section" id="about">
                <div className="about-container">
                    <div className="about-content">
                        <h2 className="about-h2">About me</h2>
                        <p className="text">I'am Madina Jabrayil and born on the 11th January 2000. I'm junior frontend developer based in Baku. I love spending time on fixing little details and optimizing websites.</p>
                    </div>
                    <div className="about-img-section">
                         <img className="about-img" src={aboutPic} alt="My Pic"/>
                     </div>
                </div>
            </div>
        )
    }
}

export default About;