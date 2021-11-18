import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface ProductButtonsProps {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({className, style}: ProductButtonsProps) => {
  const { counter, updateItemsBy } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer}  ${className}`} style={style}>
      <button onClick={() => updateItemsBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button onClick={() => updateItemsBy(1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};
