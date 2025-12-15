import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faEthereum } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "AWS",
    "Docker",
    "Kubernetes",
    "Helm",
    "Terraform",
    "Git",
    "Linux",
    "Ansible",
    "Jenkins",
    "Github Actions",
    "GitLab",
    "SonarQube",
    "JFrog",
    "Elastic Stack",
    "Prometheus",
    "Grafana",
    "Cloud Security",
    "Computer Networks",
    "Microsoft Azure",
    "Google Cloud",
];

const labelsSecond = [
    "Python",
    "Flask",
    "Django",
    "JavaScript",
    "Node.js",
    "React",
    "Java",
    "Spring Boot",
    "SQL",
    "NoSQL",
    "REST API",
    "HTML5",
    "CSS3",
];

const labelsThird = [
    "Smart Contracts",
    "Ethereum",
    "Solidity",
    "Web3",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & DevSecOps</h3>
                    <p>I specialize in automating cloud infrastructure and implementing robust DevSecOps practices. My expertise includes building CI/CD pipelines, managing cloud resources on AWS, Azure, and GCP, and ensuring secure, scalable deployments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I build scalable and responsive web applications using modern frameworks like React, Node.js, Django and Flask. I have experience with both front-end and back-end development, ensuring seamless integration with databases and APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faEthereum} size="3x"/>
                    <h3>Blockchain Development</h3>
                    <p>I develop decentralized applications (DApps) and smart contracts, focusing on secure, scalable blockchain solutions. Experienced in Ethereum, Solidity, and Web3 for creating efficient smart contracts and integrating blockchain technology.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;