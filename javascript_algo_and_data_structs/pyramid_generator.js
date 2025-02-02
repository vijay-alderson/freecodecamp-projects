const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount){
	const blankSpace = " ".repeat(rowCount - rowNumber);
	return blankSpace + character.repeat(2 * rowNumber - 1) + blankSpace;
}


for (let i = 1; i <= count; i++){
	rows.push(padRow(i, count));
}

let result = "";

for (const row in rows){
	result = result + row + "\n";
}
console.log(result);
