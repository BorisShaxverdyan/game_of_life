const { config } = require("../../helper");
const Random = require("../Random");

class Gender {
	static list = config("gender.list");

	static random() {
        return this.list[Random.number(0, this.list.length - 1)];
    }
}

module.exports = Gender;
