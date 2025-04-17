import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
  className="text-white text-center py-5"
  style={{
    background: '#0d6efd', // Solid primary to match navbar/footer
    paddingTop: '5rem',
    paddingBottom: '5rem',
  }}
>
  <div className="container">
    <img
      src={`${process.env.PUBLIC_URL}/elt.jpg`}
      alt="Elton Simiyu"
      className="img-fluid rounded-circle mb-4 shadow"
      style={{
        width: '140px',
        height: '140px',
        objectFit: 'cover',
        border: '4px solid white',
      }}
    />
    <h1 className="fw-bold">Hi, I'm Elton Simiyu</h1>
    <p className="lead">
      Full-stack Developer · Network Admin · Tech Enthusiast
    </p>
    <Link to="/about" className="btn btn-light mt-3">
      Learn More →
    </Link>
  </div>
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
