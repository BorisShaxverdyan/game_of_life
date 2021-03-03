const Random = require("./../Random");
const Position = require("../Position");
const { config, empty } = require("./../../helper");

const width = config("game.width");
const height = config("game.height");

/**
 * Game of life matrix
 */
class Golm extends Array {
	static instance = new this(width, height);

	constructor(width, height, entities) {
		super();
		this.width = width;
		this.height = height;

		if (entities) {
			this.generate(entities);
		}
	}

	generate(entities) {
		for (let i = 0; i < height; i++) {
			this[i] = [];

			for (let j = 0; j < width; j++)
				this[i][j] = [
					config("entities.emptyGroundID"),
					config("entities.emptyAnimalID"),
				];
		}

		entities.map(entity => {
			let count = entity.count;
			while (count) {
				let randomPosition = this.setRandom(entity.type, entity.id);
				if (!empty(randomPosition)) {
					count--;
				}
			}
		});

		return this;
	}

	setRandom(type, value) {
		let height = Random.number(0, this.height - 1);
		let width = Random.number(0, this.width - 1);

		if (
			this[height][width][type] ===
			config("entities.empty" + (type === 0 ? "Ground" : "Animal") + "ID")
		) {
			this[height][width][type] = value;

			return new Position(height, width);
		}

		return false;
	}

	setByPosition(position, type, id) {
		this[position.y][position.x][type] = id;
	}

	setByObject(obj) {
		this[obj.position.y][obj.position.x][obj.type] = obj.id;
	}

	countOfEntity(type, id) {
		let result = 0;
		this.map(arr => arr.map(item => (item[type] === id ? result++ : null)));

		return result;
	}

	mapMatrix(callback) {
		return this.map((arr, y) => arr.map((item, x) => callback(item[0], item[1], x, y)));
	}
}

module.exports = Golm;
