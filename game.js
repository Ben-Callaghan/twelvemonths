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

//var months = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];


//Functions
function gameLoop(){

}


//RUN TIME
$(document).ready(function(){
  console.log('document is ready and game.js loaded correctly')
  console.log(player);
  $('.card_name').append(player.name);
});
