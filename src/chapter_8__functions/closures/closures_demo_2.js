function counter(number) { 	// аргумент функции `n` является закрытой переменной
	return {
		get count() {		// геттер
			return ++number;
		},

		set count(m) {		// сеттер
			if (m > number) {
				number = m;
			} else {
				throw new Error("Счетчик можно устанавливать только в большее значение.")
			}
		}
	}
}

const c = counter(10);

console.info(c.count);			// → 11
console.info(c.count);			// → 12
console.info(c.count);			// → 13

console.info(c.count = 5);		// → "Счетчик можно устанавливать только в большее значение."
