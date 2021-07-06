import React, {Component} from 'react';
import './Home.css';
import HomeContent from  './HomeContent/HomeContent'

class Home extends Component{
    render(){
        return(
            <div className="aboutPage" id="home">
                <div className="bg-opacity">              
                    <HomeContent/>
                <div className="social-media">
                    <div className="social">
                        <a href="https://www.facebook.com/madina.jabrayil" target='_blank'><i className="fab fa-facebook-f ss ss-fb"></i></a>
                    </div>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/madina-jabrayil-58a81b1a4" target='_blank'><i className="fab fa-linkedin-in ss ss-in"></i></a>
                    </div>
                    <div className="social">
                        <a href="https://github.com/madinajabrayil" target='_blank'> <i className="fab fa-github ss"></i></a>
                    </div>
                </div>
                <a href="#about"><i className="fas fa-chevron-down scr-down"></i></a> 
                </div>
            </div>
        )
    }
}

export default Home;