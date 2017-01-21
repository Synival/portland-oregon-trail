"use strict"

function Item (name, quantity, price, unit, units) {
   var that = this;

   // Functions.
   that.DisplayName = function (quantity) {
      if (quantity == null)
         quantity = that.quantity;
      if (quantity == 1 || that.units == null)
         return quantity + " " + that.unit;
      else if (that.units != null)
         return quantity + " " + that.units;
      else
         return "<error>";
   }

   // Initialization.
   that.name     = name;
   that.quantity = (quantity == null) ? 0 : quantity;
   that.unit     = unit;
   that.units    = units;
}

function ItemExists (name) {
   for (var i in gItemNames)
      if (gItemNames[i] == name)
         return true;
   console.error ("Item '" + name + "' does not exist.");
   return false;
}
