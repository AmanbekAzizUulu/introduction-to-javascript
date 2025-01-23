/* all variables are declared here */
const CRLF = () => console.log("\n");	// перевод каретки

const value = 0; 								// try to change this variables to another and check terminal to output
const key = 0;
const functionArgument__1 = 1;

const array__1 = [
	createPoint(0, 1),
	createPoint(2, 3),
	createPoint(4, 5)
];


/**
 *	Функция применяется для создания анонимного объекта с переопределенным методом toString()
 *
 * @param {*} point_x принимает координату x точки
 * @param {*} point_y принимает координату y точки
 * @returns  возвращается анонимный объект, который не привязан к имени переменной или класса, но содержит определенные свойства и методы
 */
function createPoint(point_x, point_y) {
	return {
		point_x,
		point_y,
		toString() {
			return `{\n  point_x = ${this.point_x}` +
				`\n  point_y = ${this.point_y}\n}`;
		}
	};
}

/********************************************/


{
	if (value === 1) {
		console.log("value is equal to:", value);
	} else if (value === 2) {
		console.log("value is equal to:", value);
	} else {
		console.log("value is equal to:", value);
	}
}


{
	switch (key) {
		case 1:
			console.log("key:", key);
			break;
		case 2:
			console.log("key:", key);
			break;
		case undefined:
			console.log("key:", key);
			break;
		default:
			console.log("default case");
			break;
	}

	function converter(value) {
		const valueType = typeof value;

		switch (valueType) {
			case "number":
				console.info("type of given value:", valueType);
				break;
			case "string":
				console.info("type of given value:", valueType);
				break;
			default:
				console.info("type of given value:", valueType);
				break;
		}
	}
	converter(functionArgument__1);
}
