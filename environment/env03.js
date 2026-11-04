// worm says would you like to learn more about my environment? y/n
let count = 0
$("#worm1-button").click(function () {
    let message = "<p> yay! click on the rainbow caption for ur first fact</p>";
    $("#output2").html(message);
});
$("#worm2-button").click(function () {
    let message = "<p> WRONG</p>";
    $("#output3").html(message);
});
//learning more
$("#rainbow-button").click(function () {
    count = count + 1
    let message = "<p> i live in the sky with the sun beaming on the beings below. watch out for me worm, you'll feel better under the soil.</p>";
    if (count <= 1) {

        $("#output1").html(message);
    }
    if (count = 2) {
        $("#output1").html(message);
    }
});
