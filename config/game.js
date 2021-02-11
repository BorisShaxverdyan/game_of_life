const configs = {
	status: true,
	width: 10,
	height: 10,
	background: "#acacac",
	side: 30,
};

for (let config in configs) {
    module.exports[config] = configs[config];
}
