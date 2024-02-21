const express = require('express');
const api = express();
api.use(express.json());

// Had to confirm the port
const PORT = process.env.PORT || 3000;

// Get message by accesing /hello by GET method
api.get('/hello', (req, res) => {

    try{
            let message = 'World';

        //Check if a new message exists for a change
        if (req.query.message) {
            message = req.query.message;
        }

        res.json({ response: `Hello ${message}` });
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
});

// Get user's name and lastname by POST method
api.post('/user', (req, res) => {

    try{
        const { name, lastname } = req.body;
        res.json({ response: `El usuario ${name} ${lastname} fue creado` });
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

});

// Start the server
api.listen(PORT,  () => {
    console.log(`Server succesfully running on port ${PORT}`);
});