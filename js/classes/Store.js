"use strict"

function Store(name, items) {
   var that = this;

   // Functions.
   that.GetItem = function (name) {
      for (var i in that.items)
         if (that.items[i].name == name)
            return that.items[i];
      return null;
   };
   that.LogItems = function () {
      console.log ("Store '" + that.name + "' items:");
      for (var i in that.items) {
         var item = that.items[i];
         console.log ("   $" + item.price + ": " + item.name);
      }
      console.log ("");
   }

   // Initialization.
   that.name  = name;
   that.items = items;
}
