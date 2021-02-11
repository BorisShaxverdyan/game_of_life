const config = require("./../helper").config;

const GROUND = 0;
const ANIMAL = 1;

const configs = {
    list: [
        {
            id: 0,
            name: "ground",
            type: GROUND,
            color: config("game.background"),
            stroke: 0,
        },
    ],
	ground: GROUND,
	animal: ANIMAL,
};

for (let config in configs) {
    module.exports[config] = configs[config];
}