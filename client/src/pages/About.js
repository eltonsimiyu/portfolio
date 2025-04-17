import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    const [about, setAbout] = useState({});
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        // Initialize AOS for animations
        AOS.init({ duration: 1000 });

        // Fetch data from backend using environment variable
        const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

        axios.get(`${API_URL}/api/about`)
            .then(response => {
                setAbout(response.data.about);
                setEducation(response.data.education || []);
                setExperience(response.data.experience || []);
            })
            .catch(error => console.error("API Error:", error));
    }, []);

    return (
        <div className="container mt-5">
            {/* About Section */}
            <div className="card shadow-lg mb-5" data-aos="fade-up">

                <div className="row g-0">
                    {/* Profile Image */}
                    <div className="col-md-4">
                        <img
                            src={`${process.env.PUBLIC_URL}/${about?.profilePicture || "elt.jpg"}` || "/portfolio/elt.jpg"}
                            alt={about?.name || "Profile"}
                            className="img-fluid rounded-start"
                            loading="lazy"
                        />

                    </div>

                    {/* About Details */}
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{about?.name || "Name Not Provided"}</h1>
                            <p className="card-text">{about?.summary || "Summary not available"}</p>

                            <ul className="list-unstyled mt-3">
                                <li>
                                    <strong>Email:</strong>{' '}
                                    <a href={`mailto:${about?.email || ""}`}>
                                        {about?.email || "Not Provided"}
                                    </a>
                                </li>
                                <li><strong>Phone:</strong> {about?.phone || "Not Provided"}</li>
                                <li><strong>Date of Birth:</strong> {about?.Dateofbirth || "Not Provided"}</li>
                                <li><strong>Nationality:</strong> {about?.nationality || "Not Provided"}</li>
                                <li>
                                    <strong>LinkedIn:</strong>{' '}
                                    <a
                                        href={about?.linkedin || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin text-primary"></i>
                                    </a>
                                </li>
                                <li>
                                    <strong>GitHub:</strong>{' '}
                                    <a
                                        href={about?.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-github text-dark"></i>
                                    </a>
                                </li>
                            </ul>

                            {/* View CV Button */}
                            <button
                                type="button"
                                className="btn btn-primary mt-4"
                                data-bs-toggle="modal"
                                data-bs-target="#cvModal">
                                View My CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="card shadow-lg mb-3" data-aos="fade-left">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h2 className="mb-0">Education</h2>
                    <button
                        className="btn btn-link"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#educationCollapse"
                        aria-expanded="false"
                        aria-controls="educationCollapse"
                    >
                        Toggle
                    </button>
                </div>
                <div id="educationCollapse" className="collapse">
                    <div className="card-body">
                        <ul className="list-unstyled">
                            {education.length > 0 ? (
                                education.map((edu, index) => (
                                    <li key={index} className="mb-3">
                                        <i className="fas fa-graduation-cap text-primary"></i>{' '}
                                        <strong>{edu.degree}</strong> - {edu.institution} ({edu.start_date} to {edu.end_date})
                                        {edu.achievements?.length > 0 && (
                                            <ul className="mt-2">
                                                {edu.achievements.map((achievement, idx) => (
                                                    <li key={idx}>{achievement}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))
                            ) : (
                                <p>No education details available.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="card shadow-lg" data-aos="fade-right">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h2 className="mb-0">Experience</h2>
                    <button
                        className="btn btn-link"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#experienceCollapse"
                        aria-expanded="false"
                        aria-controls="experienceCollapse"
                    >
                        Toggle
                    </button>
                </div>
                <div id="experienceCollapse" className="collapse">
                    <div className="card-body">
                        <ul className="list-unstyled">
                            {experience.length > 0 ? (
                                experience.map((exp, index) => (
                                    <li key={index} className="mb-3">
                                        <i className="fas fa-briefcase text-success"></i>{' '}
                                        <strong>{exp.role}</strong> - {exp.company} ({exp.start_date} to {exp.end_date})
                                        <p>{exp.description}</p>
                                        {exp.responsibilities?.length > 0 && (
                                            <ul className="mt-2">
                                                {exp.responsibilities.map((task, idx) => (
                                                    <li key={idx}>{task}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))
                            ) : (
                                <p>No experience details available.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            {/* CV Modal */}
            <div className="modal fade" id="cvModal" tabIndex="-1" aria-labelledby="cvModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cvModalLabel">My CV</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe
                                src={`${process.env.PUBLIC_URL}/Elton_Simiyu_cv.pdf`}
                                title="CV"
                                width="100%"
                                height="500px"
                            ></iframe>
                        </div>
                        <div className="modal-footer">
                            <a href={`${process.env.PUBLIC_URL}/Elton_Simiyu_cv.pdf`} download className="btn btn-primary">
                                Download My CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
