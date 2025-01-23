
let t = 1;

console.log(scopesDemo());

function scopesDemo(){
	let t = 2;
	return t;
}

console.log(t);
console.log(scopesDemo());

console.log(String);
