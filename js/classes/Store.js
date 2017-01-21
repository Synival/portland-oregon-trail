"use strict"

function Store(name, items) {
   var that = this;

   // Functions.
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
   }
   that.NewItem = function (name, quantity) {
      that.items[name] = new StoreItem (name, quantity);
   }

   // Initialization.
   that.name  = name;
   that.items = [];
}
