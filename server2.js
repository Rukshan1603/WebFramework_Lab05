const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Set up multer for handling multipart/form-data
const upload = multer({ dest: 'uploads/' });

// Serve static files from the "views" folder
app.use(express.static('views'));

// Handle POST request to /register-user
app.post('/register-user', upload.single('avatar'), (req, res) => {
    // Process form data
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const avatar = req.file ? req.file.path : null; // Path to the uploaded avatar

    // Log the form data to the console
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Avatar Path:", avatar);

    // Send a response back to the client
    res.send("Form data received. Check the console for details.");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
