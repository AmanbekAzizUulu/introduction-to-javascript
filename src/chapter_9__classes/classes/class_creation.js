{
	const Square = class {
		#id = 0;					// приватное поле
		static #count = 0;			// статическое поле, причем оно может быть и приватным, если добавить `#` перед наименованием поля
		side = undefined;			// инициализация значения по умолчанию
		color = undefined;			// инициализация значения по умолчанию

		constructor(side, color) {	// конструктор класса
			this.color = color;
			this.side = side;
			Square.#count ++;
		}


		toString() {
			const className = this.constructor.name || 'Object';
			const properties = Object.entries(this)
				.map(([key, value]) => `\t${key} = ${value}`)
				.join('\n');
			return `${className} {\n${properties}\n}`;
		}

		static area(square) {
			if (square instanceof Square) {
				return square.side * square.side
			} else {
				throw new TypeError(`Invalid type of argument → should be instance of Square: ${square}`);
			}
		}

		static getCount() {
			return this.#count;
		}
	}

	const square_1 = new Square();
	const square_2 = new Square(10);
	const square_3 = new Square(10, "green");

	console.info(square_1.toString());
	console.info(square_2.toString());
	console.info(square_3.toString());

	console.info("Count of Square instances created:", Square.getCount())

	try {
		Square.area(class Test { field_1; field_2; }); 					// не является экземпляром Square
	} catch (err) {
		console.error(err.message);
	}
}
