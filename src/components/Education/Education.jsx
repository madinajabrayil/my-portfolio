import React,{Component} from 'react';
import './Education.css';

class Education extends Component{

    render(){
        return(
            <div className="edu-section" id="education">
                <h2 className="edu-h2">Education & Experience</h2>
                  <div className="edu-content">
                        <div className="edu">
                            <div className="edu-info">
                                <p className="year"><i className="fas fa-clock"></i>2017-2021</p>
                                <p className="academy"><i className="fas fa-school"></i>Azerbaijan State Oil and Industry University</p>
                                <p className="info"><i className="fas fa-graduation-cap"></i>Process Automation Engineering</p>
                            </div>
                            
                            <div className="edu-info">
                                <p className="year"><i className="fas fa-clock"></i>2021</p>
                                <p className="academy"><i className="fas fa-school"></i>Barama Innovation and Entrepreneurship Center</p>
                                <p className="info"><i className="fas fa-graduation-cap"></i>Startup School</p>
                            </div>
                           
                            <div className="edu-info">
                                <p className="year"><i className="fas fa-clock"></i>2020</p>
                                <p className="academy"><i className="fas fa-school"></i>IBATech Academy</p>
                                <p className="info"><i className="fas fa-graduation-cap"></i>Cyber Security and Sysadmin</p>
                            </div>
                            
                            <div className="edu-info">
                                <p className="year"><i className="fas fa-clock"></i>2020</p>
                                <p className="academy"><i className="fas fa-school"></i>Baku Higher Oil School</p>
                                <p className="info"><i className="fas fa-graduation-cap"></i>Business Education for Engineers</p>
                            </div>
                         
                            <div className="edu-info">
                                <p className="year"><i className="fas fa-clock"></i>2019</p>
                                <p className="academy"><i className="fas fa-school"></i>IBATech Academy</p>
                                <p className="info"><i className="fas fa-graduation-cap"></i>Frontend Development</p>
                            </div>
                          
                            <div className="edu-info">
                                <p className="year"><i className="fas fa-clock"></i>2018-2019</p>
                                <p className="academy"><i className="fas fa-school"></i>Code Academy</p>
                                <p className="info"><i className="fas fa-graduation-cap"></i>Full Stack Web Development</p>
                            </div>
                          
                            <div className="edu-info">
                                <p className="year"><i className="fas fa-clock"></i>2017-2018</p>
                                <p className="academy"><i className="fas fa-school"></i>Code Academy</p>
                                <p className="info"><i className="fas fa-graduation-cap"></i>MS Office</p>
                            </div>
                            
                       </div> 
                   </div>
            </div>
        )
    }
}

export default Education;