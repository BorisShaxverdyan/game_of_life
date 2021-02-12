class Random {
	/**
	 * Get random number from range
	 *
	 * @param {Number} min Minimum number that can be returned
	 * @param {Number} max Maximum number that can be returned
	 *
	 * @returns Random number from range
	 */
	static number(min = 0, max = 1) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/**
	 * Get random element from array
	 *
	 * @param {Array} array The array itself
	 *
	 * @returns Random element from array
	 */
	static arrayItem(array) {
		return array[Random.number(0, array.length - 1)];
	}

	/**
	 * Get random element from matrix
	 *
	 * @param {[[]]} matrix The matrix itself
	 *
	 * @returns Random element from matrix
	 */
	static matrixItem(matrix) {
		return matrix[Random.number(0, matrix.length - 1)][Random.number(0, matrix[0].length - 1)];
	}
}

module.exports = Random;
