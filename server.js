// import dependencies
const express = require("express");
const cors = require("cors");

// import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// create our app object
const app = express();


/////////////////////////////////
// Middleware
/////////////////////////////////
// set up middleware
app.use(cors());

/////////////////////////////////
// Routes
/////////////////////////////////
// home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  res.json(about);
});





const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
