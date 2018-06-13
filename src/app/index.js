import '../style/style.scss'
import './howmanysoldiers.js'

// let i = 1
// let check = checkSolution(i)

// while (!check) {
// 	if (checkSolution(i)) {
// 		console.log("Loesung: " + i)
// 	} 
// 	check = checkSolution(i)	
// 	i = i + 1
// }

// let isPaused = false

// function placeSoldiers(amount, lineup, div) {
// 	let i
// 	let k

// 	for(i = 0; i < amount; i++) {
// 		// create a div with column size 2 for the soldier's row
// 		let soldierDiv = document.createElement("div")
// 		soldierDiv.id = "soldierLine-" + i
// 		soldierDiv.className = "col-" + lineup
// 		document.getElementById(div).appendChild(soldierDiv)
		
// 		// creating 2 new soldiers and add it to the according div
// 		k = 0
// 		while(k < lineup) {
// 			let soldierImg = document.createElement("img")
// 			soldierImg.setAttribute("src", "assets/img/soldier.png")
// 			soldierImg.setAttribute("class", "soldier")
// 			document.getElementById("soldierLine-" + i).appendChild(soldierImg)
// 			k++
// 		}
// 	}
// } 

// function getFullNumbers(tryAmount, rowsOf) {
// 	return Math.floor(tryAmount/rowsOf)
// }

// function getRemainder(tryAmount, rowsOf) {
// 	return tryAmount % rowsOf
// }

// function tryToSoldiersRows(userInputTry, userInputRows) {
// 	let fullSoldiers = userInputTry - getRemainder(userInputTry, userInputRows)
// 	placeSoldiers(fullSoldiers, userInputRows, "fullSoldiers")
// }

// document.addEventListener('DOMContentLoaded', function() {
// 	let userInput = 33
// 	tryToSoldiersRows(userInput, 2)
//   }, false);

// function removeSoldiers() {
// 	let animationDiv = document.getElementById("animation")
// 	while (animationDiv.firstChild) {
// 		animationDiv.removeChild(animationDiv.firstChild)
// 	}
// }

// function moveSoldiersRight(distance) {
// 	isPaused = true
//     let elem = document.getElementById("animation") 
//     let posx = 0

//     let id = setInterval(frame, 10)
//     function frame() {
//         if (posx == distance) {
//             clearInterval(id)
//             return isPaused = false
//         } else {
//             posx++
//             elem.style.left = posx + 'px'
//         }
//     }
// }

// function moveSoldiersDown(distance) {
// 	let elem = document.getElementById("animation")
// 	let posy = 0

// 	let id = setInterval(frame, 10)
// 	function frame() {
// 		if (posy == distance) {
// 			clearInterval(id)
// 			return isPaused = true
// 		} else {
// 			posy++
// 			elem.style.top = posy + 'px'
// 		}
// 	}
// }

// let distanceX = ((document.getElementById("container").clientWidth) - document.getElementById("animation").clientWidth) / 2
// let distanceY = 400
// console.log(distanceX)
// console.log(distanceY)

// function animateSoldiers() {
// 	moveSoldiersRight(distanceX)

// 	if (isPaused) {
// 		setTimeout(function(){moveSoldiersDown()},3000)
// 	} else {
// 		moveSoldiersDown(distanceY)
// 	}
// }

// window.onload = animateSoldiers()