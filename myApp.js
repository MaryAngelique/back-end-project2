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

app.get("/json", (request, response) => {
    let message = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") {
        return response.json({"message": message.toUpperCase()})
    }
    return response.status(200).json({"message": message})
})

app.get("/json", (request, response) => {
    if (process.env["MESSAGE_STYLE"] == "uppercase") {
        response.json({ "message": "HELLO JSON" });
    } else {
        response.json({"message": "Hello json"});
    }
});

app.use((request, response, next) => {
    console.group(`${request.method} ${request.path} ${request.ip}`);
    next();
})

app.get("/now", function(request, response, next){ 
    next();
    }, function(request, response){
        var time = new Date()
        console.log("time"+time);
        response.json({"time": time});
});

module.exports = app;