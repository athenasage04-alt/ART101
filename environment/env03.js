// worm says would you like to learn more about my environment? y/n
$("#worm1-button").click(function () {
    let message = "<p> yay! click on the rainbow caption for ur first fact</p>";
    $("#output2").html(message);
});
$("#worm2-button").click(function () {
    let message = "<p> WRONG</p>";
    $("#output3").html(message);
});
$("#rainbow-button").click(function () {
    let message = "<p> i live in the sky with the sun beaming on the beings below. watch out for me worm, you'll feel better under the soil.</p>";
    $("#output1").html(message);
});
