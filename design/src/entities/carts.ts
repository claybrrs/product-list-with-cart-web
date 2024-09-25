import { Product } from "./product";

export class Cart {
    private static _products: Product[] = [];
    private static _total: number = 0;

static addToCart(product: Product) {
    this._total += product.total;

}   
}

static get products() {
    return this._products;
}
}
