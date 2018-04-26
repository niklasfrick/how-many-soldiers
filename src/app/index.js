import '../style/style.scss'

//
// Math Part
//

function checkSolution(checkNumber) {
	if ((checkNumber % 2 == 1) && (checkNumber % 3 == 1) && (checkNumber % 4 == 1) && (checkNumber % 5 == 1) && (checkNumber % 6 == 1) && (checkNumber % 7 == 0)) {
		return true
	} else {
		return false
	}
}

let i = 7
let check = checkSolution(i)

while (!check) {
	if (checkSolution(i)) {
		console.log("Loesung: " + i)
	} 
	check = checkSolution(i)	
	i = i + 7
}

//
// Animation Part
//

function placeSoldiers(amount) {
	let i
	for(i = 0; i < amount; i++) {
		let elem = document.createElement("img")
		elem.setAttribute("src", "assets/img/soldier.png")
		elem.setAttribute("class", "soldier")
		document.getElementById("animation").appendChild(elem)
	}
} 

window.onload = placeSoldiers(7)

function moveSoldierRight(distance) {
    let elem = document.getElementById("animation") 
    let posx = 0

    let id = setInterval(frame, 10)
    function frame() {
        if (posx == distance) {
            clearInterval(id)
        } else {
            posx++
            elem.style.left = posx + 'px'
        }
    }
}

function moveSoldierDown(distance) {
	let elem = document.getElementById("animation")
	let posy = 0

	let id = setInterval(frame, 10)
	function frame() {
		if (posy == distance) {
			clearInterval(id)
		} else {
			posy++
			elem.style.top = posy + 'px'
		}
	}
}

let distanceX = ((document.getElementById("container").clientWidth) - document.getElementById("animation").clientWidth) / 2
let distanceY = 400
console.log(distanceX)
console.log(distanceY)

function animateSoldier() {
	moveSoldierRight(distanceX)
	moveSoldierDown(distanceY)
}

window.onload = animateSoldier()