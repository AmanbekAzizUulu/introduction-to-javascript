class Animal {
	constructor(id, name, age, habitat, diet) {
		this.id = id; 											// Уникальный идентификатор животного
		this.name = name; 										// Имя или вид животного
		this.age = age; 										// Возраст животного
		this.habitat = habitat;								 	// Среда обитания (например, лес, саванна, океан)
		this.diet = diet; 										// Тип питания (например, травоядное, хищник, всеядное)
	}

	// Метод для получения информации об объекте
	getInfo() {
		return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Habitat: ${this.habitat}, Diet: ${this.diet}`;
	}

	// Метод для старения животного
	ageOneYear() {
		this.age += 1;
	}
}

class Mammal extends Animal {
	constructor(id, name, age, habitat, diet, furType, isDomesticated) {
		super(id, name, age, habitat, diet);
		this.furType = furType; 											// Тип шерсти (например, короткая, длинная, пушистая)
		this.isDomesticated = isDomesticated; 								// Одомашненное животное или нет
	}

	// Метод для получения информации о млекопитающем
	getMammalInfo() {
		return `${this.getInfo()}, Fur Type: ${this.furType}, Domesticated: ${this.isDomesticated}`;
	}

	// Метод для изменения типа шерсти
	changeFurType(newFurType) {
		this.furType = newFurType;
	}

	toString() {
		const className = this.constructor.name || 'Object';
		const properties = Object.entries(this)
			.map(([key, value]) => `\t${key} = ${value}`)
			.join('\n');
		return `${className} {\n${properties}\n}`;
	}
}

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

	function customFunction() {
		// просто кастомная функция
	}

	// далее я могу объявлять свойства этой функции
	customFunction.name = "custom_function";
	customFunction.functionLevelObject = {
		description: "// description",
		customMethod: () => {
			console.info("обычная стрелочная функция");
		},

		// какие-то еще свойства
	}
}


const F = function () { this.name = "Example"; };
const p = F.prototype; 								//→ Прототип функции-конструктора
const c = p.constructor; 							//→ Указывает на F

console.info(new F());
console.info(F.prototype);
console.log(c === F);				 				//→ true

// Добавим метод в прототип
p.sayHello = function () {
	return `Hello, my name is ${this.name}`;
};

// Создаём объект через new F()
const obj = new F();
console.log(obj.sayHello()); 						//→ "Hello, my name is Example"

// Проверим цепочку прототипов
console.log(obj.constructor);
console.log(obj.constructor === F); 				//→ true
console.log(Object.getPrototypeOf(obj) === p); 		//→ true


F.prototype.toString = function () {
	const className = this.constructor.name || 'Object';
	const properties = Object.entries(this)
		.map(([key, value]) => `\t${key} = ${value}`)
		.join('\n');
	return `${className} {\n${properties}\n}`;
}

console.info(c === F);

const proto_type = { greeting: "Hello!" };
const obj_ = Object.create(proto_type);

console.info(obj_.__proto__ === proto_type);

// Создаем объект Person
const person = new Person("Amanbek", 25);
console.info(person.toString());

// Показать прототипы объектов
console.info("Prototype of person:", person.__proto__);
console.info("Prototype of person constructor:", person.constructor.prototype);
console.info("Prototype of Person class:", Person.prototype);

// Создаем объект Mammal
const dog = new Mammal(1, "Dog", 5, "Forest", "Carnivore", "Short", true);
console.info(dog.toString());
console.info("Prototype of dog:", dog.__proto__);
console.info("Prototype of Mammal class:", Mammal.prototype);

// Показать, что методы класса Mammal приходят от Animal через прототип
console.info("Can dog age one year?", dog.ageOneYear ? "Yes" : "No");

// Добавление метода в прототип Mammal
Mammal.prototype.bark = function () {
	console.info(`${this.name} says Woof!`);
};

// Вызов нового метода через прототип
dog.bark();

// Проверка, как работает __proto__ и prototype
console.info("Is dog's __proto__ the same as Mammal's prototype?", dog.__proto__ === Mammal.prototype);
console.info("Is Mammal's prototype the same as Animal's prototype?", Mammal.prototype.__proto__ === Animal.prototype);

// Показать цепочку прототипов
let currentProto = dog.__proto__;
console.info("Prototype chain of dog:");
while (currentProto) {
	console.info(currentProto);
	currentProto = currentProto.__proto__;
}
