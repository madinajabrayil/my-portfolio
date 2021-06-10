import React, { Component } from 'react';
import './Skills.css';
import Skill from './Skill/Skill';

class Skills extends Component{
    render(){
        return(
            <div className="skills-section" id="skills">
              <div className="skills-container">
                <h2 className="skills-h2">Skills</h2>
                <Skill/>
                </div>
            </div>
        )
    }
}

export default Skills;