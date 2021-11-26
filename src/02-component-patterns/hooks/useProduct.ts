import { InitialValues, onChangeProps, Product } from "../interfaces/interfaces";
import { useState, useEffect, useRef } from "react";

interface useProductProps {
  initialValues?: InitialValues;
  product: Product;
  value?: number;
  onChange?: (args: onChangeProps) => void;
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
  initialValues
}: useProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count ||  value);

  const isMounted = useRef(false);

  const updateItemsBy = (amount: number) => {

    const updatedCount = counter + amount;

    const newCount = initialValues?.maxCount ? Math.min(updatedCount, initialValues.maxCount) : updatedCount;
    setCounter(newCount);

    // It's possible to call the callback function
    onChange && onChange({ count: newCount, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || 0);
  };

  useEffect(() => {
    if(!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
    return () => {  
      isMounted.current = false;
    };
  }, []);

  return {
    counter,
    updateItemsBy,
    reset,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount
  };
};

export default useProduct;
