let x = 10;
let y = 20;
console.log("Сумма значений x и y:", y + x);

// создание объекта
let book = {
	topic: "JavaScript for Beginners",   	// → свойство topic
	edition: 10								// → свойство edition
}

book.author = "Flanagan";                   // → объявление (variable declaration) нового свойства и присваивание значению этого свойства строки "Flanagan" (variable initialization).
book.contents = {};							// → объявление вложенного объекта contents, не имеющего свойств
book.contents?.ch01?.sect1 					// → check study_notes.md

// работа с массивами
let primes = [2, 3, 5, 7];					// → объявление и инициализация массива числового типа
primes[0];									// → обращение к элементу массива под индексом 0
primes[primes.length - 1];					// → обращение к последнему элементу массива (под индексом primes.length - 1)
primes[4] = 9;								// → объявление и инициализация нового элемента массива
primes[4] = 11;								// → инициализация элемента массива новым значением

// check study_notes__demo_1.md
let empty = [];								// → объявление пустого массива
empty.length;								// => 0

// check study_notes__demo_1.md
let coordinates = [							// → объявление и инициализация массива объектов типа coordinates
	{ x: 10, y: 20 },						// → анонимные объекты
	{ x: 30, y: 40 }
];

// check study_notes__demo_1.md
let data = {								// → объявление объекта data, который имеет 2 свойства trial_1 и trial_2, которые представлены в виде массивов, в которые вложены другие массивы
	trial_1: [
		[1, 2],
		[3, 4]
	],
	trial_2: [
		[5, 6],
		[7, 8]
	]
}

// арифметические операции
3 + 2;
3 - 2;
3 * 2;
3 / 2;

coordinates[1].x - coordinates[0].x;

"3" + "2";

// сокращенные аримфетические операции
let count = 0;
count++;
count--;
count += 4;
count -= 2;
count;

// арифметико-логические операции
let a = 10;
let b = 20;

// check study_notes__demo_1.md
a === b; 						// => false, строгое равенство
a == b;							// => false, нестрогое равенство

a !== b;						// => true

a < b;							// => true
a > b;							// => false

a <= b;							// => true
a >= b;							// => false

"two" === "three";				// => false
"two" > "three";				// => true, "tw" в алфавитном порядке больше чем "th"

false = (a > b);        	    // => true, a > b вернет false, в следствии чего получим false === false, а это true

// логические операции объединяют или инвертируют булевский значения
(a === 10) && (b === 20);		// => true, оба сравнений вернут true (&& → арифметическое И)

(a > 20) || (b < 20);			// => false, ни один из сравнений не вернет true (|| → арифметическое ИЛИ)

!(a === b);						// => false, сравнение вернет false, а '!' инвертирует его в false
