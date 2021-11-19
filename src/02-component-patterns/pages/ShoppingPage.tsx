import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  // It handles the state of the cart
  const { cart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={(e) => onProductCountChange(e)}
            value={cart[product.id]?.count || 0}
          >
            <ProductImage className="card-image" />
            <ProductTitle title={""} className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div>
        <code>
          <pre>{JSON.stringify(cart, null, 2)}</pre>
        </code>
      </div>

      <div className="shopping-cart">
        <h4>Shopping Cart</h4>
        {Object.entries(cart).map(([key, product]) => {
          return (
            product && (
              <ProductCard
                key={key}
                product={product}
                className="bg-dark"
                style={{ width: "100px" }}
                onChange={(e) => onProductCountChange(e)}
                value={product.count}
              >
                <ProductImage className="card-image" />
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            )
          );
        })}
      </div>
    </div>
  );
};
