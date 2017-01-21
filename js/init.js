"use strict"

// Our global variables.
var gPlayer = null;

window.onload = function() {
   // Create a global player object.
   gPlayer = new Player ();
   gPlayer.LogItems ();

   // Create a store with stuff.
   var myStore = new Store ("Pioneer Square");
   myStore.NewItem ("coffee",   3),
   myStore.NewItem ("beer",     5),
   myStore.NewItem ("food",     8),
   myStore.NewItem ("raingear", 25)
   myStore.LogItems ();

   // Make some purchases.
   gPlayer.Purchase (myStore, "coffee",   10);
   gPlayer.Purchase (myStore, "food",     6);
   gPlayer.Purchase (myStore, "raingear", 5);
   console.log ("");

   // Check new inventory.
   gPlayer.LogItems ();
   gPlayer.LogStats ();

   // Simulate gameplay.
   gPlayer.Tick (5.76);
   gPlayer.LogItems ();
   gPlayer.LogStats ();
};
