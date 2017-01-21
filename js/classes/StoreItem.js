"use strict"

function StoreItem (name, price) {
   if (!ItemDoesntExist (name))
      return;
   this.name  = name;
   this.price = price;
}
