class Person {
	id;
	name;
	age;

	constructor(name, age) {
		this.name = name;
		this.age = age;
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
	const person = new Person("Amanbek", 25);

	console.info(person.toString());
	console.info(x);

	function customFunction() {
		// просто кастомная функция
	}

	// а тут я могу объявлять свойства этой функции
	customFunction.name = "кастомная_функция";
	customFunction.functionLevelObject = {
		description: "// description",
		customMethod: () => {
			console.info("обычная стрелочная функция");
		},
		// какие-то еще свойства
	}
}
