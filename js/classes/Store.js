"use strict"

function Store (game, name) {
   var that = this;

   // Add to our store list.
   that.game = game;
   game.stores.push (that);

   // Functions.
   that.GetGame = function () {
      return game;
   };
   that.GetItem = function (name) {
      if (!(name in that.items))
         return null;
      return that.items[name];
   };
   that.LogItems = function () {
      console.log ("Store '" + that.name + "' items:");
      for (var i in that.items) {
         var item = that.items[i];
         console.log ("   $" + item.price + ": " + item.name);
      }
      console.log ("");
   };

   // Initialization.
   that.name  = name;
   that.items = [];
}
