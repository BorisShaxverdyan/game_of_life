const Position = require("../Position");

class Directions {
	/**
	 * Target matrix
	 */
	static matrix;

	/**
	 * Get all coordinates in perimeter
	 *
	 * @param {Position} position position
	 * @param {number} radius radius
	 */
	static get(position, radius) {
		let matrix = this.matrix;

		let result = [];

		let XRMinus = position.x - radius < 0 ? 0 : position.x - radius;
		let XRPlus = position.x + radius > matrix[0].length - 1 ? matrix[0].length - 1 : position.x + radius;
		let YRMinus = position.y - radius < 0 ? 0 : position.y - radius;
		let YRPlus = position.y + radius > matrix.length - 1 ? matrix.length - 1 : position.y + radius;

		for (let i = YRMinus; i <= YRPlus; i++) {
			for (let j = XRMinus; j <= XRPlus; j++) {
				if (i === position.y && j === position.x) continue;

				result.push(new Position(j, i));
			}
		}

		return result;
	}

	/**
	 * Get small directions list
	 *
	 * Radius = 1
	 *
	 * @param {Position} position position
	 */
	static small(position) {
		return this.get(position, 1);
	}

	/**
	 * Get medium directions list
	 *
	 * Radius = 2
	 *
	 * @param {Position} position position
	 */
	static medium(position) {
		return this.get(position, 2);
	}

	/**
	 * Get large directions list
	 *
	 * Radius = 3
	 *
	 * @param {Position} position position
	 */
	static large(position) {
		return this.get(position, 3);
	}

	/**
	 * Get x-large directions list
	 *
	 * Radius = 4
	 *
	 * @param {Position} position position
	 */
	static xLarge(position) {
		return this.get(position, 4);
	}

	/**
	 * Get huge directions list
	 *
	 * Radius = 5
	 *
	 * @param {Position} position position
	 */
	static huge(position) {
		return this.get(position, 5);
	}

	/**
	 * Get all directions
	 *
	 * Radius = matrix.length
	 *
	 * @param {Position} position position
	 */
	static world(position) {
		return this.get(position, this.matrix.length);
	}
}

module.exports = Directions;
