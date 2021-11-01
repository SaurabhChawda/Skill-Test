var userButton = document.querySelector("#usr-button");
var showSeries = document.querySelector("#show-series");
var showRandom = document.querySelector("#show-random");
var firstNumber = document.querySelector("#first-number");
var secondNumber = document.querySelector("#second-number");
var thirdNumber = document.querySelector("#third-number");
var scorebutton = document.querySelector("#score-button");
var resultShow = document.querySelector("#result-show");
var Random;
var firstUserNumber;
var secondUserNumber;
var thirdUserNumber;
scorebutton.disabled = true;
userButton.addEventListener('click', clickHandler);

function clickHandler() {
    var randomNumber = Math.floor(Math.random() * 5);
    firstNumber.value = "";
    secondNumber.value = "";
    thirdNumber.value = "";
    resultShow.innerHTML = "";
    firstNumber.style.backgroundColor="";
    secondNumber.style.backgroundColor="";
    thirdNumber.style.backgroundColor="";
    switch (randomNumber) {
        case 0: {

            showSeries.innerHTML = "4,6,8,10,12";
            Random = Math.floor(Math.random() * 100) + 50;
            showRandom.innerHTML = Random;
            firstFunction();
            break;
        }
        case 1: {
            showSeries.innerHTML = "2,6,18,54,324";
            Random = Math.floor(Math.random() * 1000) + 350;
            showRandom.innerHTML = Random;
            secondFunction();
            break;
        }
        case 2: {
            showSeries.innerHTML = "2,8,32,128,512";
            Random = Math.floor(Math.random() * 1000) + 550;
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
            showSeries.innerHTML = "100,400,800,1300,1900";
            Random = Math.floor(Math.random() * 100) + 50;
            showRandom.innerHTML = Random;
            fifthFunction();
            break;
        }

    }

}
function firstFunction() {
    scorebutton.disabled = false;
    scorebutton.addEventListener('click', firstHandler);
}
function firstHandler() {
    
    firstUserNumber = Number(firstNumber.value);
    secondUserNumber = Number(secondNumber.value);
    thirdUserNumber = Number(thirdNumber.value);
    var testOne = Random + 2;
    var testTwo = Random + 4;
    var testThree = Random + 6;
    var score = 0;
    if (testOne === firstUserNumber) {
        firstNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        firstNumber.style.backgroundColor="Red"
    }
    if (testTwo === secondUserNumber) {
        secondNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        secondNumber.style.backgroundColor="Red"
    }
    if (testThree === thirdUserNumber) {
        thirdNumber.style.backgroundColor="rgb(50, 245, 76)"   
    }else{
        thirdNumber.style.backgroundColor="Red"
    }
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultShow.innerHTML = "✨Excellent✨"
        scoreShow.innerHTML = "Your Score is " + score
    } else {
        resultShow.innerHTML = "☹️You should work on Logic☹️ "
        scoreShow.innerHTML = "Your Score is " + score
    }
}
function secondFunction() {
    scorebutton.disabled = false;
    scorebutton.addEventListener('click', secondHandler);
}
function secondHandler() {
    firstUserNumber = Number(firstNumber.value);
    secondUserNumber = Number(secondNumber.value);
    thirdUserNumber = Number(thirdNumber.value);
    
    var testOne = Random * 3;
    var testTwo = testOne * 3;
    var testThree = testTwo * 3;
    var score = 0;
    if (testOne === firstUserNumber) {
        firstNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        firstNumber.style.backgroundColor="Red"
    }
    if (testTwo === secondUserNumber) {
        secondNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        secondNumber.style.backgroundColor="Red"
    }
    if (testThree === thirdUserNumber) {
        thirdNumber.style.backgroundColor="rgb(50, 245, 76)"   
    }else{
        thirdNumber.style.backgroundColor="Red"
    }
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultShow.innerHTML = "✨Excellent✨"
        scoreShow.innerHTML = "Your Score is " + score
    } else {
        resultShow.innerHTML = "☹️You should work on Logic☹️ "
        scoreShow.innerHTML = "Your Score is " + score
    }
}
function thirdFunction() {
    scorebutton.disabled = false;
    scorebutton.addEventListener('click', thirdHandler);
}
function thirdHandler() {
    firstUserNumber = Number(firstNumber.value);
    secondUserNumber = Number(secondNumber.value);
    thirdUserNumber = Number(thirdNumber.value);
    
    var testOne = Random * 4;
    var testTwo = testOne * 4;
    var testThree = testTwo * 4;
    var score = 0;
    if (testOne === firstUserNumber) {
        firstNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        firstNumber.style.backgroundColor="Red"
    }
    if (testTwo === secondUserNumber) {
        secondNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        secondNumber.style.backgroundColor="Red"
    }
    if (testThree === thirdUserNumber) {
        thirdNumber.style.backgroundColor="rgb(50, 245, 76)"   
    }else{
        thirdNumber.style.backgroundColor="Red"
    }
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultShow.innerHTML = "✨Excellent✨"
        scoreShow.innerHTML = "Your Score is " + score
    } else {
        resultShow.innerHTML = "☹️You should work on Logic☹️ "
        scoreShow.innerHTML = "Your Score is " + score
    }
}
function fourthFunction() {
    scorebutton.disabled = false;
    scorebutton.addEventListener('click', fourthHandler);
}
function fourthHandler() {
    firstUserNumber = Number(firstNumber.value);
    secondUserNumber = Number(secondNumber.value);
    thirdUserNumber = Number(thirdNumber.value);
    
    var testOne = (Random * 9) + 2;
    var testTwo = (testOne * 9) + 2;
    var testThree = (testTwo * 9) + 2;
    var score = 0;
    if (testOne === firstUserNumber) {
        firstNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        firstNumber.style.backgroundColor="Red"
    }
    if (testTwo === secondUserNumber) {
        secondNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        secondNumber.style.backgroundColor="Red"
    }
    if (testThree === thirdUserNumber) {
        thirdNumber.style.backgroundColor="rgb(50, 245, 76)"   
    }else{
        thirdNumber.style.backgroundColor="Red"
    }
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultShow.innerHTML = "✨Excellent✨"
        scoreShow.innerHTML = "Your Score is " + score
    } else {
        resultShow.innerHTML = "☹️You should work on Logic☹️ "
        scoreShow.innerHTML = "Your Score is " + score
    }

    function fifthFunction() {
        scorebutton.addEventListener('click', fifthHandler);
    }
}
function fifthFunction() {
    scorebutton.disabled = false;
    scorebutton.addEventListener('click', fifthHandler);
}
function fifthHandler() {
    firstUserNumber = Number(firstNumber.value);
    secondUserNumber = Number(secondNumber.value);
    thirdUserNumber = Number(thirdNumber.value);
    
    var testOne = Random + 300;
    var testTwo = testOne + 400;
    var testThree = testTwo + 500;
    var score = 0;
    if (testOne === firstUserNumber) {
        firstNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        firstNumber.style.backgroundColor="Red"
    }
    if (testTwo === secondUserNumber) {
        secondNumber.style.backgroundColor="rgb(50, 245, 76)"
    }else{
        secondNumber.style.backgroundColor="Red"
    }
    if (testThree === thirdUserNumber) {
        thirdNumber.style.backgroundColor="rgb(50, 245, 76)"   
    }else{
        thirdNumber.style.backgroundColor="Red"
    }
    if (testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber) {
        resultShow.innerHTML = "✨Excellent✨"
        scoreShow.innerHTML = "Your Score is " + score
    } else {
        resultShow.innerHTML = "☹️You should work on Logic☹️ "
        scoreShow.innerHTML = "Your Score is " + score
    }
}