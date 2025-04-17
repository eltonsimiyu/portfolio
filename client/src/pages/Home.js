import React from 'react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div
                className="d-flex align-items-center justify-content-center text-white"
                style={{
                    backgroundColor: '#f8f9fa', 
                    paddingTop: '4rem',
                    paddingBottom: '4rem',
                  }}
            >
                <div style={{ maxWidth: '700px', textAlign: 'center' }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/elt.jpg` || ""}
                        alt="Profile"
                        className="img-fluid rounded-circle mb-4 shadow"
                        style={{
                            width: '160px',
                            height: '160px',
                            objectFit: 'cover',
                            border: '4px solid white',
                        }}
                    />
                    <h1 className="display-5 fw-bold">Hi, I'm Elton Simiyu</h1>
                    <p className="lead mb-4">
                        A passionate Computer Scientist and Developer turning ideas into impact. I build efficient,
                        elegant software solutions and love solving real-world problems through code.
                    </p>
                    <a
                        href="#about"
                        className="btn btn-light btn-lg"
                        style={{ fontWeight: '500' }}
                    >
                        Explore My Work
                    </a>
                </div>
            </div>

            {/* Intro Section */}
            <div className="container mt-5 text-center" id="about">
                <h2 className="mb-3">About This Site</h2>
                <p className="text-muted">
                    Dive into my projects, skills, and experience as a developer.
                    Visit the About Me, Skills, and Contact pages to learn more.
                </p>
            </div>
        </>
    );
};

export default Home;

/* this is my code for home. merge the changes and further enhancement in one place. import React from 'react';

const Home = () => {
    return (
        <>
            <div className="bg-primary text-white text-center py-5">
                <div className="container">
                    <img
                        src="./elt.JPG"
                        alt="Profile"
                        className="img-fluid rounded-circle mb-4"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <h1 className="display-4">Welcome to My Portfolio</h1>
                    <p className="lead">
                        I'm Elton Simiyu, a passionate Computer Scientist and Developer ready to learn as well as serve.
                    </p>
                </div>
            </div>
            <div className="container mt-5">
                <h2>Explore More</h2>
                <p>
                    Check out the About Me, Skills, and Contact pages to learn more about my
                    journey and expertise.
                </p>
            </div>
        </>
    );
};

export default Home;
 */