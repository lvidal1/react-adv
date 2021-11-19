import { createContext, ReactElement } from "react";

import useProduct from "../hooks/useProduct";
import { onChangeProps, Product, ProductContextProps } from '../interfaces/interfaces';

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeProps) => void;
  value?: number;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value
}: ProductCardProps) => {
  const { counter, updateItemsBy } = useProduct( { onChange, product, value } );

  return (
    <Provider value={{ counter, updateItemsBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>{children}</div>
    </Provider>
  );
};
