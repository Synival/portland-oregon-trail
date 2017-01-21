"use strict"

function Stat (name, value) {
   var that = this;

   // Functions.
   that.Change = function (amount) {
      that.value += amount;
   };
   that.DisplayName = function () {
      var cap = that.name.charAt(0).toUpperCase() +
                that.name.slice(1);
      return cap + ": " + that.value.toFixed(0) + "%";
   };

   // Initialize.
   that.name  = name;
   that.value = value;
}

function StatExists (name) {
   for (var i in gStatNames)
      if (gStatNames[i] == name)
         return true;
   return false;
}
