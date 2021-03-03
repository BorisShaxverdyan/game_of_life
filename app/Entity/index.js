class Entity {
	static matrix;

	constructor(position, { id, type, name }) {
		this.position = position;
		this.id = id;
		this.type = type;
		this.name = name;
		this.matrix = Entity.matrix;
	}

	chooseCell(id, type) {
		let found = [];

		this.directions.map(position =>
			matrix[position.y][position.x][type] === id ? found.push(position) : null
		);

		return found;
	}
}

module.exports = Entity;
