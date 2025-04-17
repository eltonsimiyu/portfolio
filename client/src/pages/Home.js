import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0d6efd, #6610f2)',
          color: 'white',
          padding: '3rem 1rem',
          textAlign: 'center',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/elt.jpg`}
          alt="Elton Simiyu"
          className="img-fluid rounded-circle mb-4 shadow"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            border: '4px solid white',
          }}
        />
        <h1 className="fw-bold mb-2">Hi, I'm Elton Simiyu</h1>
        <p className="lead mb-4">
          Full-stack Developer · Network Admin · Tech Enthusiast<br />
          Passionate about building elegant and impactful software solutions.
        </p>
        <Link to="/about" className="btn btn-light btn-lg fw-semibold">
          Learn More About Me →
        </Link>
      </div>

      {/* About This Site Section */}
      <div className="container text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <h2 className="mb-3">About This Site</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Dive into my skills, experiences, and the tech I'm passionate about. This site showcases who I am,
          what I do, and how I can help bring ideas to life through code.
          Explore the About Me, Skills, and Contact sections to learn more.
        </p>
      </div>
    </>
  );
};

export default Home;
