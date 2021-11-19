import { onChangeProps, Product } from "../interfaces/interfaces";
import { useState, useEffect } from "react";

interface useProductProps {
  product: Product;
  onChange?: (args: onChangeProps) => void;
  value?: number;
}

/**
 * It's a hook that returns a product and a function to change the product count
 * @param param0
 * @returns
 */
export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductProps) => {
  const [counter, setCounter] = useState(value);

  const updateItemsBy = (amount: number) => {

    const newCount = Math.max(0, counter + amount);
    setCounter(newCount);

    // It's possible to call the callback function
    onChange && onChange({ count: newCount, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    updateItemsBy,
  };
};

export default useProduct;
