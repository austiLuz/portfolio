import React from 'react';
import "./contact.css";


const Contact = () => {
    
  
    return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Let's Connect</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                
                <div className="contact__info">
                    <div className="contact__card">
                        <HiOutlineMail className="contact__card-icon" />
                        
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">ian.austin.business@gmail.com</span>
                        
                        <a href="mailto:ian.austin.business@gmail.com" className="contact__button">
                            Write Me{" "} 
                            <HiOutlineArrowSmRight className="contact__button-icon" />
                        </a>
                    </div>
                </div>
            </div>
            </div>
    </section>
  );
}

export default Contact;
