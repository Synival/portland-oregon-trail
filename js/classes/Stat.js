"use strict"

function Stat (name, value) {
   var that   = this;
   that.name  = name;
   that.value = value;
}

function StatExists (name) {
   for (var i in gStatNames)
      if (gStatNames[i] == name)
         return true;
   return false;
}
