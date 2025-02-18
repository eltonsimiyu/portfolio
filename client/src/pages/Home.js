import React from 'react';

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