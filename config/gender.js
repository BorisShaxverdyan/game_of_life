let configs = {
	list: { male: "male", female: "female" },
};

for (let config in configs) module.exports[config] = configs[config];
