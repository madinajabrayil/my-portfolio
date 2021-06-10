import React, { Component } from 'react';
import './Skill.css';

class Skill extends Component{
    state={
        skills:[
            {
             skillname:"HTML",
             percent:"95%",
            },
            {
                skillname:"CSS",
                percent:"92%",
            },
            {
                skillname:"Javascript",
                percent:"85%",
            },
            {
                skillname:"ReactJs",
                percent:"70%",
            },
            {
                skillname:"Redux",
                percent:"60%",
            },
            {
                skillname:"SASS/SCSS",
                percent:"60%",
            },
             {
                skillname:"Bootstrap",
                percent:"60%",
            },
            {
                skillname:"Jquery",
                percent:"60%",
            },
            {
                skillname:"Git",
                percent:"60%",
            }, {
                skillname:"Npm",
                percent:"60%",
            }
        ]
    }
    render(){
        return(
            <div className="skill-section">
                {this.state.skills.map((item,index) =>  
                <div className="skill">
                    <p className="skill-name" key={index}>{item.skillname}</p>
                    <div className="percent">
                      <div className="skill-percent">
                        <div className="skill-content" key={index} style={{width:`${item.percent}`}}><span className="per-span">{item.percent}</span></div>   
                     </div>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default Skill;