import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d6efd, #6610f2)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '700px' }}>
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
        <h1 className="fw-bold">Elton Simiyu</h1>
        <p className="lead">
          Full-stack developer | Problem solver | Tech enthusiast.
        </p>
        <Link to="/about" className="btn btn-light mt-3">
          Get to Know Me →
        </Link>
      </div>
    </div>
  );
};

export default Home;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const [responseMessage, setResponseMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";
      
//         axios.post(`${API_URL}/api/send-email`, formData)
//           .then(() => {
//             setResponseMessage('Message sent successfully!');
//             setFormData({ name: '', email: '', message: '' });
//           })
//           .catch(() => {
//             setResponseMessage('Failed to send message.');
//           });
//       };
      

//     return (
//         <div className="container mt-5">
//             <h2>Contact Me</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         className="form-control"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Message</label>
//                     <textarea
//                         name="message"
//                         className="form-control"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                     ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Send</button>
//             </form>
//             {responseMessage && <p className="mt-3">{responseMessage}</p>}
//         </div>
//     );
// };

// export default Contact;
