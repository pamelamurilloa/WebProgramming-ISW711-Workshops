const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Respond with a JSON object with the text "Hello World" when accessing the /hello endpoint via a GET request
app.get('/hello', (req, res) => {
    let message = "World";
    if (req.query.message) {
        message = req.query.message;
    }
    res.json({ response: `Hello ${message}` });
});

// Respond to a POST request to the /user endpoint
app.post('/user', (req, res) => {
    const { name, lastname } = req.body;
    res.json({ response: `El usuario ${name} ${lastname} fue creado` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});