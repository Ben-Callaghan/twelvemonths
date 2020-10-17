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

// for (i=0, i<months.length, i++){
//
// }

//Functions
function gameLoop(){
// is it the first round y/n
//y: prompt asset and discipline selection
//n: what round is it?

//show available cards
//player picks card
// dice role based on player stats

//did they get it?
//y: congrats!
//n: oh no! we had 9848483 applications, and on this occasion you were unsuccessful. We encourage you to try again next year and hope you'll sign up to our mailing list and follow us on facebook

//Calculate effect of success/failure

// does the success/failure prompt any other choices?
//y: n:
// great! Round over

//was that the last round?
//y: n:
}


//RUN TIME
$(document).ready(function(){
  console.log('document is ready and game.js loaded correctly')
  console.log(player);
  $('.card_name').append(player.name);
});
