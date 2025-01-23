// check study_notes__memoization.md

function memoize(func) {
	const cache = new Map();

	return function (...args) {
		let key = args.length + args.join("+");

		if (cache.has(key)) {
			return cache.get(key);
		} else {
			let result = func.apply(this, args);
			cache.set(key, result);
			return result;
		}
	}
}
