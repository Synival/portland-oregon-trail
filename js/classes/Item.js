"use strict"

function Item (player, name, quantity, unit, units) {
   var that = this;

   // Insert into our player's item list.
   that.player = player;
   player.items[name] = that;
   player.GetGame().ItemExistsNow (name);

   // Functions.
   that.DisplayName = function (quantity) {
      var unit = that.unit;
      if (quantity == null)
         quantity = that.quantity;
      var q = quantity.toFixed (1);
      if (q.charAt (q.length - 1) == '0')
         q = quantity.toFixed (0);
      if (q != '1' && that.units != null)
         unit = that.units;
      return q + " " + unit;
   };
   that.Change = function (amount) {
      if (amount == null || amount == 0)
         return;
      that.quantity += amount;
      that.OnChange ();
   };
   that.OnChange = function () {};

   // Initialization.
   that.name     = name;
   that.quantity = (quantity == null) ? 0 : quantity;
   that.unit     = unit;
   that.units    = units;
}
