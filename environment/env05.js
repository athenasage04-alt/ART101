// worm says would you like to learn more about my environment? y/n
let following = false;
$("#worm1-button").click(function () {
    let message = "<p> yay! click on the rainbow caption for ur first fact </p>"
    $("#output2").html(message);
    output2.classList.toggle('hidden');
});

$("#worm2-button").click(function () {
    let message = "<p> WRONG</p>";
    $("#output3").html(message);
    output3.classList.toggle('hidden');
});
//learning more
$("#rainbow-button").click(function () {
    let message = "<p> i live in the sky with the sun beaming on the beings below. watch out for me worm, you'll feel better under the soil. hover below to continue.</p>";
    $("#output1").html(message);
    output1.classList.toggle('hidden');
    complyButton.classList.toggle('invisible');
});

function askComply(whatComply) {
    let userComply = prompt(" type 'comply' to comply");

    if (userComply == whatComply) {
        $("#output4").html("mwahaha now only the rose and the pepper get to enjoy my beauty!");
        //rose and pepper grow
    }
    else {
        $("#output4").html("rainbow: you crazy little worm what are we gonna do with you! worm: i can do whatever i want! press 'space' to make me glow!");
        //worm now moves when you click on it, move to top of the screen to spite the rainbow
    }

}

$("#complyButton").click(function () {
    askComply("comply");
});

$("#worm").click(function () {

});
$(document).keydown(function (event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();

        following = !following;
        $("#worm").toggleClass("following");

        if (following === true) {
            $("#status").text("the worm is glowing!");
        } else {
            $("#status").text("the worm stopped glowing");
        }
    }
});


