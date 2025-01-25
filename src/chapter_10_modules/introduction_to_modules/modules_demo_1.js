const car = (function () {
	let isStarted = false;

	function start() {
		if (isStarted) {
			console.info("The car is started!");
		} else {
			isStarted = true;
			console.info("The car is started!");
		}
	}

	function stop() {
		if (isStarted) {
			isStarted = false;
			console.info("The car is stopped!");
		} else {
			console.info("The car is stopped!");
		}
	}

	function getStatus() {
		return isStarted ? "Started" : "Stopped";
	}

	return class Car {
		constructor(engineCapacity, mark) {
			this.engineCapacity = engineCapacity;
			this.mark = mark;
		}

		startCar() {
			start();
		}

		stoptCar() {
			stop();
		}

		getCarStatus() {
			getStatus();
		}

		getInfo() {
			console.info(`Car {` +
				`\n\tmark = '${this.mark}'` +
				`\n\tengine capacity = ${this.engineCapacity}` +
				`\n}`);
		}
	}
});


const car__constructor = car();
const car__instance = new car__constructor(5.0, "BMW");

car__instance.startCar();
car__instance.getInfo();
