"use strict"

function Stat (player, name, value) {
   var that = this;

   // Add to player.
   that.player = player;
   player.stats[name] = that;
   player.GetGame().StatExistsNow (name);

   // Functions.
   that.Change = function (amount) {
      if (amount == null || amount == 0)
         return;
      that.value += amount;
      that.OnChange ();
   };
   that.OnChange = function () {};
   that.DisplayName = function () {
      var cap = that.name.charAt(0).toUpperCase() +
                that.name.slice(1);
      return cap + ": " + that.value.toFixed(0) + "%";
   };

   // Initialize.
   that.name  = name;
   that.value = value;
}
