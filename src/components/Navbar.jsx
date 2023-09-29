import React from 'react';
import "./Navbar.css";
import logo from "./images/logo.png";


const Navbar = () => {
  return (
    <div>
      <nav >
        <div>
          <img class="logo" src={logo} alt="logo" />
        </div>
        <div class="social-icon">
            <a target='_blank' href="https://www.linkedin.com/company/gdsc-dmce/"><i class="fa-brands fa-linkedin  linkedin" id="linkedin"></i></a>
            <a target='_blank' href="https://github.com/Google-Developer-Students-Club-DMCE"><i class="fa-brands fa-github  linkedin" id="linkedin1"></i></a>
            <a target='_blank' href="https://www.instagram.com/gdsc.dmce"><i class="fa-brands fa-instagram  linkedin" id="linkedin2"></i></a>
            <a target='_blank' href="https://www.youtube.com/@gdsc_dmce"><i class="fa-brands fa-youtube linkedin"></i></a>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;