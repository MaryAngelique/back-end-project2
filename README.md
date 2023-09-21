# Basic Node and Express

## Meet the Node console
When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the Solution Link field.

During the development process, it is important to be able to check what’s going on in your code.

Node is just a JavaScript environment. Like client side JavaScript, you can use the console to display useful debug information. On your local machine, you would see console output in a terminal. On Replit, a terminal is open in the right pane by default.

We recommend to keep the terminal open while working at these challenges. By reading the output in the terminal, you can see any errors that may occur.

Modify the myApp.js file to log "Hello World" to the console.

***

## Start a Working Express Server
In the first two lines of the file myApp.js, you can see how easy it is to create an Express app object. This object has several methods, and you will learn many of them in these challenges. One fundamental method is app.listen(port). It tells your server to listen on a given port, putting it in running state. For testing reasons, we need the app to be running in the background so we added this method in the server.js file for you.

Let’s serve our first string! In Express, routes takes the following structure: app.METHOD(PATH, HANDLER). METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object. For example, the handler

function(req, res) {
  res.send('Response String');
}
will serve the string 'Response String'.
