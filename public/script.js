var socket = io();

function setup() {
	// noStroke();

	const side = config("side");

	var matrix = [];

	const main = data => {
		matrix = data.matrix;
		let entities = data.entities;

		createCanvas(matrix[0].length * side, matrix.length * side);

		background("#acacac");

		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				// if (matrix[i][j] == 1) {
				// 	image(img, j * side, i * side, side, side);
				// 	continue;
				// } else if (matrix[i][j] == 2) {
				// 	image(img2, j * side, i * side, side, side);
				// 	continue;
				// } else if (matrix[i][j] == 0) fill("green");
				// else if (matrix[i][j] == 3) fill("red");
				// else if (matrix[i][j] == 4) fill("blue");
				// else if (matrix[i][j] == 5) fill("yellow");

                if(matrix[i][j][0] === 0) fill(entities.ground.color);

				rect(j * side, i * side, side, side);
			}
		}
	};

	socket.on("data", main);
}
