import data from "../data.json";
import { Cart } from "./entities/carts";
import {Product} from "./entities/product";

// for (const product of data){
//     new Product(product.name,
//      product.price, 
//      product.caregosry, 
//      product.image.desktop
//     );
// }

const banana = new Product("Banana", 10, "fruta", );

banana.incrementQuantity();
banana.incrementQuantity();
banana.incrementQuantity();