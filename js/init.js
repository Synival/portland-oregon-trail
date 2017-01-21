"use strict"

window.onload = function() {
   // Start a new game.
   gGame = new Game();

   // Create a global player object.
   var player = gGame.GetPlayer();
   player.LogItems ();

   // Create a store with stuff.
   var myStore = new Store (gGame, "Pioneer Square");
   new StoreItem (myStore, "coffee",   3),
   new StoreItem (myStore, "beer",     5),
   new StoreItem (myStore, "food",     8),
   new StoreItem (myStore, "raingear", 25)
   myStore.LogItems ();

   // Make some purchases.
   player.Purchase (myStore, "coffee",   3);
   player.Purchase (myStore, "beer",     3);
   player.Purchase (myStore, "food",     5);
   player.Purchase (myStore, "raingear", 1);
   console.log ("");

   // Check new inventory.
   player.LogItems ();
   player.LogStats ();

   // Simulate gameplay.
   player.Tick (5.76);
   player.LogItems ();
   player.LogStats ();
};
