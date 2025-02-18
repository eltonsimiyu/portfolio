import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/skills')
            .then(response => setSkills(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mt-5">
            <h2>Skills</h2>
            <ul className="list-group">
                {skills.map(skill => (
                    <li key={skill.id} className="list-group-item">
                        {skill.skill_name} ({skill.category})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
