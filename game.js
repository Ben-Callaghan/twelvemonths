// SETUP
// change to see what happens

// Vars

var player = {
  name: "Tester",
  discipline: "Craft",
  location: "",
  assets: ['one', 'two']
}

var round = 0;

var months = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];

var currentMonth = months[0];
console.log(months[0]);
console.log(currentMonth);

//Functions
function gameLoop(){
  $('.current-month').append(currentMonth);
  //currentMonth = the next one
  
}


//RUN TIME
$(document).ready(function(){
  console.log('document is ready and game.js loaded correctly')
  console.log(player);
  $('.card_name').append(player.name);

  // click next to do game loop
  $('#next').click(function(){
    gameLoop();
  });
});
