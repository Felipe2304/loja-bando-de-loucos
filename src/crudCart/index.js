let listProductsCart = [];

export const dataListProducts = {
  create: (infoProducts) => {
    listProductsCart.push({
      photo: infoProducts.photo,
      description: infoProducts.description,
      price: infoProducts.price,
      quantity: 1,
    });

    return listProductsCart;
  },

  read: () => {
    return [...listProductsCart];
  },

  upload: (index, quantityValue) => {
    const updatedList = listProductsCart.map((infoProducts, position) => {
      if (index === position) {
        return {
          photo: infoProducts.photo,
          description: infoProducts.description,
          price: infoProducts.price,
          quantity: quantityValue,
        };
      }

      return infoProducts;
    });

    listProductsCart = updatedList;
  },

  delete: (index) => {
    const newList = listProductsCart.filter((_item, position) => {
      return index !== position;
    });

    listProductsCart = newList;
  },

  clearList: () => {
    listProductsCart = [];

    console.log(listProductsCart);
  },
};
