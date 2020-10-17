// SETUP
// change to see what happens

// Vars

var player = {
  name: "Tester",
  discipline: "Craft",
  location: "",
  assets: ['one', 'two'],
  local: ['4', '6', '8', '10', '12', '20'],
  international: ['4', '6', '8', '10', '12', '20'],
  craft: ['4', '6', '8', '10', '12', '20'],
  academic: ['4', '6', '8', '10', '12', '20'],

}

var round = 0;

var months = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];

var currentMonth = months[0];
var monthCounter = 0;

function gameLoop(){
  $('.current-month').append(currentMonth);
  monthCounter += 1;
  currentMonth = months[monthCounter];

}


//RUN TIME
$(document).ready(function(){
  //run time starts
  console.log('document is ready and game.js loaded correctly')
  console.log(player);
  $('.card_name').append(player.name);

  // click next to do game loop
  $('#next').click(function(){
    gameLoop();
  });
  // run time end
});
