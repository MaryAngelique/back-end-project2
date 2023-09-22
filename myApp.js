let express = require("express");
let app = express();

console.log("Hello World");

app.get("/", function(request, response) {
    response.send("Hello Express");
});

app.listen(3001, function() {
    console.log("Listening on port 3000");
});

app.get("/", function(request, response) {
    response.sendFile("/views/index.html"  , { root : __dirname})
});

app.use(express.static(__dirname + "/public/"))
app.get("/", function(request, response) {
    response.sendFile("/views/index.html"  , { root : __dirname})
});

module.exports = app;