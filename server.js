var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Article = require("./models/Article.js");

var app = express();

var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(error) 
{
    console.log("Mongoose Error: ", error);
});

db.once("open", function() 
{
    console.log("Mongoose connection successful.");
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

app.get("/", function(req, res) 
{
	console.log("hello");
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/saved", function(req,res)
{
	console.log("hello");
});

app.post("/api/saved", function(req,res)
{
	console.log("new");
});

app.delete("/api/saved", function(req,res)
{
	console.log("bye");
});


app.listen(PORT, function() 
{
	console.log("App listening on PORT " + PORT);
});