"use strict"

function StoreItem (store, name, price) {
   var that = this;

   // Make sure that's a valid item.
   if (!store.GetGame().ItemExists (name))
      return;

   // Add to our store.
   that.store = store;
   store.items[name] = that;

   // Functions.
   that.GetStore = function () {
      return store;
   };

   // Initialization.
   that.name  = name;
   that.price = price;
}
