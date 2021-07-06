import React, { useEffect } from 'react';
import './Contact.css';


const Contact = () =>{
  
        return(
            <div className="contact-section" id="contact" >
                <div className="line"></div>    
                <div className="contact-container">
                   <span className="address"><i className="fas fa-map-marker-alt"></i>Azerbaijan,Baku</span>
                   <span className="email"><i className="fas fa-envelope"></i>madi.jabra13@gmail.com</span>
                   <span className="number"><i className="fas fa-phone-alt"></i>+994 507701815</span>
                   <span className="github"><i className="fab fa-github"></i> madinajabrayil</span>
                </div> 
            </div>
        )
    
}

export default Contact;