var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));
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
        return(res.json(JSON.parse(data)));
    })
    
});

app.post("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", function(err, data) {
        if (err) throw err;
        var db = JSON.parse(data);
        var array = [];
        db.push(req.body);

        for (var i=0; i<db.length; i++)
        {
            var newNote = {
                title: db[i].title,
                text: db[i].text,
                id: (i + 1)
            };
            array.push(newNote);
        }

        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(array, null, 2), function(err) {
            if (err) throw err;
            res.json(req.body);
        });
    });
});
app.delete("/api/notes/:id", function(req, res) {
    const id = parseInt(req.params.id);
    fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
        if (err) throw err;
        var db = JSON.parse(data);
        var array = [];

        for(var i=0; i<db.length; i++)
        {
            if (i+1 !== id)
            {
                const newNote = {
                    title: db[i].title,
                    text: db[i].text,
                    id: array.length + 1
                };

                array.push(newNote);
            }
        }

        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(array, null, 2), function(err) {
            if (err) throw err;
            res.json(req.body);
        });
    });
});
app.listen(PORT, function() {
    console.log("Local Server Running!");
})