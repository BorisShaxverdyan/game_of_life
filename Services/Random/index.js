class Random {
	static number(min = 0, max = 1) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static arrayItem(array) {
        return array[Random.number(0, array.length - 1)];
    }
}

module.exports = Random;
