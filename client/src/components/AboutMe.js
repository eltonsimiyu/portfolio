import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutMe = () => {
    const [about, setAbout] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/api/about')
            .then(response => setAbout(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="row g-0">
                    {/* Profile Image */}
                    <div className="col-md-4">
                        <img
                            src="/path-to-your-profile-image.jpg"
                            alt={about?.name || "Profile"}
                            className="img-fluid rounded-start"
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
                                        {about?.linkedin || "Not Provided"}
                                    </a>
                                </li>
                                <li>
                                    <strong>GitHub:</strong>{' '}
                                    <a
                                        href={about?.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {about?.github || "Not Provided"}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
