const express = require('express');
const app = express();

// Had to confirm the port
const PORT = process.env.PORT || 3000;

// database connection
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://127.0.0.1:27017/careers", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


const {
  coursePut,
  coursePost,
  courseGet,
  courseDelete
} = require("./controllers/careerController.js");

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// check for cors
const cors = require("cors");
app.use(cors({
  domains: '*',
  methods: "*"
}));


// course
app.get("/api/courses", courseGet);
app.post("/api/courses", coursePost);
app.get("/api/courses", coursePut);
app.post("/api/courses", courseDelete);

// Start the server
app.listen(PORT,  () => {
    console.log(`Server succesfully running on port ${PORT}`);
});