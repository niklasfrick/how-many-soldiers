import swal from 'sweetalert'

// initialize global variable for current try and update display
var currentNumber = 0

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
		currentNumber = userInput
		updateCurrentNumber(currentNumber)
		if(solutionIsCorrect(userInput)) {
			swal({
				title: "Correct!",
				text: "You have guessed the correct solution!",
				icon: "success",
				button: "Wohoo!"
			});
		} else {
			swal({
				title: "Wrong!",
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
			currentNumber++
			updateCurrentNumber(currentNumber)
			break
		case "a7":
			// adding 7
			currentNumber += 7
			updateCurrentNumber(currentNumber)
			break
		case "s1":
			// subtracting 1
			if (currentNumber - 1 <= 0) {
				updateCurrentNumber(0)
			} else {	
				currentNumber--
				updateCurrentNumber(currentNumber)
			}
			break
		case "s7":
			// subtracting 7
			if (currentNumber - 7 <= 0) {
				updateCurrentNumber(0)
			} else {
				currentNumber -= 7
				updateCurrentNumber(currentNumber)
			}
			break
	}
}