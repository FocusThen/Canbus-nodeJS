// Serial port
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

// server side
const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);

// connection
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));
app.use("/scripts", express.static(__dirname + "/node_modules/canvas-gauges/"));

// port
const port = new SerialPort("COM4", { baudRate: 38400 });
const parser = new Readline();
port.pipe(parser);
parser.on("data", (data) => {
  io.emit("carInfo", data);
});

// express server
app.get("/", (req, res) => {
  res.render(path.join(__dirname + "/index.html"));
});
server.listen(3000, () => console.log("Server is running 3000"));
