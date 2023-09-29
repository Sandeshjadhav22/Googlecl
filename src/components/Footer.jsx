import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
   <footer className='footer'>
     <div className='container'>
       <div className='row'>
        <div className='footer-col'>
            <h4>GDSC Cloud</h4>
            <ul>
                <li><a href="/">about us</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">programs</a></li>
                <li><a href="/">privacy policy</a></li>
                
            </ul>
        </div>
        <div className='footer-col'>
            <h4>GDSC-DMCE</h4>
            <ul>
                <li><a href="/">Tech team</a></li>
                <li><a href="/">Social media</a></li>
                <li><a href="/">Publicity</a></li>
            </ul>
        </div>
        <div className='footer-col'>
            <h4>get help</h4>
            <ul>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Contact us</a></li>
                
            </ul>
        </div>
        
        

       </div>
     </div>
   </footer>
  );
}

export default Footer;
