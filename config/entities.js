const config = require("./../helper").config;

const Grass = require("./../app/Grass");

const GROUND = 0;
const ANIMAL = 1;

/**
 * List of all entities
 */
const list = [
	{
		id: 0,
		name: "ground",
		object: null,
		type: GROUND,
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
		count: 5,
	},
];

const configs = {
	listMatrix: list.map(entity => {
		if(entity.object) {
			return {
				id: entity.id,
				type: entity.type,
				count: entity.count,
				object: entity.object,
			}
		}
	}).filter(entity => !!entity),

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

for (let config in configs) {
	module.exports[config] = configs[config];
}
