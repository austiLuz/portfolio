import React from 'react';
import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';
import './icons.css';

const icons = () => {
        return (
            <div className='icons'>
                <a className='github' href='https://github.com/austiLuz' target='_blank' rel='noopener noreferrer'><RiGithubFill /></a>
                <a className='linkedin' href='https://www.linkedin.com/in/ian-austin1/' target='_blank' rel='noopener noreferrer'><RiLinkedinBoxFill /></a>
            </div>
        )
}

export default icons;