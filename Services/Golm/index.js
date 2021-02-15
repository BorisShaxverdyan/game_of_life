const Random = require("./../Random");

/**
 * Game of life matrix
 */
class Golm extends Array {
	constructor(width, height, entities) {
		super();
		this.width = width;
		this.height = height;
		this.entities = entities;

		for (let i = 0; i < height; i++) {
			this[i] = [];

			for (let j = 0; j < width; j++) {
				this[i][j] = [0, 0];
			}
		}

		if(entities) {
			this.generate(entities);
		}
	}

	generate(entities) {
		entities.map(entity => {
			let count = entity.count;
			while (count) {
				if (this.setRandom(entity.type, entity.id)) {
					count--;
				}
			}
		});

		return this;
	}

	setRandom(type, value) {
		if (
			this[Random.number(0, this.height - 1)][
				Random.number(0, this.width - 1)
			][type] === 0
		) {
			this[Random.number(0, this.height - 1)][
				Random.number(0, this.width - 1)
			][type] = value;

			return true;
		}

		return false;
	}

	mapMatrix(callback) {
		return this.map((arr, y) => arr.map((item, x) => callback(item[0], item[1], x, y)));
    }
}

module.exports = Golm;
