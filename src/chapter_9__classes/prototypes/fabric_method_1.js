/**
 * Фабричная функция для создания объекта диапазона с методами.
 * Использует Object.create() для создания объекта, который наследует методы от range.methods.
 *
 * @param {number} from - Начальное значение диапазона.
 * @param {number} to - Конечное значение диапазона.
 * @returns {Object} Возвращает объект диапазона с методами, определенными в range.methods.
 */
function range(from, to) {
	let r = Object.create(range.methods);

	r.from = from;
	r.to = to;

	return r;
}

/**
 * Объект, содержащий методы для работы с диапазоном.
 */
range.methods = {

	/**
	 * Метод для проверки, входит ли заданное значение в диапазон.
	 *
	 * @param {number} x - Значение, которое нужно проверить на вхождение в диапазон.
	 * @returns {boolean} Возвращает true, если x входит в диапазон, иначе false.
	 */
	isIncludes: function (x) {
		return this.from <= x && x <= this.to;
	},

	/**
	 * Генераторная функция, которая возвращает итератор для чисел в диапазоне.
	 * Использует Symbol.iterator для создания итератора для диапазона.
	 *
	 * @yields {number} Возвращает числа в диапазоне от from до to (включительно).
	 */
	[Symbol.iterator]: function* () {
		for (let i = Math.ceil(this.from); i <= this.to; i++) {
			yield i;
		}
	},

	/**
	 * Метод для получения строкового представления диапазона.
	 *
	 * @returns {string} Строка, представляющая диапазон в формате "(from...to)".
	 */
	toString: function () {
		return "(" + this.from + "..." + this.to + ")";
	}
}


// применение функции
{
	const r = range(1, 5);

	console.info(r.isIncludes(2));
	console.info(r.toString());
	console.info([...r]);
}
