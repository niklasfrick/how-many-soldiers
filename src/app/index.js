import '../style/style.scss'


var ergebnis
var i

for (i = 1; i % 7 != 0 && i != 7; i++) {
	if (i % 2 == 1 && i % 3 == 1 && i % 4 == 1 && i % 5 == 1 && i % 6 == 1 && i % 7 == 0 && i != 7) {
		ergebnis = i
		console.log(ergebnis)
	} else {
		console.log(i)
	}
}