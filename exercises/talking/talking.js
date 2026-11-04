// a says
let messagesA = ["how r u doing", "sorry to hear that", "what color would u like it to be", "so pick one",];
let counterA = 0

//b says
let messagesB = ["terrible", "color of the background sucks", "not this one",];
let counterB = 0


//when a is clicked
//a speaks when counterA = counterB
$("#character-a").click(function () {

    if (counterA == 3) {
        $("#answers").css("display", "flex");
        $("#chat").append("<p>jake: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB = 1000;
    }

    else if (counterA == counterB) {
        $("#chat").append("<p>jake: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
    }

});

//when b is clicked
$("#character-b").click(function () {

    if (counterB < counterA) {
        $("#chat").append("<p>finn: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;
    }

});

// make the color buttons work

$("#answer-green").click(function () {

    $("body").css("background-color", "green");

});

$("#answer-pink").click(function () {

    $("body").css("background-color", "pink");

});

