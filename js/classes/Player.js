"use strict"

function Player() {
   var that = this;

   // Functions.
   that.NewItem = function (name, quantity, unit, units) {
      if (!ItemExists (name))
         return;
      that.items[name] = new Item (name, quantity, unit, units);
   };
   that.NewStat = function (name, value) {
      if (!StatExists (name))
         return;
      that.stats[name] = new Stat (name, value);
   }
   that.Purchase = function (store, name, quantity) {
      // Get our own items and the store items.
      var pItem = that.GetItem (name);
      if (pItem == null) {
         console.error ("No item '" + name + "' for player.");
         return false;
      }
      var sItem = store.GetItem (name);
      if (sItem == null) {
         console.error ("No item '" + name + "' for store.");
         return false;
      }

      // Don't allow if we don't have enough money.
      var total = quantity * sItem.price;
      var money = that.GetMoney ();
      if (total > money) {
         console.error ("Not enough money to purchase " +
            pItem.DisplayName (quantity) +
            " ($" + money + " - $" + total + ")");
         return false;
      }

      // Modify money and give us more of the item.
      console.log ("Purchased " + pItem.DisplayName (quantity) +
                   " for $" + total + ".");
      that.ChangeMoney (-total);
      that.ChangeItem (pItem, quantity);
      return true;
   };
   that.GetItem = function (name) {
      if (!(name in that.items))
         return null;
      return that.items[name];
   };
   that.GetStat = function (name) {
      if (!(name in that.stats))
         return null;
      return that.stats[name];
   };
   that.ChangeItem = function (name, amount) {
      var item;
      if (name instanceof Item)
         item = name;
      else
         item = that.GetItem (name);
      if (item == null)
         return false;
      item.Change (amount);
      return true;
   };
   that.GetMoney = function () {
      return that.GetItem ("money").quantity;
   }
   that.ChangeMoney = function (amount) {
      return that.ChangeItem ("money", amount);
   }
   that.LogItems = function () {
      console.log ("Your items:");
      for (var i in that.items) {
         var item = that.items[i];
         console.log ("   " + item.DisplayName ());
      }
      console.log ("");
   };
   that.LogStats = function () {
      console.log ("Your stats:");
      for (var i in that.stats) {
         var stat = that.stats[i];
         console.log ("   " + stat.DisplayName ());
      }
      console.log ("");
   };
   that.Tick = function (hours) {
      that.DrainStatFromItem ("energy", "coffee",   8.00, hours, 10.00);
      that.DrainStatFromItem ("morale", "beer",     4.00, hours, 10.00);
      that.DrainStatFromItem ("health", "raingear", null, hours, 20.00);
      that.DrainStatFromItem ("health", "food",     6.00, hours, 10.00);
   };
   that.DrainStatFromItem = function (statName, itemName, rate, hours, scale) {
      var stat = that.GetStat (statName);
      var item = that.GetItem (itemName);

      // If we have none of that item, we automatically lose from our stat.
      if (item.value == 0) {
         stat.Change (hours * scale);
         return;
      }

      // If there's no consumption rate, do nothing if we have that item.
      if (rate == null)
         return;

      // If we have enough of that item to reduce it, do it now.
      var loss = hours / rate;
      if (loss < item.quantity) {
         item.Change (-loss);
         return;
      }

      // We're losing more than what we have - do fancy math.
      var partialHours = (loss - item.quantity) * rate;
      item.Change (-item.quantity);
      stat.Change (-partialHours * scale);
   }

   // Basic initialization.
   that.Name = "Nameless";

   // Initialize our items.
   that.items = [];
   that.NewItem ("money",    100,  "dollar", "dollars");
   that.NewItem ("coffee",   0.00, "cup of coffee", "cups of coffee");
   that.NewItem ("beer",     0.00, "pint of beer",  "pints of beer");
   that.NewItem ("raingear", 0.00, "piece of raingear", "pieces of raingear");
   that.NewItem ("food",     0.00, "meal", "meals");

   // Initialize our stats.
   that.stats = [];
   that.NewStat ("energy", 100);
   that.NewStat ("morale", 100);
   that.NewStat ("health", 100);
}
