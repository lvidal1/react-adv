import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  // It handles the state of the cart

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        <ProductCard
          key={product.id}
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {( {reset, updateItemsBy , isMaxCountReached, count} ) => (
            <>
              <ProductImage />
              <ProductTitle  />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
