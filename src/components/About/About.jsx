import React, { useEffect } from 'react';
import './About.css';
import aboutPic from '../../images/ab.jpg'

const About = () =>{
        return(
            <div className="about-section" id="about"  >
                <div className="about-container">
                    <div className="about-content">
                        <h2 className="about-h2">About me</h2>
                        <i class="fab fa-pushed abt-ic"></i>
                       
                        <p className="text">I'am Madina Jabrayil and born on the 11th January 2000. I'm junior frontend developer based in Baku. I love spending time on fixing little details and optimizing websites.</p>
                        <div className="products">
                            <div className="product">
                                <i className="far fa-lightbulb pr-ic"></i>
                                <div className="line-x"></div>
                                <p>idea</p>
                            </div>
                            <div className="product">
                                <i className="fas fa-pencil-ruler pr-ic"></i>
                                <div className="line-x"></div>
                                <p>design</p>
                            </div>
                            <div className="product">
                                <i className="fas fa-code pr-ic"></i>
                                <div className="line-x"></div>
                                <p>development</p>
                            </div>
                            <div className="product">
                                <i class="fas fa-check-double pr-ic"></i>
                                <div className="line-x"></div>
                                <p>success</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    
}

export default About;