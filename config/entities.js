const config = require("../../helper").config;

const Grass = require("../../app/Grass");
const Sheep = require("../../app/Sheep");

const GROUND = 0;
const ANIMAL = 1;

/**
 * List of all entities
 */
const list = [
	{
		id: 0,
		name: "emptyGround",
		object: null,
		type: GROUND,
		color: config("game.background"),
		stroke: 0,
		count: 0,
	},
	{
		id: 0,
		name: "emptyAnimal",
		object: null,
		type: ANIMAL,
		color: config("game.background"),
		stroke: 0,
		count: 0,
	},
	{
		id: 1,
		name: "grass",
		object: Grass,
		type: GROUND,
		color: "green",
		stroke: 0,
		count: 2,
	},
	{
		id: 1,
		name: "sheep",
		object: Sheep,
		type: ANIMAL,
		color: "white",
		stroke: 1,
		count: 5,
	},
];

const configs = {
	listMatrix: list
		.map(entity => {
			if (entity.object) {
				entity.object.id = entity.id;
				entity.object.type = entity.type;

				return {
					id: entity.id,
					type: entity.type,
					count: entity.count,
					object: entity.object,
				};
			}
		})
		.filter(entity => !!entity),

	listView: list.map(entity => ({
		id: entity.id,
		type: entity.type,
		color: entity.color,
		stroke: entity.stroke,
	})),

	/**
	 * Ground id in  matrix
	 */
	ground: GROUND,

	/**
	 * Animal id in matrix
	 */
	animal: ANIMAL,
};

for (let i = 0; i < list.length; i++) {
	configs[list[i].name + "ID"] = list[i].id;
}

for (let one in configs) module.exports[one] = configs[one];
