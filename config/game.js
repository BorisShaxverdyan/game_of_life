const configs = {
	/**
	 * Determines if the game is running
	 */
	status: true,

	/**
	 * Determines the count of horisontal matrix cells
	 */
	width: 10,

	/**
	 * Determines the count of vertical matrix cells
	 */
	height: 10,

	/**
	 * Determines the background color of canvas
	 */
	background: "#acacac",

	/**
	 * Determines the side of matrix cells in canvas (px)
	 */
	side: 30,
};

for (let config in configs) {
    module.exports[config] = configs[config];
}
