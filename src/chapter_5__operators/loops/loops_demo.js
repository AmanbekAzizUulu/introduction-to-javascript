/* all variables are declared here */
const CRLF = () => console.log("\n");	// перевод каретки

const stream = "chunk of data chunk of data chunk of data chunk of" +				// → имитация порций данных из потока данных
			   "data chunk of data chunk of data chunk of data f data chunk o" +
			   "f data chunk of data chunk of data chunk of data chunk o";

const array__1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const book__obj = {
	id: "1001",
	title: "JavaScript for Dummies",
	price: 100.50
}

/***********************************************/

{
	// `do-while` loop
	let counter_1 = 1;
	do {
		console.info("hello from `do-while` loop");
	} while (counter_1++ < 3);

	// `while` loop
	CRLF();
	let counter_2 = 1;
	while (counter_2++ < 3) {
		console.info("hello from `while` loop");
	}

	// `for-i` loop
	CRLF();
	console.info("elements of array");
	for (let index = 0; index < array__1.length; index++) {
		console.info(array__1[index]);
	}


	// `for-i` loop with 2 iterators
	CRLF();
	let i = 0;
	let j = 0;
	let sum = 0;

	for (i = 0, j = 10; i < 10; i++, j--) {
		sum += i * j;
	}
	console.info("sum: of elements of array:", sum);

	// `for-of` loop
	CRLF();
	console.info("elements of array");
	for (const element of array__1) {
		console.info(element.toString());
	}

	CRLF();
	for (const objectField of Object.keys(book__obj)) {
		console.info("field name: ", objectField);
	}

	CRLF();
	for (const objectFieldValue of Object.values(book__obj)) {
		console.info("field value: ", objectFieldValue);
	}

	CRLF();
	for (const entry of Object.entries(book__obj)) {
		console.info(`field name: ${entry[0]} \n\tfield value: ${entry[1]}`);
	}

	CRLF();
	let frequency = {};
	for (let character of "mississippi") {
		if (frequency[character]) {
			frequency[character]++;
		} else {
			frequency[character] = 1;
		}
	}
	console.info(frequency);

	// `for-of` loop with Set
	const text = "Na na na na na na Batman!";
	const wordSet = new Set(text.split(" "));
	let uniqueWord = [];

	CRLF();
	for (const word of wordSet) {
		uniqueWord.push(word);
	}
	console.info(uniqueWord);

	// `for-of` with Map
	const customMap = new Map([
		[1, "one"],
		[2, "two"],
		[3, "three"],
		[4, "four"]
	]);

	CRLF();
	for (const [key, value] of customMap) {
		console.info("key: " + key + "\tvalue: " + value);
	}

	// `for-await-of` with Map
	CRLF();

	// читать порции из асинхронно итерируемого потока данных и выводить их в консоль
	async function printStream(stream) {
		let data = "";
		for await (const chunk of stream) {
			data += chunk;
		}
		console.info(data);
	}
	printStream(stream);

	// `for-in` loop
	CRLF();

	let objectFields = [];
	let index = 0;

	// объект в js является по сути своей массивом,
	// наименования свойств → это по сути наименование индексов (ключи),
	// значения свойств → это по сути значения по индекску массива (значения)

	// перечисление наименований свойств объекта (они своего рода `индексы`)
	for(objectFields[index++] in book__obj);

	console.info(objectFields);

	// объект в js является по сути своей массивом,
	// наименования свойств → это по сути наименование индексов (ключи),
	// значения свойств → это по сути значения по индекску массива (значения)
	
	// перечисление индексов массива (именно индексов, не значений)
	for(const index in objectFields){
		console.info(index);
	}
}
