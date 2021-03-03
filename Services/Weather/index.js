const { config } = require("../../helper");

class Weather {
	constructor(current = config("weather.list")[0]) {
		this.list = config("weather.list");
		this.current = this.list.indexOf(current);
		this.index = this.getIndex();
	}

	getIndex() {
		return this.list.indexOf(this.current);
	}

	next() {
        this.current = this.list[++this.index > this.list.length - 1 ? this.index = 0 : this.index];

        return this;
    }
}

module.exports = Weather;
