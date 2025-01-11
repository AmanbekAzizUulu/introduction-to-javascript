// check study_notes__demo_2.md

// функции
function adder(a, b) {																				//объявление функции
	return a + b;
};
console.log("Результат вызова функции adder(a, b) с аргументами 1 и 2: ", adder(1, 2));


let square = function (x) {																			// функцию можно присвоить переменной
	return x * x;
};
console.log("Результат вызова функции square(x) с аргументом 10: ", square(10));

let adder_ = (a, b) => a + b + 10;																	// → стрелочная функция
console.log("Результат вызова функции adder_(a, b) с аргументами 1 и 2: ", adder(10, 20));

let square_ = (a) => a * a + 10;
console.log("Результат вызова функции square_(x) с аргументом 10: ", square(10));


//методы
let empty = [];
console.log("Содержимое пустого массива → ", empty);

empty.push(2, 3, 5, 7);																// добавление элементов в массив
console.log("Содержимое пустого массива после добавления элементов → ", empty);

empty.reverse();																	// изменение порядка элементов массива на обратный
console.log("Содержимое массива после изменения порядка его элементов на обратный → ", empty);


// check study_notes__demo_2.md
let points = [
	{
		x: 10,
		y: 20
	},
	{
		x: 30,
		y: 40
	}
];

points.dist = function () {
	let point_1 = this[0];
	let point_2 = this[1];

	let a = point_2.x - point_1.x;
	let b = point_2.y - point_1.y;

	return Math.sqrt(a * a + b * b);
};

console.log("Результат вызова метода points.dist(): ", points.dist());


function abs(x) {
	if (x >= 0) {
		return x;
	} else {
		return x * -1;
	}
}

console.log(abs(-10));
console.log(abs(-10) === abs(10));

let primes = [1, 3, 5, 7, 9];

function sum(array) {
	let sum = 0;
	for (let element of array) {
		sum += element;
	}
	return sum;
}

console.log("Сумма элементов массива: ", sum(primes));

function factorial_1(num) {
	if (num === 0) {
		return 1;
	}

	if (num < 0) {
		return;
	}

	let result = 1;
	while (num > 1) {
		result *= num;
		num--;
	}
	return result;
}

console.log("Вызовы функции factorial_1(num)");
console.log("Факториал числа 0: ", factorial_1(0));
console.log("Факториал числа -5:", factorial_1(-5));
console.log("Факториал числа 5: ", factorial_1(5));

function factorial_2(num) {
	if (num === 0) {
		return 1;
	}

	if (num < 0) {
		return;
	}

	let result = 1;
	let i = 1;

	for (i = 2; i <= num; i++) {
		result *= i;
	}
	return result;
}

console.log("Вызовы функции factorial_2(num)");
console.log("Факториал числа 0: ", factorial_1(0));
console.log("Факториал числа -5:", factorial_1(-5));
console.log("Факториал числа 5: ", factorial_1(5));

class Point {
	#x = 0;
	#y = 0;

	constructor(x, y) {
	  this.#x = x;  			// → присваиваем значения приватным полям
	  this.#y = y;
	}

	getX() {
	  return this.#x;  			// → используем приватное поле #x
	}

	getY() {
	  return this.#y;  			// → используем приватное поле #y
	}

	setX(x) {
	  this.#x = x;  			// → присваиваем значение приватному полю #x
	}

	setY(y) {
	  this.#y = y;  			// → присваиваем значение приватному полю #y
	}

	// → метод для вычисления расстояния от начала координат (0,0) до точки (x, y)
	distance() {
	  return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
	}
  }


let point = new Point(10, 20);

let dist = point.distance();

console.log("Расстояние от начала координат до точки с координатами (10, 20): ", dist);
