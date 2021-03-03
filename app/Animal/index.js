const SetValue = require("../../services/SetValue");
const Entity = require("../Entity");

class Animal extends Entity {
	constructor(position, construct) {
		super(position, construct);

		this.age = SetValue(0, { min: 0, max: 100, incrCount: 0.1 });
        this.gender = SetValue()
	}
}

module.exports = Animal;
