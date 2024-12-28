const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module to handle static files
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // Ensure the correct path
const app = express();

// Setup environment variables
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Serve static files from the frontend folder (if located in the same root folder)
app.use(express.static(path.join(__dirname, 'frontend')));

// Routes
app.use('/api/auth', authRoutes);

// Serve the index.html file on a GET request to the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
