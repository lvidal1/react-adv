import { createContext } from "react";

import useProduct from "../hooks/useProduct";
import { InitialValues, onChangeProps, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  // children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeProps) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues
}: ProductCardProps) => {
  const { counter, updateItemsBy , maxCount, isMaxCountReached, reset } = useProduct( { onChange, product, value , initialValues } );

  return (
    <Provider value={{ counter, updateItemsBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>{children(
        {
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          reset,
          updateItemsBy
        }
      )}</div>
    </Provider>
  );
};
