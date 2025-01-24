class Range {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}

	includes(number_to_check) {
		return this.from <= number_to_check && number_to_check <= this.to;
	}

	*[Symbol.iterator]() {
		for (let i = Math.ceil(this.from); i <= this.to; i++) {
			yield i;
		}
	}

	toString() {
		const className = this.constructor.name || 'Object';
		const properties = Object.entries(this)
			.map(([key, value]) => `\t${key} = ${value}`)
			.join('\n');
		return `${className} {\n${properties}\n}`;
	}
}

{
	const range = new Range(1, 10);
	console.info(range.toString());
	console.info(range.includes(5));

	for (const element of range) {			// check 
		console.info(element);
	}
}
