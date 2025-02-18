import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
            <p>
                © {new Date().getFullYear()} Elton Simiyu |{' '}
                <a
                    href="https://linkedin.com/in/elton-simiyu-kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                >
                    LinkedIn
                </a>{' '}
                |{' '}
                <a
                    href="https://github.com/eltonsimiyu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                >
                    GitHub
                </a>
            </p>
        </footer>
    );
};

export default Footer;
