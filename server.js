const helper = require("./helper");
const config = helper.config;
const { Collections } = require("./services/Collection");

// #region SERVER
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", ({ res }) => res.redirect("public/index.html"));

server.listen(config("app.port"));
// #endregion

io.on("connection", function (socket) {
	var collections = {};

	const entitiesMatrix = config("entities.listMatrix");
	const bgColor = config("game.background");
	const side = config("game.side");

	const ground = config("entities.ground");
	const animal = config("entities.animal");

	const width = config("game.width");
	const height = config("game.height");

	const matrix = new (require("./Services/Golm"))(width, height, entitiesMatrix);

	// #region CREATE_OBJECTS
	matrix.mapMatrix((groundId, animalId, x, y) => {
		entitiesMatrix.map(entity => {
			if (entity.object) {
				if (
					(entity.type === ground && entity.id === groundId) ||
					(entity.type === animal && entity.id === animalId)
				) {
					Collections.addOrCreateCollection(collections, entity.object, x, y);
				}
			}
		});
	});

	collections = new Collections(collections);
	// #endregion

	const entitiesView = config("entities.listView");
	const main = () => {
		let sendData = {
			matrix,
			entities: entitiesView,

			bgColor,
			side,

			ground,
			animal,
		};

		socket.emit("data", sendData);
	};

	setInterval(main, 1000);
});
