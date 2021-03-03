const { config, empty } = require("./helper");

const Golm = require("./services/Golm");

const entitiesMatrix = config("entities.listMatrix");

const matrix = Golm.instance.generate(entitiesMatrix);

const Entity = require("./app/Entity");
Entity.matrix = matrix;

const { Collections } = require("./services/Collection");

const Directions = require("./services/Directions");
Directions.matrix = matrix;

const Position = require("./services/Position");

// #region SERVER
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", ({ res }) => res.redirect("public/index.html"));

server.listen(config("app.port"), () => console.log("Server running"));
// #endregion

const bgColor = config("game.background");
const side = config("game.side");

const ground = config("entities.ground");
const animal = config("entities.animal");

// #region CREATE_OBJECTS
matrix.mapMatrix((groundId, animalId, x, y) => {
	entitiesMatrix.map(entity => {
		if (entity.object) {
			if (
				(entity.type === ground && entity.id === groundId) ||
				(entity.type === animal && entity.id === animalId)
			) {
				Collections.addOrCreateCollection(entity.object, new Position(x, y));
			}
		}
	});
});
// #endregion

const entitiesView = config("entities.listView");

io.on("connection", function (socket) {
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
		Collections.run();
	};

	setInterval(main, 500);
});
