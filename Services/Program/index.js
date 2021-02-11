class Program {
	static status;

	static start(status) {
		Program.status = status;
	}

	static stop() {
		Program.status = false;

		return this;
	}

	static run() {
		Program.status = true;

		return this;
	}
}

module.exports = Program;