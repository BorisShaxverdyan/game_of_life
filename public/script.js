var socket = io();

function setup() {
	var matrix = [];

	const program = data => {
		matrix = data.matrix;
		let entities = data.entities;
		let bgColor = data.bgColor;
		let side = data.side;
		let ANIMAL = data.animal;
		let GROUND = data.ground;

		createCanvas(matrix[0].length * side, matrix.length * side);
		background(bgColor);

		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				entities.map(entity => {
					if (matrix[i][j][entity.type] === entity.id) {
						strokeWeight(entity.stroke);
						fill(entity.color);

						if (entity.type === ANIMAL) {
						} else if (entity.type === GROUND) {
							rect(j * side, i * side, side, side);
						}
					}
				});
			}
		}
	};

	socket.on("data", program);
}