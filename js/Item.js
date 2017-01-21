"use strict"

function Item (name, quantity, price, unit, units) {
   // Functions.
   this.DisplayName = function() {
      if (this.quantity == 1 || this.units == null)
         return this.quantity + " " + this.unit;
      else if (this.units != null)
         return this.quantity + " " + this.units;
      else
         return "<error>";
   }

   // Initialization.
   this.name     = name;
   this.quantity = (quantity == null) ? 0 : quantity;
   this.unit     = unit;
   this.units    = units;
}

function ItemDoesntExist (name) {
   for (var i in gItemNames)
      if (gItemNames[i] == name)
         return true;
   console.error ("Item '" + name + "' does not exist.");
   return false;
}
