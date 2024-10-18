import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from '../../assests/logo.png';  
import { MdContactMail } from "react-icons/md";
import "@fontsource/poppins";

const LandingPage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "A COMPLETE MULTIPLE BUSINESS PLATFORM";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval); 
  }, [fullText]); // Added fullText as a dependency to prevent stale closure

  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li className="business-rasta">{displayedText}</li>
            <li>
              <a href="#contact">
                <MdContactMail className='icon' />Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default LandingPage;
