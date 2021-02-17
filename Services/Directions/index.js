class Directions {
	/**
	 * Target matrix
	 */
	static matrix;

	/**
	 * Get all coordinates in perimeter
	 *
	 * @param {number} x coordinate x
	 * @param {number} y coordinate y
	 * @param {number} radius radius
	 */
	static get(x, y, radius) {
		let matrix = this.matrix;

		let result = [];

		let XRMinus = x - radius < 0 ? 0 : x - radius;
		let XRPlus = x + radius > matrix[0].length - 1 ? matrix[0].length - 1 : x + radius;
		let YRMinus = y - radius < 0 ? 0 : y - radius;
		let YRPlus = y + radius > matrix.length - 1 ? matrix.length - 1 : y + radius;

		for (let i = YRMinus; i <= YRPlus; i++) {
			for (let j = XRMinus; j <= XRPlus; j++) {
				if (i === y && j === x) continue;

				result.push([j, i]);
			}
		}

		return result;
	}

	/**
	 * Get small directions list
	 *
	 * Radius = 1
	 *
	 * @param {number} x coordinate x
	 * @param {number} y coordinate y
	 */
	static small(x, y) {
		return this.get(x, y, 1);
	}

	/**
	 * Get medium directions list
	 *
	 * Radius = 2
	 *
	 * @param {number} x coordinate x
	 * @param {number} y coordinate y
	 */
	static medium(x, y) {
		return this.get(x, y, 2);
	}

	/**
	 * Get large directions list
	 *
	 * Radius = 3
	 *
	 * @param {number} x coordinate x
	 * @param {number} y coordinate y
	 */
	static large(x, y) {
		return this.get(x, y, 3);
	}

	/**
	 * Get x-large directions list
	 *
	 * Radius = 4
	 *
	 * @param {number} x coordinate x
	 * @param {number} y coordinate y
	 */
	static xLarge(x, y) {
		return this.get(x, y, 4);
	}

	/**
	 * Get huge directions list
	 *
	 * Radius = 5
	 *
	 * @param {number} x coordinate x
	 * @param {number} y coordinate y
	 */
	static huge(x, y) {
		return this.get(x, y, 5);
	}

	/**
	 * Get all directions
	 *
	 * Radius = matrix.length
	 *
	 * @param {number} x coordinate x
	 * @param {number} y coordinate y
	 */
	static world(x, y) {
		return this.get(x, y, this.matrix.length);
	}
}

module.exports = Directions;
