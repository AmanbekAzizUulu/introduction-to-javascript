function counter() {
	let n = 0;

	return {
		count: function () { return ++n },
		reset: function () { n = 0 }
	};
}

const count = counter();

console.info(count.count()); 				// → n = 1
console.info(count.count());				// → n = 2
console.info(count.count());				// → n = 3
console.info(count.count());				// → n = 4

console.info(count.reset());				// → n = 0

//  по сути происходит присваивание свойств
// (или создание переменной, которая ссылается на объект, возвращаемый функцией):
//
//  const count = {
//		count: function () { return n++ },
//		reset: function () { n = 0 }
//	}
//
