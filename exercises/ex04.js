// clicker button

let counter = 0;

$("#little-button").click( function() {
  counter = counter + 3;
   $("#little-button") .html("I was clicked " + counter + " times") ;

});
