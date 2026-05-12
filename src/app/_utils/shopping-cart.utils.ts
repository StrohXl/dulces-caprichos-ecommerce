import {
  ProductShoppingCart,
  ShoppingCart,
} from "../_types/shopping-cart.type";

const key = "ShoppingCart";

function getShoppingCart(): ShoppingCart {
  const shoppingCart = window.localStorage.getItem(key);
  return shoppingCart
    ? JSON.parse(shoppingCart)
    : { products: [], totalPrice: 0 };
}

function calculateTotalShoppingCart(products: ProductShoppingCart[]): number {
  const totalPrice = products.reduce(
    (acumulator, item) => acumulator + item.price * item.quantity,
    0,
  );
  return totalPrice;
}

function addProductToShoppingCart({
  product,
}: {
  product: ProductShoppingCart;
}): ShoppingCart {
  const shoppingCart = getShoppingCart();
  const findProduct = shoppingCart.products.find(
    (item) => item.id == product.id,
  );
  if (!findProduct) {
    const newList: ShoppingCart = {
      totalPrice: 0,
      products: [...shoppingCart.products, product],
    };
    newList.totalPrice = calculateTotalShoppingCart(newList.products);
    window.localStorage.setItem(key, JSON.stringify(newList));
    return newList;
  }
  return shoppingCart;
}

function removeProductShoppingCart({
  product,
}: {
  product: ProductShoppingCart;
}): ShoppingCart {
  const shoppingCart = getShoppingCart();
  const indexProduct = shoppingCart.products.find(
    (item) => item.id == product.id,
  );
  if (indexProduct) {
    const newList: ShoppingCart = {
      totalPrice: 0,
      products: shoppingCart.products.filter((item) => item.id !== product.id),
    };
    newList.totalPrice = calculateTotalShoppingCart(newList.products);
    window.localStorage.setItem(key, JSON.stringify(newList));
    return newList;
  }
  return shoppingCart;
}

function plusProductShoppingCart({
  idProduct,
}: {
  idProduct: number;
}): ShoppingCart {
  const shoppingCart = getShoppingCart();
  const findProduct = shoppingCart.products.find(
    (item) => item.id == idProduct,
  );
  if(findProduct){
    const indexProduct = shoppingCart.products.findIndex(item => item.id == idProduct)
    shoppingCart.products[indexProduct].quantity++
    shoppingCart.totalPrice = calculateTotalShoppingCart(shoppingCart.products)
    window.localStorage.setItem(key, JSON.stringify(shoppingCart));

  }
  return shoppingCart
}

function minusProductShoppingCart({
  idProduct,
}: {
  idProduct: number;
}): ShoppingCart {
  const shoppingCart = getShoppingCart();
  const findProduct = shoppingCart.products.find(
    (item) => item.id == idProduct,
  );
  if(findProduct){
    const indexProduct = shoppingCart.products.findIndex(item => item.id == idProduct)
    const quantity = shoppingCart.products[indexProduct].quantity
    shoppingCart.products[indexProduct].quantity = Math.max(1, quantity - 1)
    shoppingCart.totalPrice = calculateTotalShoppingCart(shoppingCart.products)

    window.localStorage.setItem(key, JSON.stringify(shoppingCart));

  }
  return shoppingCart
}

export { getShoppingCart, addProductToShoppingCart, removeProductShoppingCart, plusProductShoppingCart,minusProductShoppingCart };
