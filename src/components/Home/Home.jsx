import React, {Component} from 'react';
import './Home.css';
import Menu from '../Menu/Menu'
import HomeContent from  './HomeContent/HomeContent'

class Home extends Component{
    render(){
        return(
            <div className="aboutPage" id="home">
                <div className="bg-opacity">              
                    <Menu/>
                    <HomeContent/>
                <div className="sosial-media">
                    <a href="https://www.facebook.com/madina.jabrayil" target='_blank'><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/in/madina-jabrayil-58a81b1a4" target='_blank'><i className="fab fa-linkedin-in"></i></a>
                   <a href="https://github.com/madinajabrayil" target='_blank'> <i className="fab fa-github"></i></a>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;