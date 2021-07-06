import React, { Component } from 'react';
import './Skill.css';

class Skill extends Component{
    state={
        skills:[
            {
                id:1,
             skillname:"HTML",
             percent:"95%",
            },
            {
                id:2,
                skillname:"CSS",
                percent:"92%",
            },
            {
                id:3,
                skillname:"Javascript",
                percent:"85%",
            },
            {
                id:4,
                skillname:"ReactJs",
                percent:"80%",
            },
            {
                id:5,
                skillname:"Redux",
                percent:"60%",
            },
            {
                id:6,
                skillname:"SASS/SCSS",
                percent:"70%",
            },
             {
                id:7,
                skillname:"Bootstrap",
                percent:"70%",
            },
            {
                id:8,
                skillname:"Jquery",
                percent:"75%",
            },
            {
                id:9,
                skillname:"Git",
                percent:"70%",
            }, {
                id:10,
                skillname:"Npm",
                percent:"70%",
            }
        ]
    }
    render(){
        return(
            <div className="skill-section">
                {this.state.skills.map((item) =>  
                <div className="skill">
                    <p className="skill-name" key={item.id}>{item.skillname}</p>
                    <div className="percent">
                      <div className="skill-percent">
                        <div className="skill-content" key={item.id} style={{width:`${item.percent}`}}><span className="per-span">{item.percent}</span></div>   
                     </div>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default Skill;