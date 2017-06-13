var myArray = [
	"Apple",
	"Banana",
	"Kiwi",
	"Melonwater"
];

var myArrayWithObject = [
	{"id": 1, "name": "NayosX"},
	{"id": 2, "name": "Andrea"},
	{"id": 3, "name": "Adonai"},
];

function sumar(a, b){
	return a+b;
}

function calcular(option, a, b) {
	var result = 0;
	switch (option) {
		case 1: //resta
			result = a+b;
			break;
		case 2: //multiplicacion
			result = a*b;
			break;
		case 3:
			result = a/b;
			break;
		default:
			result = a+b;
			break;
	}
	return result;
}