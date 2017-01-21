"use strict"

// Our global variables.
var gPlayer = null;

window.onload = function() {
   gPlayer = new Player ();

   console.log (JSON.stringify (gPlayer));
   for (var i in gPlayer.items) {
      var item = gPlayer.items[i];
      console.log ("You have: " + item.DisplayName ());
   }
};
