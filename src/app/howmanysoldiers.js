import swal from 'sweetalert'

// initialize global variable for current try and update display
var currentNumber = 0
updateCurrentNumber(currentNumber)

// function for validating a possible solution
function solutionIsCorrect(checkNumber) {
	if ((checkNumber % 2 == 1) && (checkNumber % 3 == 1) && (checkNumber % 4 == 1) && (checkNumber % 5 == 1) && (checkNumber % 6 == 1) && (checkNumber % 7 == 0)) {
		return true
	} else {
		return false
	}
}

// helper function to check if a variable is an integer and positive
function isPositiveInteger(testInput) {
	if (testInput % 1 === 0 && testInput >= 0){
		return true
	} else {
		return false
	}
}

// function to update the display of the current number if it is not empty and not negative
function updateCurrentNumber(newNumber) {
	if (isPositiveInteger(newNumber)) {
		currentNumber = newNumber
		return document.getElementById("currentNumber").innerHTML = newNumber
	} else {
		return false
	}
}

// reset function to reset everything back to the start
window.reset = function reset() {
	currentNumber = 0
	document.getElementById("currentNumber").innerHTML = currentNumber
	document.getElementById("rowoftwo").innerHTML = ""
	document.getElementById("rowofthree").innerHTML = ""
	document.getElementById("rowoffour").innerHTML = ""
	document.getElementById("rowoffive").innerHTML = ""
	document.getElementById("rowofsix").innerHTML = ""
	document.getElementById("rowofseven").innerHTML = ""
}

// function for validation when the user is guessing via the input
window.tryInput = function tryInput() {
	let userInput = document.getElementById("userInput").value
	if (userInput == "") {
		swal({
			title: "Cant be empty!",
			text: "Please enter a number to try!",
			icon: "info",
			button: "Okay"
		})
	} else if (isPositiveInteger(userInput)) {
		updateCurrentNumber(userInput)
		if(solutionIsCorrect(currentNumber)) {
			swal({
				title: `${currentNumber} is Correct!`,
				text: "You have guessed the correct solution!",
				icon: "success",
				button: "Wohoo!"
			});
		} else {
			swal({
				title: `${currentNumber} is Wrong!`,
				text: "Sorry, that was wrong. Try guessing again!",
				icon: "error",
				button: "Okay..."
			})
		}
	} else {
		swal({
			title: "Error!",
			text: "Please only enter positive, whole numbers!",
			icon: "info",
			button: "Okay"
		})
	}
}

// function for the guessing buttons (addition and subtraction )
window.guess = function guess(operation) {
	switch(operation) {
		case "a1":
			// adding 1
			updateCurrentNumber(currentNumber + 1)
			placeSoldiers(currentNumber, 2)
			if (solutionIsCorrect(currentNumber)) {
				swal({
					title: `${currentNumber} is Correct!`,
					text: "You have guessed the correct solution!",
					icon: "success",
					button: "Wohoo!"
				})
			}
			break
		case "a7":
			// adding 7
			updateCurrentNumber(currentNumber + 7)
			if (solutionIsCorrect(currentNumber)) {
				swal({
					title: `${currentNumber} is Correct!`,
					text: "You have guessed the correct solution!",
					icon: "success",
					button: "Wohoo!"
				})
			}
			break
		case "s1":
			// subtracting 1
			if (currentNumber - 1 <= 0) {
				updateCurrentNumber(0)
			} else {
				updateCurrentNumber(currentNumber - 1)
				if (solutionIsCorrect(currentNumber)) {
					swal({
						title: `${currentNumber} is Correct!`,
						text: "You have guessed the correct solution!",
						icon: "success",
						button: "Wohoo!"
					})
				}
			}
			break
		case "s7":
			// subtracting 7
			if (currentNumber - 7 <= 0) {
				updateCurrentNumber(0)
			} else {
				updateCurrentNumber(currentNumber - 7)
				if (solutionIsCorrect(currentNumber)) {
					swal({
						title: `${currentNumber} is Correct!`,
						text: "You have guessed the correct solution!",
						icon: "success",
						button: "Wohoo!"
					})
				}
			}
			break
	}
}

// function for completing the riddle to the closest solution

// function for completing the riddle to the smallest possible solution

function placeSoldiers(amount, lineup) {
	let rowsAmount
	let i
	let k

	switch(lineup) {
		case 2:
			document.getElementById("rowoftwo").innerHTML = ""
			rowsAmount = Math.round(amount / 2)

			for(i = 0; i < rowsAmount; i++) {
				let rowDiv = document.createElement("div")
				rowDiv.id = "soldierRow-" + i
				document.getElementById("rowoftwo").appendChild(rowDiv)
				
				k = 0
				while (k < 2) {
					let soldierImg = document.createElement("img")
					soldierImg.setAttribute("src", "assets/img/soldier.png")
					soldierImg.setAttribute("class", "soldier")
					document.getElementById("soldierRow-" + i).appendChild(soldierImg)
					k++
				}
			}
			
			break
		case 3:

			break
		case 4:

			break
		case 5:

			break
		case 6:

			break
		case 7:

			break
	}
}