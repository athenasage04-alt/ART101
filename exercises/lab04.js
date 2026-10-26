let count = 0;
let buttonCreature = {
    name: "jewel",
    species: "little squirrel",
    favoriteFood: "grass",
    moods: ["peeved", "gagged", "jolly", "sheepish",
        "spirited", "boggled"]
};

$("#needy-button").click(function () {

    count = count + 1;
    let arrayPosition = count - 1;
    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>you clicked me " + count + " times.</p>";

    message = message + "<p>my current mood is " + currentMood +
        ".</p>";
    message = message + "<p>my name is " + buttonCreature.name
        + ".</p>";
    message = message + "<p>i am a " + buttonCreature.species
        + ".</p>";
    message = message + "<p>my favorite food is " + buttonCreature.favoriteFood
        + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});
