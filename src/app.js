const helpers = require('./utils/helpers');

function startApp() {
	console.log("Основная логика приложения.");
	helpers.sayHello();
}

module.exports = startApp;
