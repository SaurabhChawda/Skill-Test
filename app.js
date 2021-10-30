var userButton = document.querySelector("#usr-button")
var showSeries = document.querySelector("#show-series")
var showRandom = document.querySelector("#show-random")
var firstNumber = document.querySelector("#first-number")
var secondNumber = document.querySelector("#second-number")
var thirdNumber = document.querySelector("#third-number")
var scoreCheck = document.querySelector("#score-check")

userButton.addEventListener('click',clickHandler)
function clickHandler(){
    var randomNumber = Math.floor(Math.random() * 5)
    switch(0){
        case 0 : {
            showSeries.innerHTML = "4,6,8,10,12";
            firstFunction();
            break;
        }
        case 1 : {
            showSeries.innerHTML = "2,6,18,54,324"
            secondFunction();
            break;
        }     
        case 2 : {
            showSeries.innerHTML = "2,8,32,128,512"
            thirdFunction();
            break;
        } 
        case 3 : {
            showSeries.innerHTML = "2,20,182,1640,14762"
            fourthFunction();
            break;
        }  
        case 4 : {
            showSeries.innerHTML = "100,400,800,1300,1800,"
            fifthFunction();
            break;
        } 
      
    }
}
function firstFunction(){
    var firstRandom = Math.floor(Math.random() * 10)
    showRandom.innerHTML = firstRandom;
    scoreCheck.addEventListener('click' ,firstHandler(firstRandom))
}
function firstHandler(firstRandom){
    var firstUserNumber = Number(firstNumber.value)
    var secondUserNumber = Number(secondNumber.value)
    var thirdUserNumber = Number(thirdNumber.value)
    var testOne = firstRandom + 2 ;
    var testTwo = firstRandom + 4 ;
    var testThree = firstRandom + 6;

    if(testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber){
        console.log('Won')
    }else{
         console.log('loose')
     }
    }
function secondFunction(){
    var secondRandom = Math.floor(Math.random() * 10)
    showRandom.innerHTML = secondRandom;
    scoreCheck.addEventListener('click' ,secondHandler(secondRandom))
}
function secondHandler(secondRandom){
    var firstUserNumber = Number(firstNumber.value)
    var secondUserNumber = Number(secondNumber.value)
    var thirdUserNumber = Number(thirdNumber.value)
    var testOne = secondRandom * 3 ;
    var testTwo = testOne * 3 ;
    var testThree = testTwo * 3;

    if(testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber){
        console.log('won')
    }else{
         console.log('loose')
     }
    }

function thirdFunction(){
    var thirdRandom = Math.floor(Math.random() * 10)
    showRandom.innerHTML = thirdRandom;
    scoreCheck.addEventListener('click' ,thirdHandler(thirdRandom))
}
function thirdHandler(thirdRandom){
    var firstUserNumber = Number(firstNumber.value)
    var secondUserNumber = Number(secondNumber.value)
    var thirdUserNumber = Number(thirdNumber.value)
    var testOne = thirdRandom *4 ;
    var testTwo = testOne *4 ;
    var testThree = testTwo *4;

    if(testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber){
        console.log('Won')
    }else{
         console.log('loose')
     }
    }
function fourthFunction(){
    var fourthRandom = Math.floor(Math.random() * 10)
    showRandom.innerHTML = fourthRandom;
    scoreCheck.addEventListener('click' ,fourthHandler(fourthRandom))
}
function fourthHandler(fourthRandom){
    var firstUserNumber = Number(firstNumber.value)
    var secondUserNumber = Number(secondNumber.value)
    var thirdUserNumber = Number(thirdNumber.value)
    var testOne = (fourthRandom *9)+2 ;
    var testTwo = (testOne *9)+2;
    var testThree = (testTwo *9)+2;

    if(testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber){
        console.log('Won')
    }else{
         console.log('loose')
     }
    }

function fifthFunction(){
    var fifthRandom = Math.floor(Math.random() * 10)
    showRandom.innerHTML = fifthRandom;
    scoreCheck.addEventListener('click' ,fifthHandler(fifthRandom))
}
function fifthHandler(fifthRandom){
    var firstUserNumber = Number(firstNumber.value)
    var secondUserNumber = Number(secondNumber.value)
    var thirdUserNumber = Number(thirdNumber.value)
    var testOne = fifthRandom + 300 ;
    var testTwo = testOne + 400 ;
    var testThree = testTwo + 500;

    if(testOne === firstUserNumber && testTwo === secondUserNumber && testThree === thirdUserNumber){
        console.log('Won')
    }else{
         console.log('loose')
     }
    }
