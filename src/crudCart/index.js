import { printCardList } from "../components/ContainerCart/index.js";

let listProductsCart = [];

export const dataListProducts = {
  create: (infoProducts) => {
    listProductsCart.push({
      photo: infoProducts.photo,
      description: infoProducts.description,
      price: infoProducts.price,
    });

    return listProductsCart;
  },

  read: () => {
    return [...listProductsCart];
  },

  delete: () => {
    console.log(listProductsCart);
  },
};
