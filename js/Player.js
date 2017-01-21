"use strict"

function Player() {
   // Functions.
   this.NewItem = function (name, quantity, unit, units) {
      if (!ItemDoesntExist (name))
         return;
      this.items.push (new Item (name, quantity, unit, units));
   }
   this.Purchase = function (store, item) {
   }

   // Initialize our items.
   this.items = [];
   this.NewItem ("money",    100, "dollar", "dollars");
   this.NewItem ("coffee",   0,   "cup of coffee", "cups of coffee");
   this.NewItem ("beer",     0,   "pint of beer",  "pints of beer");
   this.NewItem ("raingear", 0,   "piece of raingear", "pieces of raingear");
   this.NewItem ("food",     0,   "meal", "meals");

   // Our initial stats.
   this.Name = "Nameless";
   this.Morale = 100;
   this.Energy = 100;
   this.Health = 100;
}
