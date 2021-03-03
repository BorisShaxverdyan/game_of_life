const Collections = require("../../facade/Collection");
const { config, empty } = require("../../helper");
const Directions = require("../../services/Directions");
const SetValue = require("../../services/SetValue");
const Animal = require("../Animal");

class Sheep extends Animal {
	constructor(position) {
		super(position, this.constructor);
		this.directions = Directions.small(position);
		this.energy = new SetValue(60, { min: 0, max: 100 });
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
			let obj = Collections.add(this.name, newPosition);
			this.matrix.setByObject(obj);
			this.energy.value = 0;
		}
	}
}

module.exports = Sheep;
