// check code_explanation_2.md

class AbstractSet {
	has(x) {
		throw new Error("Method 'has()' must be implemented.");
	}
}

// к данному в виде аргумента множеству оносятся некоторые элементы,
// этот класс → все то множество, которое не входит в данное в качестве аргумента множество
class NotSet extends AbstractSet {
	constructor(set) {
		super();
		this.set = set;
	}

	has(x) {
		return !this.set.has(x);
	}

	toString() {
		return `{ x| x ∉ ${this.set.toString()} }`;
	}
}

class FiniteSet extends AbstractSet {
	constructor(elements) {
		super();
		this.elements = new Set(elements);
	}

	has(x) {
		return this.elements.has(x);
	}

	toString() {
		return `{${Array.from(this.elements).join(", ")}}`
	}
}

{
	const finiteSet = new FiniteSet([1, 2, 3]);
	const notSet = new NotSet(finiteSet);

	console.info(finiteSet.has(1));		// → true, элемент `1` принадлежит множеству `finiteSet`
	console.info(notSet.has(1));		// → false, элемент `1` принадлежит множеству `finiteSet`, поэтому он не может принадлежать `notSet`
	console.info(notSet.has(0)); 		// → true, элемент `0` не принадлежит множеству `finiteSet`, поэтому он входит в множество `notSet`
	console.info(notSet.has(4)); 		// → true, элемент `4` не принадлежит множеству `finiteSet`, поэтому он входит в множество `notSet`

	console.info(finiteSet.toString());
	console.info(notSet.toString());
}


class RangeSet extends AbstractSet {
	constructor(from, to) {
		super();
		this.from = from;
		this.to = to;
	}

	has(x) {
		return this.from <= x && x <= this.to;
	}

	toString() {
		return ` { x| ${this.from} ≤ x ≤ ${this.to} }`;
	}
}

{
	const rangeSet = new RangeSet(1, 10);

	console.info("x = -1:", rangeSet.has(-1));
	console.info("x = 0:", rangeSet.has(0));
	console.info("x = 0.001:", rangeSet.has(0.001));
	console.info("x = 1:", rangeSet.has(1));
	console.info("x = 5:", rangeSet.has(5));
	console.info("x = 10:", rangeSet.has(10));
	console.info("x = 11:", rangeSet.has(11));
	console.info("x = 11:", rangeSet.has(11.001));
	console.info("x = 12:", rangeSet.has(12));

	console.info(rangeSet.toString());
}

class AbstractEnumerableSet extends AbstractSet {
	get size() {
		throw new Error("Method 'size()' must be implemented.")
	}

	[Symbol.iterator]() {
		throw new Error("Method '[Symbol.iterator]' must be implemented.")
	}

	isEmpty() {
		return this.size === 0;
	}

	toString() {
		return `{ ${Array.from(this).join(", ")} }`;
	}

	equals(set) {
		if (!(set instanceof AbstractEnumerableSet)) {
			return false;
		}
		if (this.size !== set.size) {
			return false;
		}
		for (const element of set) {
			if (!set.has(element)) {
				return false;
			}
		}
		return true;
	}
}

class FiniteSet_ extends AbstractEnumerableSet {
	constructor(elements) {
		super();
		this.set = new Set(elements);
	}

	get size() {
		return this.set.size;
	}

	[Symbol.iterator]() {
		return this.set[Symbol.iterator]();
	}

	has(x) {
		return this.set.has(x);
	}
}

const set_1 = new FiniteSet_([1, 2, 3]);
const set_2 = new FiniteSet_([1, 2, 3]);

console.log(set_1.isEmpty()); // → false
console.log(set_1.toString()); // → "{1, 2, 3}"
console.log(set_1.equals(set_2)); // → true
console.log(set_1.equals(new FiniteSet_([1, 2]))); // → false


class SingletonSet extends AbstractEnumerableSet {
	constructor(member) {
		super();
		this.member = member;
	}

	has(x) {
		return x === this.member;
	}

	get size() {
		return 1;
	}

	*[Symbol.iterator]() {
		yield this.member;
	}
}


const singleSet = new SingletonSet(10);

console.info(singleSet.has(10));
console.info(singleSet.has(1));
console.info(singleSet.size);

for (const member of singleSet) {
	console.info(member);
}

console.info(singleSet.toString());

class AbstractWritableSet extends AbstractEnumerableSet {
	insert(x) { throw new Error("Method 'insert()' must be implemented."); }
	remove(x) { throw new Error("Method 'remove()' must be implemented."); }

	add(set) {
		for (const element of set) {
			this.insert(element);
		}
	}

	subtract(set) {
		for (const element of set) {
			this.remove(element);
		}
	}

	intersect(set) {
		for (const element of this) {
			if (!set.has(element)) {
				this.remove(element);
			}
		}
	}
}

class BitSet extends AbstractWritableSet {
	static bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
	static masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);

	constructor(max) {
		super();
		this.max = max;
		this.n = 0;
		this.numBytes = Math.floor(max / 8) + 1;
		this.data = new Uint8Array(this.numBytes);
	}

	_valid(x) {
		return Number.isInteger(x) && x >= 0 && x <= this.max;
	}

	_has(byte, bit) {
		return (this.data[byte] & BitSet.bits[bit]) != 0;
	}

	has(x) {
		if (this._valid(x)) {
			const byte = Math.floor(x / 8);
			const bit = x % 8;
			return this._has(byte, bit);
		} else {
			return false;
		}
	}

	insert(x) {
		if (this._valid(x)) {
			const byte = Math.floor(x / 8);
			const bit = x % 8;
			if (!this._has(byte, bit)) {
				this.data[byte] |= BitSet.bits[bit];
				this.n++;
			}
		} else {
			throw new TypeError("Invalid element of set: " + x);
		}
	}

	remove(x) {
		if (this._valid(x)) {
			const byte = Math.floor(x / 8);
			const bit = x % 8;
			if (this._has(byte, bit)) {
				this.data[byte] &= BitSet.masks[bit];
				this.n--;
			}
		} else {
			throw new TypeError("Invalid element of set: " + x)
		}
	}

	get size() { return this.n; }

	*[Symbol.iterator]() {
		for (let i = 0; i <= this.max; i++) {
			if (this.has(i)) {
				yield i;
			}
		}
	}
}

// Создаем объект BitSet с максимальным значением 15
const bitSet = new BitSet(15);

// Вставляем элементы в множество
bitSet.insert(3);
bitSet.insert(7);
bitSet.insert(10);
bitSet.insert(15);

console.info(bitSet);

// Проверяем, содержатся ли элементы в множестве
console.log(bitSet.has(3)); // true
console.log(bitSet.has(7)); // true
console.log(bitSet.has(10)); // true
console.log(bitSet.has(5)); // false (такого элемента нет)

// Выводим размер множества
console.log(bitSet.size); // 4 (в множестве 4 элемента)

// Удаляем элемент
bitSet.remove(7);
console.log(bitSet.has(7)); // false (7 был удален)
console.log(bitSet.size); // 3 (в множестве теперь 3 элемента)

// Итерируем через множество
for (let element of bitSet) {
	console.log(element); // 3, 10, 15
}
