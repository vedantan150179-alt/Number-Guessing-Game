let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

let countDisplay = document.getElementById("result");
let attemptsDisplay = document.getElementById("attempts");

let checkBtn = document.getElementById("check");
let resetBtn = document.getElementById("reset");
let win_sound= document.getElementById("win_sound");
let lose_sound = document.getElementById("lose_sound")

checkBtn.addEventListener("click", function () {

    let userGuess = Number(document.getElementById("guess").value);

    if (attempts <= 0) {
        countDisplay.innerText = "Game Over!";
        return;
        lose_sound.play();
    }

    if (userGuess === randomNum) {
        countDisplay.innerText = "Correct!";
        
        checkBtn.disabled = true;
        win_sound.play();
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
    randomNum = Math.floor(Math.random() * 100) + 1;
    attempts = 10;

    document.getElementById("guess").value = "";
    countDisplay.innerText = "";
    attemptsDisplay.innerText = "Attempts left: 10";

    checkBtn.disabled = false;
});