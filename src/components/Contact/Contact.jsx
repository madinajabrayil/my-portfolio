import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component{
    render(){
        return(
            <div className="contact-section" id="contact">
                <div className="line"></div>    
                <div className="contact-container">
                   <span className="address"><i class="fas fa-map-marker-alt"></i>Azerbaijan,Baku</span>
                   <span className="email"><i class="fas fa-envelope"></i>madi.jabra13@gmail.com</span>
                   <span className="number"><i class="fas fa-phone-alt"></i>+994 507701815</span>
                   <span className="github"><i class="fab fa-github"></i> madinajabrayil</span>
                </div>
               
            </div>
        )
    }
}

export default Contact;