var userButton = document.querySelector("#usr-button");
var showSeries = document.querySelector("#show-series");
var showRandom = document.querySelector("#show-random");
var firstNumber = document.querySelector("#first-number");
var secondNumber = document.querySelector("#second-number");
var thirdNumber = document.querySelector("#third-number");
var scoreCheck = document.querySelector("#score-check");
var resultButton = document.querySelector("#result-button");


var Random;
userButton.addEventListener('click', clickHandler);

function clickHandler() {
    var randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
        case 0: {
            showSeries.innerHTML = "4,6,8,10,12";
            Random = Math.floor(Math.random() * 100)+50 ;
            showRandom.innerHTML = Random;
            firstFunction();
            break;
        }
        case 1: {
            showSeries.innerHTML = "2,6,18,54,324";
            Random = Math.floor(Math.random() * 1000)+350 ;
            showRandom.innerHTML = Random;
            secondFunction();
            break;
        }
        case 2: {
            showSeries.innerHTML = "2,8,32,128,512";
            Random = Math.floor(Math.random() * 1000)+550;
            showRandom.innerHTML = Random;
            thirdFunction();
            break;
        }
        case 3: {
            showSeries.innerHTML = "2,20,182,1640,14762";
            Random = Math.floor(Math.random() * 10);
            showRandom.innerHTML = Random;
            fourthFunction();
            break;
        }
        case 4: {
            showSeries.innerHTML = "100,400,800,1300,1800";
            Random = Math.floor(Math.random() * 100)+50;
            showRandom.innerHTML = Random;
            fifthFunction();
            break;
        }

    }

}

function firstFunction() {
    scoreCheck.addEventListener('click', firstHandler);
}

function firstHandler() {
    var firstUserNumber = Number(firstNumber.value);
    var secondUserNumber = Number(secondNumber.value);
    var thirdUserNumber = Number(thirdNumber.value);
    var testOne = Random + 2;
    var testTwo = Random + 4;
    var testThree = Random + 6;
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultButton.innerHTML = "✨Excellent✨ "
    } else {
        resultButton.innerHTML = "☹️Try Again☹️ "
    }
}

function secondFunction() {
    scoreCheck.addEventListener('click', secondHandler);
}

function secondHandler() {
    var firstUserNumber = Number(firstNumber.value);
    var secondUserNumber = Number(secondNumber.value);
    var thirdUserNumber = Number(thirdNumber.value);
    var testOne = Random * 3;
    var testTwo = testOne * 3;
    var testThree = testTwo * 3;
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultButton.innerHTML = "✨Excellent✨ "
    } else {
        resultButton.innerHTML = "☹️Try Again☹️ "
    }
}

function thirdFunction() {
    scoreCheck.addEventListener('click', thirdHandler);
}

function thirdHandler() {
    var firstUserNumber = Number(firstNumber.value);
    var secondUserNumber = Number(secondNumber.value);
    var thirdUserNumber = Number(thirdNumber.value);
    var testOne = Random * 4;
    var testTwo = testOne * 4;
    var testThree = testTwo * 4;
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultButton.innerHTML = "✨Excellent✨ "
    } else {
        resultButton.innerHTML = "☹️Try Again☹️ "
    }
}

function fourthFunction() {
    scoreCheck.addEventListener('click', fourthHandler);
}

function fourthHandler() {
    var firstUserNumber = Number(firstNumber.value);
    var secondUserNumber = Number(secondNumber.value);
    var thirdUserNumber = Number(thirdNumber.value);
    var testOne = (Random * 9) + 2;
    var testTwo = (testOne * 9) + 2;
    var testThree = (testTwo * 9) + 2;
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultButton.innerHTML = "✨Excellent✨ "
    } else {
        resultButton.innerHTML = "☹️Try Again☹️ "
    }
}

function fifthFunction() {
    scoreCheck.addEventListener('click', fifthHandler);
}

function fifthHandler() {
    var firstUserNumber = Number(firstNumber.value);
    var secondUserNumber = Number(secondNumber.value);
    var thirdUserNumber = Number(thirdNumber.value);
    var testOne = Random + 300;
    var testTwo = testOne + 400;
    var testThree = testTwo + 500;
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultButton.innerHTML = "✨Excellent✨ "
    } else {
        resultButton.innerHTML = "☹️Try Again☹️ "
    }
}