"use strict"

function Item (name, quantity, price, unit, units) {
   var that = this;

   // Functions.
   that.DisplayName = function (quantity) {
      var unit = that.unit;
      if (quantity == null)
         quantity = that.quantity;
      if (quantity != 1 && that.units != null)
         unit = that.units;
      var q = quantity.toFixed (1);
      if (q.charAt (q.length - 1) == '0')
         q = quantity.toFixed (0);
      return q + " " + unit;
   }
   that.Change = function (amount) {
      that.quantity += amount;
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
