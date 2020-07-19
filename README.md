# express-note-taker
For this project I created the back-end deployment of a note taking application. For this to operate correctly I had to create different server side get and post express calls. This was so that I could add items to the db.json file, and retrieve information from it as well. I did this all through a server.js file where I did all the api and html server redirects. I used express.js to do the gets and posts, and the fs library for all of the reading and writing of files. So that I could add all the items to the db.json file, I had to loop through the object and recreate the list of notes. I also had to asign an id to each of them that was above 0, so that the prewritten code would still function. Here is the get call that retrieved the notes data from the db.json file:

```
app.get("/api/notes", function(req, res) {
    fs.readFile(__dirname + "/db/db.json", function(err, data) {
        if (err) throw err;
        return(res.json(JSON.parse(data)));
    })
});
```
Below is a video of the working application:

![](note-taker.gif)

## Getting Started

To get this project running, one must copy the files from the class repository, and run an `npm install` on the correct directory. One could also just view it using the deployed link.

### Prerequisites

To have this project run, one must download VS Code off the appstore, and create a GitHub account. Git is also required to run this program, which can be downloaded 

```
$ brew install git. 
```
Homebrew can also be downloaded by inputting the following command in the terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Installing

To install this project one must go through the GitHub website in order to clone this project. Clicking on the cone or download button and then copying the link that comes from that. One can then go into the Terminal application, and use the following command to copy the files:
`
git clone URL
`
This should then be moved to your desktop, or somewhere else on your computer. This will allow access to the html and css files. Opening the html file in a default browser will allow one to observe the website.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Heroku](https://devcenter.heroku.com/categories/reference)
* [Express](https://expressjs.com/en/api.html)

## Deployed Link

* [See Live Site](https://mysterious-sands-92673.herokuapp.com/)

## Authors

* Aidan Sweeny

- [Link to Github](https://github.com/AidanSweeny)
- [Link to LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Berkley Coding Bootcamp



