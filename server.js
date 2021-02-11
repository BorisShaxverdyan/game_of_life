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
const matrix = new (require("./Services/Golm"))(
	config("game.width"),
	config("game.height")
);
const entities = config("entities.list");
const bgColor = config("game.background");
const side = config("game.side");

const ground = config("entities.ground");
const animal = config("entities.animal");

const main = () => {
	if (!config("game.status")) {
		return;
	}

	let sendData = {
		matrix,
		entities,

		bgColor,
		side,

		ground,
		animal,
	};

	io.sockets.emit("data", sendData);
};

setInterval(main, 1000);
// #endregion
