function paintPage(color) {
    $("body").css("background-color", color);
}

paintPage("purple");

// the clicker button progrm 

// we create a variable named "count", the initia; value is 0

let count = 0;
let colorsCount = 0;


// an indexed array of data
let colors = ["green", "orange", "brown", "yellow", "gold",
    "purple", "red", "pink"];

let buttonText = "";

// we listend for when an htnl element with id "needy-button" is clicked and then...

$("#little-button").click(function () {

    // what to do when the button is clicked
    // first, set a new value for "count", which is the current value + 1

    count = count + 1;


    console.log(count);
    console.log(colors[colorsCount]);

    // now let's find our button and set a new text for it

    buttonText = "I was kicked " + count + " times and color is " + colors[colorsCount];

    $("#little-button").html(buttonText);

    paintPage(colors[colorsCount]);
    //$("body").css("background-color", colors[colorsCount]);

    //$("body").append(" <img width='50' src='" + colors[colorsCount] + ".jpg'>");

    colorsCount = colorsCount + 1;

    if ((count >= 5) && (count <= 12)) {
        $("#little-button").after("<p>my mood is... agitated</p>");
    }
    else if (count >= 13) {
        $("#little-button").after("<p>my mood is... really agitated</p>");
    }
    else if (count <= 4) {
        $("#little-button").after("<p>my mood is... fine...</p>");
    }



});

$("#green").click(function () {
    console.log("green was clicked");
    paintPage("green");
});

$("#orange").click(function () {
    console.log("orange was clicked");
    paintPage("orange");
});

$("#purple").click(function () {
    console.log("purple was clicked");
    paintPage("purple");
});


