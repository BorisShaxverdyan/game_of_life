const helper = require("./helper");
const config = helper.config;

// #region SERVER
var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", ({ res }) => res.redirect("public/index.html"));

server.listen(config("app.port"));
// #endregion

// #region MAIN
const matrix = new (require("./Services/Golm"))(config("game.width"), config("game.height"))

const main = () => {
	let sendData = {
        matrix
    };

	io.sockets.emit("data", sendData);
};

setInterval(main, 1000);
// #endregion