import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.jpeg';
import aws from '../assets/images/aws.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="about-content-wrapper">
          <div className="image-wrapper">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a href="https://github.com/alfredjose17" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/alfred-jose/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <h1>Alfred Jose</h1>
            <p>Software Engineer</p>
            <a href="https://www.credly.com/badges/bee35b03-6637-4838-a7f1-46c9a4d8817a" target="_blank" rel="noreferrer">
              <img src={aws} alt="AWS Certified" className="aws-badge" />
            </a>

            <div className="mobile_social_icons">
              <a href="https://github.com/alfredjose17" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/alfred-jose/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;