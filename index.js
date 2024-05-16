const http = require('http');
const express = require('express');
const {Server} = require('socket.io');


const app = express();

const path = require('path');
const server= http.createServer(app);

const io = new Server(server);
//handle socket.io requests

io.on("connection", (socket)=>{
    socket.on("message", (message)=>{
       io.emit("message", message);
    })
})




//handles https requests

app.use(express.static(path.resolve("./public")));
app.get('/', (req, res) => {
    return res.sendFile("./public/index.html");
});



server.listen(3000, () => {console.log("server is running on port 3000")});