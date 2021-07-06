import React, { Component } from 'react';

import './Menu.css'


class Menu extends Component{
    
    render(){
        return(
            <div className="menu-section" >
                <ul className="menu-nav">
                    <li className="nav-link"><a className="nav-link-a" href="#home">Home</a> <div className="link-line"></div></li>
                    <li className="nav-link"><a className="nav-link-a" href="#about">About</a> <div className="link-line"></div> </li>
                    <li className="nav-link"><a className="nav-link-a" href="#education">Education</a>  <div className="link-line"></div></li>
                    <div className="logo nav-link">MJ.</div> 
                    <li className="nav-link"><a className="nav-link-a" href="#skills">Skills</a> <div className="link-line"></div> </li>
                    <li className="nav-link"><a className="nav-link-a" href="#portfolio">Portfolio</a>  <div className="link-line"></div></li>
                    <li className="nav-link"><a className="nav-link-a" href="#contact">Contact</a> <div className="link-line"></div></li>
                </ul>
            </div>
        )
    }
}

export default Menu;