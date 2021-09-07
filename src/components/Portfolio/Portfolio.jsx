import React,{Component} from "react";
import './Portfolio.css';
import demo1 from '../../images/demo1.png';
import demo2 from '../../images/demo2.png';
import demo3 from '../../images/demo3.png';
import demo4 from '../../images/demo4.png';
import demo5 from '../../images/demo5.png';
import demo6 from '../../images/demo6.png';
import demo7 from '../../images/demo7.png';


class  Portfolio extends Component{
    state={
        demos:[
            {
                id:1,
                projectName:"Admin Panel (Theme)",
                imageSrc:`url(${demo6})`,
                demoUrl:"https://admin-panel2.netlify.app/",
                codeUrl:"https://github.com/madinajabrayil/AdminPanel2"
            },
            {
                id:2,
                projectName:"Design and Develop",
                imageSrc:`url(${demo1})`,
                demoUrl:"https://deploy-project.netlify.app",
                codeUrl:"https://github.com/madinajabrayil/project"
            },
            {
                id:3,
                projectName:"Starbucks Landing Page",
                imageSrc:`url(${demo2})`,
                demoUrl:"https://starbucks-page.netlify.app",
                codeUrl:"https://github.com/madinajabrayil/starbucks-landing-page"
            },
            {
                id:4,
                projectName:"IMAJH E-commerce",
                imageSrc:`url(${demo3})`,
                demoUrl:"https://imajh-e-commerce.netlify.app",
                codeUrl:"https://github.com/madinajabrayil/e-commerce"
            },
           
            {
                id:5,
                projectName:"Admin Panel",
                imageSrc:`url(${demo4})`,
                demoUrl:"https://adminpanel1.netlify.app/index.html",
                codeUrl:"https://github.com/madinajabrayil/AdminPanel"
            },
            {
                id:6,
                projectName:"Dashboard",
                imageSrc:`url(${demo5})`,
                demoUrl:"https://dashboard-project1.netlify.app/",
                codeUrl:"https://github.com/madinajabrayil/dashboard"
               
            },
            {
                id:6,
                projectName:"Tic-Tac-Toe",
                imageSrc:`url(${demo7})`,
                demoUrl:"https://tictactoe-iba.netlify.app",
                codeUrl:"https://github.com/madinajabrayil/tic-tac-toe"
             
            },
           
               

        ]
    }
    render(){
        return(
            <div className="portfolio-section" id="portfolio">
                <div className="portfolio">
                   <h2 className="portfolio-h2">Portfolio</h2>
                   <div className="demos">
                   {this.state.demos.map((item) =>  
                       <div className="portfo-demo">
                           <div className="demo-image">
                               <div className="img"  style={{backgroundImage:item.imageSrc}}></div>
                           </div>
                           <p className="project-name" key={item.id}>{item.projectName}</p>
                            <div className="demo-btns">
                                    <a href={item.demoUrl} className="btn-demo" target="_blank" key={item.id}><i className="fas fa-desktop"></i>Demo</a>
                                    <a href={item.codeUrl} className="btn-code" target="_blank" key={item.id}><i className="fas fa-code"></i>Code</a>
                            </div>
                       </div> 
                   )}
                
                   </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;
