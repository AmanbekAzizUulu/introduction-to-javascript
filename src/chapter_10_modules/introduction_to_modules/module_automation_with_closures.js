const modules = {};

function require(moduleName) {
	return modules[moduleName];
}

modules[`math.js`] = (function () {
	const exports = {};

	const add = (num_1, num_2) => num_1 + num_2;
	const subtract = (num_1, num_2) => num_1 - num_2;

	exports.add = add;
	exports.subtract = subtract;

	return exports;
})();

modules[`arrayUtils.js`] = (function () {
	const exports = {};

	const findMax = (array) => Math.max(...array);
	const findMin = (array) => Math.min(...array);

	exports.findMax = findMax;
	exports.findMin = findMin;

	return exports;
})();

const math = require(`math.js`);
const arrayUtils = require(`arrayUtils.js`);

console.info(math.add(10, 20));
console.info(math.subtract(20, 10));

console.info(arrayUtils.findMax([1, 4, 2, 31, 5, 6, 7, 9, 8, 11, 21, 23]));
console.info(arrayUtils.findMin([31, 1, 2, 34, -32, 25, 67, 2, 1, -1, 0]));

