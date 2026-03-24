let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

let countDisplay = document.getElementById("result");
let attemptsDisplay = document.getElementById("attempts");

let checkBtn = document.getElementById("check");
let resetBtn = document.getElementById("reset");

checkBtn.addEventListener("click", function () {

    let userGuess = Number(document.getElementById("guess").value);

    if (attempts <= 0) {
        countDisplay.innerText = "Game Over!";
        return;
    }

    if (userGuess === randomNum) {
        countDisplay.innerText = "Correct!";
        checkBtn.disabled = true;
    }
    else if (userGuess > randomNum) {
        countDisplay.innerText = "Too high";
    }
    else {
        countDisplay.innerText = "Too low";
    }

    attempts--;
    attemptsDisplay.innerText = "Attempts left: " + attempts;

    if (attempts === 0 && userGuess !== randomNum) {
        countDisplay.innerText = "Game Over! Number was " + randomNum;
        checkBtn.disabled = true;
    }

});

resetBtn.addEventListener("click", function () {
    randomNum = Math.floor(Math.random() * 10) + 1;
    attempts = 5;

    document.getElementById("guess").value = "";
    countDisplay.innerText = "";
    attemptsDisplay.innerText = "Attempts left: 5";

    checkBtn.disabled = false;
});