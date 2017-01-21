"use strict"

// Our global variables.
var gPlayer = null;

window.onload = function() {
   // Create a global player object.
   gPlayer = new Player ();
   gPlayer.LogItems ();

   // Create a store with stuff.
   var myStore = new Store ("Pioneer Square", [
      new StoreItem ("coffee",   3),
      new StoreItem ("beer",     5),
      new StoreItem ("food",     8),
      new StoreItem ("raingear", 25)
   ]);
   myStore.LogItems ();

   // Make some purchases.
   gPlayer.Purchase (myStore, "coffee",   10);
   gPlayer.Purchase (myStore, "food",     6);
   gPlayer.Purchase (myStore, "raingear", 5);
   console.log ("");

   // Check new inventory.
   gPlayer.LogItems ();
};
