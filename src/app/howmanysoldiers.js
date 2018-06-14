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
		document.getElementById("currentNumber").innerHTML = ""
		currentNumber = newNumber
		return document.getElementById("currentNumber").innerHTML = currentNumber
	} else {
		return false
	}
}

// reset function to reset everything back to the start (reload the page)
window.reset = function reset() {
	document.location.reload(true)
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
		userInput = Number(userInput)
		updateCurrentNumber(userInput)
		placeSoldiers(currentNumber, 2)
		if(solutionIsCorrect(currentNumber)) {
			swal({
				title: `${currentNumber} is Correct!`,
				text: "You have guessed the correct solution!",
				icon: "success",
				button: "Wohoo!"
			})
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
		case "s1":
			// subtracting 1
			if (currentNumber - 1 <= 0) {
				updateCurrentNumber(0)
			} else {
				updateCurrentNumber(currentNumber - 1)
				placeSoldiers(currentNumber, 2)
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
				placeSoldiers(currentNumber, 2)
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

// function for completing the riddle to the next higher or smaller solution
window.nextsolution = function nextHigherSolution(option) {
	let placeholderNumber
	switch(option) {
		case "higher":
			placeholderNumber = currentNumber + 1
			while (!solutionIsCorrect(placeholderNumber)) {
				placeholderNumber++
			}
			if (solutionIsCorrect(placeholderNumber)) {
				updateCurrentNumber(placeholderNumber)
				placeSoldiers(currentNumber, 2)
				swal({
					title: `${currentNumber} is Correct!`,
					text: "A new solution has been found!",
					icon: "success",
					button: "Wohoo!"
				})
			}
			break

		case "smaller":
			placeholderNumber = currentNumber - 1
			if (placeholderNumber <= 301) {
				updateCurrentNumber(301)
				placeSoldiers(currentNumber, 2)
				swal({
					title: "You reached the end!",
					text: "Smallest possible solution has been reached, please increase the number from now on!",
					icon: "info",
					button: "Okay"
				})
			} else {
				while (!solutionIsCorrect(placeholderNumber)) {
					placeholderNumber--
				}
				if (solutionIsCorrect(placeholderNumber)) {
					updateCurrentNumber(placeholderNumber)
					placeSoldiers(currentNumber, 2)
					swal({
						title: `${currentNumber} is Correct!`,
						text: "A new solution has been found!",
						icon: "success",
						button: "Wohoo!"
					})
				}
			}
			break
		}
} 

// function to place the soldiers in the rows of 2 to 7
function placeSoldiers(amount, lineup) {
	// initialize the necessary variables for each row
	let rowsAmount
	let remainder
	let i
	let k

	switch(lineup) {
		case 2:
			// clear the soldier lineup
			document.getElementById("rowoftwo").innerHTML = ""
			// get the remainder amount and calculate the amount of rows that can be filled 
			// with two soldiers
			remainder = amount % 2
			rowsAmount = amount / 2 - remainder

			// if the remainder is 1 set the "row of two" div to passed, if not set to failed
			if (remainder == 1) {
				// remove the remaining soldier if exists
				if (document.getElementById("remainderSoldierRowOfTwo") !== null) {
					document.getElementById("remainderSoldierRowOfTwo").remove()
				}
				if (document.getElementById("divrowoftwo").classList.contains("bg-failed")) {
					document.getElementById("divrowoftwo").classList.replace("bg-failed", "bg-passed")
				} else {
					document.getElementById("divrowoftwo").classList.add("bg-passed")
				}

				// add the remainder soldier to the "row of two" div
				let remainderSoldierImg = document.createElement("img")
				remainderSoldierImg.setAttribute("src", "assets/img/soldier.png")
				remainderSoldierImg.setAttribute("class", "soldier")
				remainderSoldierImg.id = "remainderSoldierRowOfTwo"
				document.getElementById("divrowoftwo").appendChild(remainderSoldierImg)

			} else {
				// remove the remainder soldier again and set the background of the div to failed
				if (document.getElementById("remainderSoldierRowOfTwo") !== null) {
					document.getElementById("remainderSoldierRowOfTwo").remove()
				}
				if (document.getElementById("divrowoftwo").classList.contains("bg-passed")) {
					document.getElementById("divrowoftwo").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowoftwo").classList.add("bg-failed")
				}
				
			}

			// create a div for each row
			for(i = 0; i < rowsAmount; i++) {
				let rowDiv = document.createElement("div")
				rowDiv.id = "soldierRow-" + i
				document.getElementById("rowoftwo").appendChild(rowDiv)
				
				// add two soldiers to each div that represents a row
				k = 0
				while (k < 2) {
					let soldierImg = document.createElement("img")
					soldierImg.setAttribute("src", "assets/img/soldier.png")
					soldierImg.setAttribute("class", "soldier")
					document.getElementById("soldierRow-" + i).appendChild(soldierImg)
					k++
				}
			}
		
			// "automatically" change to the next line up
			placeSoldiers(currentNumber, 3)
			break

		case 3:
			// clear the soldier lineup
			document.getElementById("rowofthree").innerHTML = ""
			// get the remainder amount and calculate the amount of rows that can be filled 
			// with three soldiers
			remainder = amount % 3
			rowsAmount = (amount - remainder) / 3

			// if the remainder is 1 set the "row of three" div to passed, if not set to failed
			if (remainder == 1) {
				// remove the remaining soldier if exists
				if (document.getElementById("remainderSoldierRowOfThree") !== null) {
					document.getElementById("remainderSoldierRowOfThree").remove()
				}
				if (document.getElementById("divrowofthree").classList.contains("bg-failed")) {
					document.getElementById("divrowofthree").classList.replace("bg-failed", "bg-passed")
				} else {
					document.getElementById("divrowofthree").classList.add("bg-passed")
				}
				
				// add the remainder soldier to the "row of three" div
				let remainderSoldierImg = document.createElement("img")
				remainderSoldierImg.setAttribute("src", "assets/img/soldier.png")
				remainderSoldierImg.setAttribute("class", "soldier")
				remainderSoldierImg.id = "remainderSoldierRowOfThree"
				document.getElementById("divrowofthree").appendChild(remainderSoldierImg)

			} else if(document.getElementById("remainderSoldierRowOfThree") == null) {
				// if the remainder soldier does not exist, set the background of the div to failed
				if (document.getElementById("divrowofthree").classList.contains("bg-passed")) {
					document.getElementById("divrowofthree").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowofthree").classList.add("bg-failed")
				}
			} else {
				// remove the remaining soldier if he exists and set the background of the div to failed
				if (document.getElementById("remainderSoldierRowOfThree").innerHTML !== null) {
					document.getElementById("remainderSoldierRowOfThree").remove()
				}
				if (document.getElementById("divrowofthree").classList.contains("bg-passed")) {
					document.getElementById("divrowofthree").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowofthree").classList.add("bg-failed")
				}
			}

			// create a div for each row
			for(i = 0; i < rowsAmount; i++) {
				let rowDiv = document.createElement("div")
				rowDiv.id = "soldierRow-3-" + i
				document.getElementById("rowofthree").appendChild(rowDiv)
				
				// add two soldiers to each div that represents a row
				k = 0
				while (k < 3) {
					let soldierImg = document.createElement("img")
					soldierImg.setAttribute("src", "assets/img/soldier.png")
					soldierImg.setAttribute("class", "soldier")
					document.getElementById("soldierRow-3-" + i).appendChild(soldierImg)
					k++
				}
			}
			
			// "automatically" change to the next line up
			placeSoldiers(currentNumber, 4)
			break

		case 4:
			// clear the soldier lineup
			document.getElementById("rowoffour").innerHTML = ""
			// get the remainder amount and calculate the amount of rows that can be filled 
			// with four soldiers
			remainder = amount % 4
			rowsAmount = (amount - remainder) / 4

			// if the remainder is 1 set the "row of four" div to passed, if not set to failed
			if (remainder == 1) {
				// remove the remaining soldier if exists
				if (document.getElementById("remainderSoldierRowOfFour") !== null) {
					document.getElementById("remainderSoldierRowOfFour").remove()
				}
				if (document.getElementById("divrowoffour").classList.contains("bg-failed")) {
					document.getElementById("divrowoffour").classList.replace("bg-failed", "bg-passed")
				} else {
					document.getElementById("divrowoffour").classList.add("bg-passed")
				}

				// add the remainder soldier to the "row of four" div
				let remainderSoldierImg = document.createElement("img")
				remainderSoldierImg.setAttribute("src", "assets/img/soldier.png")
				remainderSoldierImg.setAttribute("class", "soldier")
				remainderSoldierImg.id = "remainderSoldierRowOfFour"
				document.getElementById("divrowoffour").appendChild(remainderSoldierImg)

			} else if(document.getElementById("remainderSoldierRowOfFour") == null) {
				// if the remainder soldier does not exist, set the background of the div to failed
				if (document.getElementById("divrowoffour").classList.contains("bg-passed")) {
					document.getElementById("divrowoffour").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowoffour").classList.add("bg-failed")
				}
				
			} else {
				// remove the remaining soldier if he exists and set the background of the div to failed
				if (document.getElementById("remainderSoldierRowOfFour").innerHTML !== null) {
					document.getElementById("remainderSoldierRowOfFour").remove()
				}
				if (document.getElementById("divrowoffour").classList.contains("bg-passed")) {
					document.getElementById("divrowoffour").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowoffour").classList.add("bg-failed")
				}
			}

			// create a div for each row
			for(i = 0; i < rowsAmount; i++) {
				let rowDiv = document.createElement("div")
				rowDiv.id = "soldierRow-4-" + i
				document.getElementById("rowoffour").appendChild(rowDiv)
				
				// add two soldiers to each div that represents a row
				k = 0
				while (k < 4) {
					let soldierImg = document.createElement("img")
					soldierImg.setAttribute("src", "assets/img/soldier.png")
					soldierImg.setAttribute("class", "soldier")
					document.getElementById("soldierRow-4-" + i).appendChild(soldierImg)
					k++
				}
			}

			// "automatically" change to the next line up
			placeSoldiers(currentNumber, 5)
			break

		case 5:
			// clear the soldier lineup
			document.getElementById("rowoffive").innerHTML = ""
			// get the remainder amount and calculate the amount of rows that can be filled 
			// with four soldiers
			remainder = amount % 5
			rowsAmount = (amount - remainder) / 5

			// if the remainder is 1 set the "row of five" div to passed, if not set to failed
			if (remainder == 1) {
				// remove the remaining soldier if exists
				if (document.getElementById("remainderSoldierRowOfFive") !== null) {
					document.getElementById("remainderSoldierRowOfFive").remove()
				}
				if (document.getElementById("divrowoffive").classList.contains("bg-failed")) {
					document.getElementById("divrowoffive").classList.replace("bg-failed", "bg-passed")
				} else {
					document.getElementById("divrowoffive").classList.add("bg-passed")
				}

				// add the remainder soldier to the "row of five" div
				let remainderSoldierImg = document.createElement("img")
				remainderSoldierImg.setAttribute("src", "assets/img/soldier.png")
				remainderSoldierImg.setAttribute("class", "soldier")
				remainderSoldierImg.id = "remainderSoldierRowOfFive"
				document.getElementById("divrowoffive").appendChild(remainderSoldierImg)

			} else if(document.getElementById("remainderSoldierRowOfFive") == null) {
				// if the remainder soldier does not exist, set the background of the div to failed
				if (document.getElementById("divrowoffive").classList.contains("bg-passed")) {
					document.getElementById("divrowoffive").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowoffive").classList.add("bg-failed")
				}
			} else {
				// remove the remaining soldier if he exists and set the background of the div to failed
				if (document.getElementById("remainderSoldierRowOfFive").innerHTML !== null) {
					document.getElementById("remainderSoldierRowOfFive").remove()
				}
				if (document.getElementById("divrowoffive").classList.contains("bg-passed")) {
					document.getElementById("divrowoffive").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowoffive").classList.add("bg-failed")
				}
			}

			// create a div for each row
			for(i = 0; i < rowsAmount; i++) {
				let rowDiv = document.createElement("div")
				rowDiv.id = "soldierRow-5-" + i
				document.getElementById("rowoffive").appendChild(rowDiv)
				
				// add two soldiers to each div that represents a row
				k = 0
				while (k < 5) {
					let soldierImg = document.createElement("img")
					soldierImg.setAttribute("src", "assets/img/soldier.png")
					soldierImg.setAttribute("class", "soldier")
					document.getElementById("soldierRow-5-" + i).appendChild(soldierImg)
					k++
				}
			}

			// "automatically" change to the next line up
			placeSoldiers(currentNumber, 6)
			break

		case 6:
			// clear the soldier lineup
			document.getElementById("rowofsix").innerHTML = ""
			// get the remainder amount and calculate the amount of rows that can be filled 
			// with four soldiers
			remainder = amount % 6
			rowsAmount = (amount - remainder) / 6

			// if the remainder is 1 set the "row of six" div to passed, if not set to failed
			if (remainder == 1) {
				// remove the remaining soldier if exists
				if (document.getElementById("remainderSoldierRowOfSix") !== null) {
					document.getElementById("remainderSoldierRowOfSix").remove()
				}
				if (document.getElementById("divrowofsix").classList.contains("bg-failed")) {
					document.getElementById("divrowofsix").classList.replace("bg-failed", "bg-passed")
				} else {
					document.getElementById("divrowofsix").classList.add("bg-passed")
				}

				// add the remainder soldier to the "row of six" div
				let remainderSoldierImg = document.createElement("img")
				remainderSoldierImg.setAttribute("src", "assets/img/soldier.png")
				remainderSoldierImg.setAttribute("class", "soldier")
				remainderSoldierImg.id = "remainderSoldierRowOfSix"
				document.getElementById("divrowofsix").appendChild(remainderSoldierImg)

			} else if(document.getElementById("remainderSoldierRowOfSix") == null) {
				// if the remainder soldier does not exist, set the background of the div to failed
				if (document.getElementById("divrowofsix").classList.contains("bg-passed")) {
					document.getElementById("divrowofsix").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowofsix").classList.add("bg-failed")
				}
				
			} else {
				// remove the remaining soldier if he exists and set the background of the div to failed
				if (document.getElementById("remainderSoldierRowOfSix").innerHTML !== null) {
					document.getElementById("remainderSoldierRowOfSix").remove()
				}
				if (document.getElementById("divrowofsix").classList.contains("bg-passed")) {
					document.getElementById("divrowofsix").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowofsix").classList.add("bg-failed")
				}
			}

			// create a div for each row
			for(i = 0; i < rowsAmount; i++) {
				let rowDiv = document.createElement("div")
				rowDiv.id = "soldierRow-6-" + i
				document.getElementById("rowofsix").appendChild(rowDiv)
				
				// add two soldiers to each div that represents a row
				k = 0
				while (k < 6) {
					let soldierImg = document.createElement("img")
					soldierImg.setAttribute("src", "assets/img/soldier.png")
					soldierImg.setAttribute("class", "soldier")
					document.getElementById("soldierRow-6-" + i).appendChild(soldierImg)
					k++
				}
			}

			// "automatically" change to the next line up
			placeSoldiers(currentNumber, 7)
			break
		case 7:
			// clear the soldier lineup
			document.getElementById("rowofseven").innerHTML = ""
			// get the remainder amount and calculate the amount of rows that can be filled
			// with seven soldiers
			remainder = amount % 7
			rowsAmount = (amount - remainder) / 7

			// if the remainder is 0 set the "row of seven" div to passed, if not set to failed
			if (remainder == 0) {
				if (document.getElementById("divrowofseven").classList.contains("bg-failed")) {
					document.getElementById("divrowofseven").classList.replace("bg-failed", "bg-passed")
				} else {
					document.getElementById("divrowofseven").classList.add("bg-passed")
				}
			
			} else {
				if (document.getElementById("divrowofseven").classList.contains("bg-passed")) {
					document.getElementById("divrowofseven").classList.replace("bg-passed", "bg-failed")
				} else {
					document.getElementById("divrowofseven").classList.add("bg-failed")	
				}
			}

			// create a div for each row
			for(i = 0; i < rowsAmount; i++) {
				let rowDiv = document.createElement("div")
				rowDiv.id = "soldierRow-7-" + i
				document.getElementById("rowofseven").appendChild(rowDiv)
				
				// add two soldiers to each div that represents a row
				k = 0
				while (k < 7) {
					let soldierImg = document.createElement("img")
					soldierImg.setAttribute("src", "assets/img/soldier.png")
					soldierImg.setAttribute("class", "soldier")
					document.getElementById("soldierRow-7-" + i).appendChild(soldierImg)
					k++
				}
			}	

			break

		default:
			return console.log("Error: Paramenter for the lineup must be 2-7")
	}
}