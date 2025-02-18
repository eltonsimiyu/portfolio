import React from 'react';

const Hero = () => {
    return (
        <div className="bg-primary text-white text-center py-5">
            <div className="container">
                <img
                    src="./images/elt.JPG"
                    alt="Profile"
                    className="img-fluid rounded-circle mb-4"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h1 className="display-4">Welcome to My Personal Website</h1>
                <p className="lead">I'm Elton Simiyu, a passionate Computer Scientist and Developer ready to learn as well as serve.</p>
            </div>
        </div>
    );
};

export default Hero;
