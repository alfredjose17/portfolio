import React from "react";
import mock01 from '../assets/images/mock03.png';
import mock02 from '../assets/images/mock04.png';
import mock03 from '../assets/images/mock07.png';
import mock04 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/alfredjose17/fight-club-app" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alfredjose17/fight-club-app" target="_blank" rel="noreferrer"><h2>Fight Club</h2></a>
                <p>A Django web application project focused on automating CI/CD processes using Docker, Google Kubernetes Engine, Helm, and CI/CD pipelines.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alfredjose17/automation-labs" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alfredjose17/automation-labs" target="_blank" rel="noreferrer"><h2>Azure Automation with Terraform and Ansible</h2></a>
                <p>A project focused on automating the provisioning and management of Azure cloud resources using Terraform and Ansible for efficient configuration, deployment, and orchestration.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alfredjose17/blockchain-developer-bootcamp-final-project" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alfredjose17/blockchain-developer-bootcamp-final-project" target="_blank" rel="noreferrer"><h2>Ace Token Farm</h2></a>
                <p>A Dapp for yield farming, allowing users to stake crypto assets into the TokenFarm contract and earn rewards in ACE, an ERC20 token, with the option to unstake and withdraw rewards anytime.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alfredjose17/facebook-group-post-scrapper" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alfredjose17/facebook-group-post-scrapper" target="_blank" rel="noreferrer"><h2>Facebook Group Post Scrapper</h2></a>
                <p>Automated Facebook group post fetching using Selenium and BeautifulSoup, enabling quick data extraction. Integrated a Telegram bot to notify users about new posts in real-time.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;