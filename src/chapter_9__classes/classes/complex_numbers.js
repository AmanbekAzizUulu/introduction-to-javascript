class Complex {
	// Приватные поля
	#r;
	#i;

	// Статические константы
	static ZERO = new Complex(0, 0);
	static ONE = new Complex(1, 0);
	static I = new Complex(0, 1);

	// Конструктор
	constructor(real, imaginary) {
		this.#r = real;
		this.#i = imaginary;
	}

	// Методы для сложения и умножения комплексных чисел
	plus(that) {
		return new Complex(this.#r + that.#r, this.#i + that.#i);
	}

	times(that) {
		return new Complex(
			this.#r * that.#r - this.#i * that.#i,
			this.#r * that.#i + this.#i * that.#r
		);
	}

	// Статические методы для сложения и умножения
	static sum(c, d) {
		if (!(c instanceof Complex) || !(d instanceof Complex)) {
			throw new TypeError("Arguments must be instances of Complex");
		}
		return c.plus(d);
	}

	static product(c, d) {
		if (!(c instanceof Complex) || !(d instanceof Complex)) {
			throw new TypeError("Arguments must be instances of Complex");
		}
		return c.times(d);
	}

	// Геттеры для реальной и мнимой части
	get real() {
		return this.#r;
	}

	get imaginary() {
		return this.#i;
	}

	// Геттер для модуля комплексного числа
	get magnitude() {
		return Math.hypot(this.#r, this.#i);
	}

	// Метод для строкового представления
	toString() {
		return `Complex {\n\treal = ${this.real}\n\timaginary = ${this.imaginary}\n}`;
	}

	// Метод для сравнения двух комплексных чисел
	equals(that) {
		return (
			that instanceof Complex &&
			this.#r === that.#r &&
			this.#i === that.#i
		);
	}
}

// Пример использования
const c = new Complex(5, -10);
const d = new Complex(-5, 10);
const c__magnitude = c.magnitude;
const d__magnitude = d.magnitude;

const c_d__product = Complex.product(c, d);
const __zero__ = Complex.ZERO;

console.info(c.toString());
console.info(d.toString());

console.info(c__magnitude);
console.info(d__magnitude);

console.info(c.plus(d).toString());

console.info(c_d__product.toString());
console.info(__zero__.toString());
