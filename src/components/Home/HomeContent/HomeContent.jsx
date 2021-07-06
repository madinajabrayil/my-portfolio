import React,{Component} from 'react';
import './HomeContent.css';
import cv from '../../../images/Madina_Jabrayil.pdf'

class HomeContent extends Component{
    render(){
        return(
            <div className="home-content">
                <div className="content-container">
                    <h1 className="content-h1">Hi! I'm Madina Jabrayil.</h1>
                    <p className="content-text">I'm Frontend Developer.</p>
                    <a href={cv} download className="cv"> <i className="fas fa-download down-icon"></i>Download CV</a>
                </div>
            </div>
        )
    }
}

export default HomeContent;