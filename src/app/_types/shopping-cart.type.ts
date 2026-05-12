import { Product } from "./product.type";

export type ProductShoppingCart = Product & {
  quantity: number;
};

export type ShoppingCart = {
  totalPrice: number;
  products: ProductShoppingCart[];
};
