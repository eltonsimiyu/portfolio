import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    const [skills, setSkills] = useState({ technicalSkills: [], softSkills: [] });
    const [query, setQuery] = useState("");

    useEffect(() => {
        // Initialize AOS for animations
        AOS.init({ duration: 1000 });

        // Fetch skills data from the backend
        axios.get('http://localhost:5000/api/skills')
            .then(response => setSkills(response.data))
            .catch(error => console.error(error));
    }, []);

    // Filter technical skills based on the search query
    const filteredTechnical = skills.technicalSkills
        ? skills.technicalSkills.filter(skill =>
            skill.skill_name.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    // Filter soft skills based on the search query
    const filteredSoft = skills.softSkills
        ? skills.softSkills.filter(skill =>
            skill.skill_name.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    // Dynamically add icons for technical skills
    const skillIcons = {
        "Node.js": <i className="fab fa-node-js text-success"></i>,
        "React.js": <i className="fab fa-react text-primary"></i>,
        "SQL": <i className="fas fa-database text-warning"></i>,
        "Django": <i className="fas fa-python text-info"></i>
    };

    // Group technical skills by category
    const groupedTechnicalSkills = filteredTechnical.reduce((acc, skill) => {
        const category = skill.category || "Others";
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {});

    return (
        <div className="container mt-5">
            {/* Search Bar */}
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search skills..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {/* Technical Skills Section */}
            <div className="card shadow-lg mb-5">
                <div className="card-body">
                    <h2 className="card-title">Technical Skills</h2>
                    {Object.entries(groupedTechnicalSkills).map(([category, skills]) => (
                        <div key={category}>
                            <h3>{category}</h3>
                            <ul className="list-unstyled">
                                {skills.map((skill, index) => (
                                    <li key={index} className="mb-3" data-aos="fade-right">
                                        {skillIcons[skill.skill_name]}{' '}
                                        <strong>{skill.skill_name}</strong>
                                        <div className="progress mt-2">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: `${skill.proficiency}%` }}
                                                aria-valuenow={skill.proficiency}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {skill.proficiency}%
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Soft Skills Section */}
            <div className="card shadow-lg">
                <div className="card-body">
                    <h2 className="card-title">Soft Skills</h2>
                    <ul className="list-unstyled">
                        {filteredSoft.length > 0 ? (
                            filteredSoft.map((skill, index) => (
                                <li key={index} className="mb-3" data-aos="fade-left">
                                    <strong>{skill.skill_name}</strong>
                                    <div className="progress mt-2">
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: `${skill.proficiency}%` }}
                                            aria-valuenow={skill.proficiency}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {skill.proficiency}%
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p>No soft skills available.</p>
                        )}
                    </ul>
                </div>
            </div>

            {/* Download Skills Button */}
            <div className="text-center mt-5">
                <a
                    href="http://localhost:5000/api/download-skills"
                    className="btn btn-primary"
                >
                    Download Skills as CSV
                </a>
            </div>
        </div>
    );
};

export default Skills;
