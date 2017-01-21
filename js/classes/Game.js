"use strict"

function Game () {
   var that = this;

   // Functions.
   that.GetPlayer = function () {
      return that.player;
   }
   that.StatExists = function (stat) {
      if (stat in that.stats)
         return true;
      console.error ("Stat '" + name + "' does not exist.");
      return false;
   }
   that.ItemExists = function (item) {
      if (item in that.items)
         return true;
      console.error ("Item '" + name + "' does not exist.");
      return false;
   }
   that.StatExistsNow = function (stat) {
      that.stats[stat] = true;
   }
   that.ItemExistsNow = function (item) {
      that.items[item] = true;
   }

   // Initialization.
   that.stats  = [];
   that.items  = [];
   that.stores = [];

   // Give ourself a player!
   new Player (that);
}
