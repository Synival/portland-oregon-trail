"use strict"

function StoreItem (name, price) {
   if (!ItemExists (name))
      return;
   this.name  = name;
   this.price = price;
}
