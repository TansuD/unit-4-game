$(document).ready(function () {

    var computerNumber;

    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    var number1;
    var number2;
    var number3;
    var number4;

    function randomNumber() {
        return Math.floor(Math.random() * 12 + 1)
    }

    function reset() {
        playerTotal = 0;
        computerNumber = Math.floor(Math.random() * 120 + 19);
        number1 = randomNumber();
        number2 = randomNumber();
        number3 = randomNumber();
        number4 = randomNumber();
        console.log("computerNumber", computerNumber);
        console.log("playerTotal", playerTotal);
        console.log("resent number one", number1);
    }

    function displayScore(playerTotal) {
    }

    reset();

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#computerScore").text(computerNumber);
    $("#totalScore").text(playerTotal);



    $(".green-gem").click(function () {
        console.log("number one:" + number1);
        console.log('playerTotal', playerTotal)
        let newTotal = playerTotal + number1;
        playerTotal = newTotal;
        $("#totalScore").text(newTotal);
        displayScore(playerTotal);
        console.log("Player's new total: " + newTotal);
        if (playerTotal === computerNumber) {
            wins++;
        }
        else if (playerTotal > computerNumber) {
            alert("You lose!");
            reset();
            losses++;
        }
    })


    $(".purple-gem").click(function () {
        let newTotal = playerTotal + number2;
        playerTotal = newTotal;
        $("#totalScore").text(playerTotal);
        displayScore(playerTotal);
        console.log("Player's new total: " + playerTotal);

        if (playerTotal === computerNumber) {
            wins++;
        }
        else if (playerTotal > computerNumber) {
            alert("You lose!");
            reset();
            losses++;
        }
    })



    $(".blue-gem").click(function () {
        let newTotal = playerTotal + number3;
        playerTotal = newTotal;
        $("#totalScore").text(playerTotal);
        displayScore(playerTotal);
        console.log("Player's new total: " + playerTotal);

        if (playerTotal === computerNumber) {
            wins++;
        }
        else if (playerTotal > computerNumber) {
            alert("You lose!");
            reset();
            losses++;
        }
    })

    $(".red-gem").click(function () {
        let newTotal = playerTotal + number4;
        playerTotal = newTotal;
        $("#totalScore").text(playerTotal);
        displayScore(playerTotal);
        console.log("Player's new total: " + playerTotal);

        if (playerTotal === computerNumber) {
            wins++;
        }
        else if (playerTotal > computerNumber) {
            alert("You lose!");
            reset();
            losses++;
        }
    })

})

