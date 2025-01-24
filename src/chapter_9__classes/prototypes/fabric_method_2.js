/**
 * Конструктор диапазона чисел.
 * Создает объект диапазона с указанными границами.
 *
 * @param {number} from - Начальное значение диапазона.
 * @param {number} to - Конечное значение диапазона.
 */
function Range(from, to) {
	this.from = from;
	this.to = to;
}

/**
 * Прототип объекта Range.
 * Содержит методы для работы с диапазоном.
 */
Range.prototype = {
	/**
	 * Проверяет, входит ли число в диапазон.
	 *
	 * @param {number} num - Число для проверки.
	 * @returns {boolean} Возвращает true, если число входит в диапазон, иначе false.
	 */
	includes: function (num) {
		return this.from <= num && num <= this.to;
	},

	/**
	 * Итератор для перебора чисел в диапазоне.
	 *
	 * @generator
	 * @yields {number} Следующее число в диапазоне.
	 */
	[Symbol.iterator]: function* () {
		for (let index = Math.ceil(this.from); index <= this.to; index++) {
			yield index;
		}
	},

	/**
	 * Возвращает строковое представление диапазона.
	 *
	 * @returns {string} Строка в формате "(from...to)".
	 */
	toString: function () {
		return "(" + this.from + "..." + this.to + ")";
	}
};

/**
 * Пример использования объекта Range.
 */
{
	let r = new Range(1, 10);

	// Проверка принадлежности числа диапазону
	console.info(r.includes(5)); // true

	// Строковое представление диапазона
	console.info(r.toString()); // "(1...10)"

	// Итерация по диапазону
	console.table([...r]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
