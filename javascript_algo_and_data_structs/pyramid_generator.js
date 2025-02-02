function padRow(){
	
}

const character = "#";
const count = 8;
// const rows = [];

for (let i = 0; i < count; i = i+1) {
	// rows.push(character.repeat(i+1)); // repeat method will repeat the target string 
	console.log(character.repeat(i+1));
}

const call = padRow(); // use const to assign a function call to the variable. Let doesn't work?
console.log(call);
