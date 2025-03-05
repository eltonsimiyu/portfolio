const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const fastCsv = require('fast-csv');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require('dotenv');
require('dotenv').config(); 

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet()); // Secure HTTP headers
app.use(compression()); // Enable GZIP compression
app.use(bodyParser.json());


// MySQL Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'yamanote.proxy.rlwy.net',  // ✅ Use Railway Public Proxy Host
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'DjolJjRmvQaDBDJkvrYoVwaOjxoJjvRH',
    database: process.env.DB_NAME || 'railway',
    port: process.env.DB_PORT || 27579, // ✅ Use Railway's provided port (not 3306)
    multipleStatements: true
});

// ✅ Connect to the Database
db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        return;
    }
    console.log('✅ Connected to the Railway MySQL database.');
});

// 1. About, Education, and Experience Data
app.get('/api/about', (req, res) => {
    const aboutQuery = 'SELECT * FROM about_me LIMIT 1';
    const educationQuery = 'SELECT * FROM education';
    const experienceQuery = 'SELECT * FROM experience';

    db.query(`${aboutQuery}; ${educationQuery}; ${experienceQuery}`, (err, results) => {
        if (err) return res.status(500).send({ error: err.message });

        res.json({
            about: results[0][0] || {}, // First query result (about_me)
            education: results[1] || [], // Second query result (education)
            experience: results[2] || [] // Third query result (experience)
        });
    });
});

// 2. Skills Data
app.get('/api/skills', (req, res) => {
    const technicalSkillsQuery = 'SELECT * FROM technical_skills';
    const softSkillsQuery = 'SELECT * FROM soft_skills';

    db.query(`${technicalSkillsQuery}; ${softSkillsQuery}`, (err, results) => {
        if (err) return res.status(500).send(err);

        res.json({
            technicalSkills: results[0] || [], // First query result
            softSkills: results[1] || [] // Second query result
        });
    });
});

// 3. Save Contact Messages
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Failed to save message.');
        }
        res.status(200).send('Message saved successfully.');
    });
});

// 4. Download Skills as CSV
app.get('/api/download-skills', (req, res) => {
    const query = `
        SELECT skill_name, proficiency FROM technical_skills
        UNION ALL
        SELECT skill_name, proficiency FROM soft_skills
    `;

    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);

        res.setHeader('Content-Disposition', 'attachment; filename=skills.csv');
        res.setHeader('Content-Type', 'text/csv');

        fastCsv.write(results, { headers: true }).pipe(res);
    });
});

// 5. Send Contact Form via Email
app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASSWORD // Your email password
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL, // Your receiving email address
        subject: `New Contact Form Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Failed to send email.');
        }
        res.status(200).send('Email sent successfully.');
    });
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Internal Server Error' });
});

const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});