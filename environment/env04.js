

let messagesA = ["yay! click on the rainbow caption for ur first fact", "2",];
let counterA = 0
// worm says would you like to learn more about my environment? y/n
$("#worm1-button").click(function () {
    $("#output2").html(messagesA[counterA]);
    counterA = counterA + 1;
});

$("#worm2-button").click(function () {
    let message = "<p> WRONG</p>";
    $("#output3").html(message);
});
//learning more
$("#rainbow-button").click(function () {
    let message = "<p> i live in the sky with the sun beaming on the beings below. watch out for me worm, you'll feel better under the soil.</p> + ";
    $("#output1").html(message);
});

function askComply(whatComply) {
    let userComply = prompt("comply?");

    if (userComply == whatComply) {
        $("#output4").html("mwahaha");
    }
    else {
        $("#output4").html("ur craaazy");
    }

}

$("#comply-button").click(function () {
    askComply("comply");
});



