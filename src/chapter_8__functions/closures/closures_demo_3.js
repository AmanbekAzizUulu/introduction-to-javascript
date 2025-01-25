function addPrivateProperty(object, name, predicate) {
	let value;

	object[`get${name}`] = function () { return value; };

	object[`set${name}`] =
		function (v) {
			if (predicate && !predicate(v)) {
				throw new Error(`set${name} недопустимое значение ${v}`);
			} else {
				value = v;
			}
		}
}

let person = {};

addPrivateProperty(person, "Name", x => typeof x === "string");
addPrivateProperty(person, "Age", x => typeof x === "number");
addPrivateProperty(person, "Id", x => typeof x === "number");

person.setName("Frank");
person.setAge(26);
person.setId(10001);

console.info("name: " + person.getName());
console.info("age: " + person.getAge());
console.info("id: " + person.getId());

for (const property in person) {
	console.info(property);
}
