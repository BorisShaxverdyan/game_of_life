const { config, empty } = require("../../helper");
const { Collections } = require("../../services/Collection");
const Directions = require("../../services/Directions");
const Golm = require("../../services/Golm");
const SetValue = require("../../services/SetValue");

class Grass {
	static id;
	static type;

	constructor(position) {
		this.position = position;
		this.directions = Directions.small(position);
		this.energy = new SetValue(0, { min: 0, max: 100 });
		this.id = this.constructor.id;
		this.type = this.constructor.type;
		this.name = this.constructor.name;
	}

	do() {
		if (this.energy.value === 100) return this.mul();

		this.energy.incr(15);
	}

	mul() {
		let newPosition = this.chooseCell(
			config("entities.emptyGroundID"),
			config("entities.ground")
		).random();

		if (!empty(newPosition)) {
			let obj = Collections.instance[this.name].add(newPosition);
			Golm.instance.setByObject(obj);
			this.energy.value = 0;
		}
	}

	chooseCell(id, type) {
		let found = [];

		this.directions.map(position =>
			Golm.instance[position.y][position.x][type] === id ? found.push(position) : null
		);

		return found;
	}
}

module.exports = Grass;
