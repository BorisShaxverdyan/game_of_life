const config = require("./../helper").config;

const GROUND = 0;
const ANIMAL = 1;

const configs = {
	/**
	 * List of all entities
	 */
	list: [
		{
			id: 0,
			name: "ground",
			type: GROUND,
			color: config("game.background"),
			stroke: 0,
		},
	],

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
