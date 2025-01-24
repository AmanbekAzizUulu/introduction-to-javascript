// check code_explanation_1.md

class Histogram {
	constructor() {
		this.map = new Map();
	}

	count(key) {
		return this.map.get(key) || 0;
	}

	has(key) {
		return this.count(key) > 0;
	}

	get size() {
		return this.map.size;
	}

	add(key) {
		this.map.set(key, this.count(key) + 1);
	}

	delete(key) {
		const count = this.count(key);
		if (count === 1) {
			this.map.delete(key);
		} else if (count > 1) {
			this.map.set(key, count - 1);
		}
	}

	[Symbol.iterator](){
		return this.map.keys();
	}

	keys(){
		return this.map.keys();
	}
	values(){
		return this.map.values();
	}
	entries(){
		return this.map.entries();
	}
}

{
	const histogram = new Histogram();

	histogram.add("banana");
	histogram.add("apple");
	histogram.add("banana");
	histogram.add("potato");
	histogram.add("watermelon");
	histogram.add("apple");
	histogram.add("banana");
	histogram.add("banana");
	histogram.add("watermelon");
	histogram.add("watermelon");
	histogram.add("potato");
	histogram.add("tomato");
	histogram.add("tomato");


	console.info(histogram.count("apple"));
	console.info(histogram.count("banana"));
	console.info(histogram.count("potato"));
	console.info(histogram.count("watermelon"));
	console.info(histogram.count("tomato"));

	histogram.delete("apple");
	histogram.delete("apple");

	console.info(histogram.count("apple"));


	for (const key of histogram) {
		console.info(key);
	}

	for (const [key, value] of histogram.entries()) {
		console.info([key, value]);
	}
}
