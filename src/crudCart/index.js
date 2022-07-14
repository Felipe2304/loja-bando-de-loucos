let listProductsCart = [];

export const crudCart = () => {
  const dataListProducts = {
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
  };

  return dataListProducts;
};
