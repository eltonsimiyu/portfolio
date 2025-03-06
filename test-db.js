const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "yamanote.proxy.rlwy.net", // Proxy URL
    port: 27579,
    user: "root", // Replace with actual DB username
    password: "YourNewSecurePassword", // Replace with actual DB password
    database: "railway", // Replace with actual DB name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Database connected successfully!");
    connection.release();
  }
  pool.end(); // Close the connection
});
