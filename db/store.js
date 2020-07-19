var fs = require("fs");
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    fs.write(__dirname + "/db/db.json", newNote, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
})