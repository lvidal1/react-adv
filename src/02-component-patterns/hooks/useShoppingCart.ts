import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';

/**
 * It's a hook that returns a tuple of the cart and a function to add a product to the cart.
 * @returns {[ProductInCart[], (product: Product) => void]}
 */
export const useShoppingCart = () => {

    const [cart, setCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({
      count,
      product,
    }: {
      count: number;
      product: Product;
    }) => {
  
      setCart((prevCart) => {
  
        const productInCart : ProductInCart = prevCart[product.id] || {...product, count: 0};
  
        if(Math.max(productInCart.count + count, 0) > 0) {
          productInCart.count += count;
          return {
            ...prevCart,
            [product.id]: productInCart,
          };
        }
  
        const { [product.id]: _, ...rest } = prevCart;
        return rest;
  
        // if (count === 0) {
        //   return {
        //     ...prevCart,
        //     [product.id]: undefined,
        //   };
        // }
  
        // return {
        //   ...prevCart,
        //   [product.id]: { ...product, count },
        // };
      });
    };
    return {
        cart,
        onProductCountChange
    }
}
