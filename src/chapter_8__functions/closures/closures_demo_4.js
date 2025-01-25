{
	function constFunction(x) {
		return () => x;
	}

	const cf = constFunction(5);

	let funcs = [];
	for (var i = 0; i < 10; i++) {
		funcs[i] = constFunction(i);
	}

	for (let i = 0; i < funcs.length; i++) {
		console.info(funcs[i]());
	}
}
console.info("\n\r");
{
	// check closures_with_var.md for explanation

	function constFunction() {
		let funcs = [];
		for (var i = 0; i < 10; i++) {
			funcs[i] = () => i;
		}
		return funcs;
	}

	const funcs = constFunction();

	console.info(funcs[5]());		// → 10 ???
}
