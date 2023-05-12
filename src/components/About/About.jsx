import React from 'react';
import './about.css';
import AboutImg from '../../assets/logo2.png';
import CV from '../..//assets/CV.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Junior Frontend Developer</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">Frontend developer at the start of my journey, I started to code in December 2022 having worked in the tech/startup environment in London for 8 years within sales, partnerships & growth. I'm eager to build and continue to learn on what I've taught myself and through Codeacademy.</p>
                
                <a download="" href={CV} className="button button--flex">Download CV</a>
            </div>
        </div>
    </section>
  )
}

export default About