/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_auth",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  res.send("Test");
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Signup Endpoint
app.post("/signup", (req, res) => {
  const { fullName, email, password, role } = req.body;

  // Check if email already exists
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Validate full name
    if (!/^[a-zA-Z-]+$/.test(fullName)) {
      return res.status(400).json({ error: "Invalid full name format" });
    }

    // Password requirements
    const passwordErrors = [];
    if (password.length < 8) {
      passwordErrors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push(
        "Password must contain at least one uppercase letter."
      );
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push(
        "Password must contain at least one lowercase letter."
      );
    }
    if (!/\d/.test(password)) {
      passwordErrors.push("Password must contain at least one digit.");
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      passwordErrors.push(
        "Password must contain at least one special character."
      );
    }

    if (passwordErrors.length > 0) {
      return res.status(400).json({ error: passwordErrors.join("\n") });
    }

    // If email doesn't exist and password meets requirements, hash the password and insert the user
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }

      db.query(
        "INSERT INTO users (fullname, email, password, role) VALUES (?, ?, ?, ?)",
        [fullName, email, hash, role],
        // eslint-disable-next-line no-unused-vars
        (err, results) => {
          if (err) {
            return res.status(500).json({ error: "Internal server error" });
          }
          return res.status(201).json({ message: "User created successfully" });
        }
      );
    });
  });
});

// Login Endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", email, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      if (!isMatch) {
        return res.status(401).json({ error: "Incorrect password" });
      }
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        "your_jwt_secret",
        { expiresIn: "1h" }
      );
      return res.status(200).json({ token, role: user.role });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
