
import { createItem } from "./services/products.js";
import * as cart from "./services/cart.js"
import { products } from "./databases/dbProducts.js";

(async function main(){

    for(let i=0; i < products.length; i++){
        cart.addItem(products[i], Math.floor(Math.random() * 3) + 1)
    }

    cart.showCart()
})()
