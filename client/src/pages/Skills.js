import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [skills, setSkills] = useState({ technicalSkills: [], softSkills: [] });
  const [query, setQuery] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

    axios.get(`${API_URL}/api/skills`)
      .then(response => setSkills(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredTechnical = skills.technicalSkills?.filter(skill =>
    skill.skill_name.toLowerCase().includes(query.toLowerCase())
  ) || [];

  const filteredSoft = skills.softSkills?.filter(skill =>
    skill.skill_name.toLowerCase().includes(query.toLowerCase())
  ) || [];

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

      {/* Technical Skills */}
      <div className="mb-5">
        <h2 className="text-primary mb-4">Technical Skills</h2>
        <div className="row">
          {filteredTechnical.map((skill, index) => (
            <div className="col-md-6 mb-4" key={index} data-aos="fade-right">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{skill.skill_name}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      role="progressbar"
                      style={{ width: `${skill.proficiency}%` }}
                      aria-valuenow={skill.proficiency}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.proficiency}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h2 className="text-secondary mb-4">Soft Skills</h2>
        <div className="row">
          {filteredSoft.map((skill, index) => (
            <div className="col-md-6 mb-4" key={index} data-aos="fade-left">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{skill.skill_name}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      role="progressbar"
                      style={{ width: `${skill.proficiency}%` }}
                      aria-valuenow={skill.proficiency}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.proficiency}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center mt-5">
        <a
          href={`${process.env.REACT_APP_API_URL}/api/download-skills`}
          className="btn btn-outline-primary"
        >
          📥 Download Skills CSV
        </a>
      </div>
    </div>
  );
};

export default Skills;
