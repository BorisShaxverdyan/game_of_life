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
	}

	generate(entities) {
		
	}

	setRandom(type, value) {
		this[Random.number(0, this.height - 1)][
			Random.number(0, this.width - 1)
		][type] = value;

		return this;
	}
}

module.exports = Golm;
