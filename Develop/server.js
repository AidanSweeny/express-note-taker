var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readFile(__dirname + "/db/db.json", function(err, data) {
        if (err) throw err;
        console.log(data)
        return(res.json(data));
        })
});

app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    fs.write(_dirname + "/db/db.json", newNote, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
})

app.listen(PORT, function() {
    console.log("Working!");
})