const http =  require("http");

const host = "localhost";
const port = 8080;

const requestListener = Function (req, res) {
	res.writeHed(200);
	res.end("My Firs Server!");

};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("Server is running on http://${host}:${port}");
});


