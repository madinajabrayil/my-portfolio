import React, { Component } from 'react';
// import SwitchButton from '../SwitchButton/SwitchButton'
import './Menu.css'


class Menu extends Component{
    
    render(){
        return(
            <div className="menu-section">
                <ul className="menu-nav">
                 
                  <li className="nav-link"><a className="nav-link-a" href="#home">Home</a> </li>
                 <li className="nav-link"><a className="nav-link-a" href="#about">About</a> </li>
                 <li className="nav-link"><a className="nav-link-a" href="#skills">Skills</a> </li>
                 <li className="nav-link"><a className="nav-link-a" href="#education">Education</a> </li>
                 <li className="nav-link"><a className="nav-link-a" href="#portfolio">Portfolio</a> </li>
                 <li className="nav-link"><a className="nav-link-a" href="#contact">Contact</a></li>
                
                </ul>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <li><a className="nav-link-burger" href="#home">Home</a></li>
                            <li><a className="nav-link-burger" href="#about">About</a></li>
                            <li> <a className="nav-link-burger" href="#skills">Skills</a></li>
                            <li><a className="nav-link-burger" href="#education">Education</a></li>
                            <li><a className="nav-link-burger" href="#portfolio">Portfolio</a></li>
                            <li> <a className="nav-link-burger" href="#contact">Contact</a> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;