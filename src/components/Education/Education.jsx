import React,{Component} from 'react';
import './Education.css';

class Education extends Component{

    render(){
        return(
            <div className="edu-section" id="education">
                <h2 className="edu-h2">Education & Experience</h2>
                  <div className="edu-content">
                        <div className="edu">
                            <div className="connecting"></div>
                            <div className="edu-info left-side">
                                <p className="year"><i class="fas fa-clock"></i>2017-2021</p>
                                <p className="academy"><i class="fas fa-school"></i>Azerbaijan State Oil and Industry University</p>
                                <p className="info"><i class="fas fa-graduation-cap"></i>Process Automation Engineering</p>
                            </div>
                            <div className="circle"></div>
                            <div className="edu-info right-side">
                                <p className="year"><i class="fas fa-clock"></i>2021</p>
                                <p className="academy"><i class="fas fa-school"></i>Barama Innovation and Entrepreneurship Center</p>
                                <p className="info"><i class="fas fa-graduation-cap"></i>Startup School</p>
                            </div>
                            <div className="circle cr1"></div>
                            <div className="edu-info left-side sc">
                                <p className="year"><i class="fas fa-clock"></i>2020</p>
                                <p className="academy"><i class="fas fa-school"></i>IBATech Academy</p>
                                <p className="info"><i class="fas fa-graduation-cap"></i>Cyber Security and Sysadmin</p>
                            </div>
                            <div className="circle cr2"></div>
                            <div className="edu-info right-side sc">
                                <p className="year"><i class="fas fa-clock"></i>2020</p>
                                <p className="academy"><i class="fas fa-school"></i>Baku Higher Oil School</p>
                                <p className="info"><i class="fas fa-graduation-cap"></i>Business Education for Engineers</p>
                            </div>
                            <div className="circle cr3"></div>
                            <div className="edu-info left-side sc1">
                                <p className="year"><i class="fas fa-clock"></i>2019</p>
                                <p className="academy"><i class="fas fa-school"></i>IBATech Academy</p>
                                <p className="info"><i class="fas fa-graduation-cap"></i>Frontend Development</p>
                            </div>
                            <div className="circle cr4"></div>
                            <div className="edu-info right-side sc1">
                                <p className="year"><i class="fas fa-clock"></i>2018-2019</p>
                                <p className="academy"><i class="fas fa-school"></i>Code Academy</p>
                                <p className="info"><i class="fas fa-graduation-cap"></i>Full Stack Web Development</p>
                            </div>
                            <div className="circle cr5"></div>
                            <div className="edu-info left-side sc2">
                                <p className="year"><i class="fas fa-clock"></i>2017-2018</p>
                                <p className="academy"><i class="fas fa-school"></i>Code Academy</p>
                                <p className="info"><i class="fas fa-graduation-cap"></i>MS Office</p>
                            </div>
                            <div className="circle cr6"></div>
                            <div className="circle cr7"></div>
                       </div> 
                   </div>
            </div>
        )
    }
}

export default Education;