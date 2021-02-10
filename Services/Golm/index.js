/**
 * Game of life matrix
 */
class Golm extends Array {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;

		for (let i = 0; i < height; i++) {
			this[i] = [];

			for (let j = 0; j < width; j++) {
				this[i][j] = [0, 0];
			}
		}
	}
}

module.exports = Golm;
