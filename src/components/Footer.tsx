import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/alfredjose17" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/alfred-jose/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Have an idea?&#x1F4A1; Let's connect!</p>
    </footer>
  );
}

export default Footer;