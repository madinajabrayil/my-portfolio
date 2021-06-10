import React,{Component} from "react";
import './Portfolio.css';
import demo1 from '../../images/demo1.png';
import demo2 from '../../images/demo2.png';
import demo3 from '../../images/demo3.png';
import demo4 from '../../images/demo4.png';


class  Portfolio extends Component{
    state={
        demos:[
            {
                projectName:"Design and Develop",
                imageSrc:demo1,
                demoUrl:"https://deploy-project.netlify.app",
                codeUrl:"https://github.com/madinajabrayil/project"
            },
            {
             projectName:"Starbucks Landing Page",
             imageSrc:demo2,
             demoUrl:"https://starbucks-page.netlify.app",
             codeUrl:"https://github.com/madinajabrayil/starbucks-landing-page"
            },
            {
                projectName:"IMAJH E-commerce",
                imageSrc:demo3,
                demoUrl:"https://imajh-e-commerce.netlify.app",
                codeUrl:"https://github.com/madinajabrayil/e-commerce"
               },
           
               {
                projectName:"Admin Panel",
                imageSrc:demo4,
                demoUrl:"https://adminpanel1.netlify.app/index.html",
                codeUrl:"https://github.com/madinajabrayil/AdminPanel"
               },
           
               

        ]
    }
    render(){
        return(
            <div className="portfolio-section" id="portfolio">
                <div className="portfolio">
                   <h2 className="portfolio-h2">Portfolio</h2>
                   <div className="demos">
                   {this.state.demos.map((item,index) =>  
                       <div className="portfo-demo">
                           <div className="demo-image">
                               <img src={item.imageSrc} alt="Demo photo" className="img" key={index}/>
                           </div>
                           <p className="project-name" key={index}>{item.projectName}</p>
                            <div className="demo-btns">
                                    <a href={item.demoUrl} className="btn-demo" target="_blank" key={index}><i class="fas fa-desktop"></i>Demo</a>
                                    <a href={item.codeUrl} className="btn-code" target="_blank" key={index}><i class="fas fa-code"></i>Code</a>
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