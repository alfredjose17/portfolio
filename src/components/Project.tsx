import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/alfredjose17/social-club" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/alfredjose17/social-club" target="_blank" rel="noreferrer"><h2>Serverless Architecture on AWS</h2></a>
                    <p>A project implementing a fully serverless web application using AWS Lambda, API Gateway, DynamoDB, S3, and Cognito for secure, scalable, and cost-effective backend and user authentication services.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/alfredjose17/springboot-microservice-app" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/alfredjose17/springboot-microservice-app" target="_blank" rel="noreferrer"><h2>Spring Boot Microservices Application</h2></a>
                    <p>A cloud-native Spring Boot microservices application featuring REST APIs, Apache Kafka event-driven communication, Docker containerization, Kubernetes deployment, and a full observability stack.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/alfredjose17/automation-labs" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/alfredjose17/automation-labs" target="_blank" rel="noreferrer"><h2>Azure Automation with Terraform and Ansible</h2></a>
                    <p>A project focused on automating the provisioning and management of Azure cloud resources using Terraform and Ansible for efficient configuration, deployment, and orchestration.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/alfredjose17/fight-club-app" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/alfredjose17/fight-club-app" target="_blank" rel="noreferrer"><h2>Django Application on Google Cloud</h2></a>
                    <p>A Django web application project focused on automating CI/CD processes using Docker, Google Kubernetes Engine, Helm, and CI/CD pipelines.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/alfredjose17/react-movie-app" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/alfredjose17/react-movie-app" target="_blank" rel="noreferrer"><h2>React Movie App</h2></a>
                    <p>A React movie browsing application that integrates the TMDB API to search movies and manage favorites.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/alfredjose17/blockchain-developer-bootcamp-final-project" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/alfredjose17/blockchain-developer-bootcamp-final-project" target="_blank" rel="noreferrer"><h2>React dApp on Ethereum</h2></a>
                    <p>A Dapp for yield farming, allowing users to stake crypto assets into the TokenFarm contract and earn rewards in ACE, an ERC20 token, with the option to unstake and withdraw rewards anytime.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;