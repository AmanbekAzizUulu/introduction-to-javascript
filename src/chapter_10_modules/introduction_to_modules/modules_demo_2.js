{
	// использование IIFE
	const stats = (function () {
		const sum = (num_1, num_2) => num_1 + num_2;
		const square = num => num * num;

		// arithmetic mean
		function mean(data) {
			return data.reduce(sum) / data.length;
		}

		// standard deviation
		function stddev(data) {
			const m = mean(data);
			return Math.sqrt(
				data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
			);
		}

		return {
			mean,
			stddev
		}
	}());

	console.info(stats.mean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
	console.info(stats.stddev([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

{
	// без использования IIFE
	function stats() {
		const sum = (num_1, num_2) => num_1 + num_2;
		const square = num => num * num;

		// arithmetic mean
		function mean(data) {
			return data.reduce(sum) / data.length;
		}

		// standard deviation
		function stddev(data) {
			const m = mean(data);
			return Math.sqrt(
				data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
			);
		}

		return {
			mean,
			stddev
		}
	}

	const functionAggregator = stats();

	console.info(functionAggregator.mean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
	console.info(functionAggregator.stddev([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
}
