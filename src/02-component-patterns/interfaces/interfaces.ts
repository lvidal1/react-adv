import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductCardProps } from "../components/ProductCard";

export interface Product {
  id: number;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  maxCount?: number;
  product: Product;
  updateItemsBy: (amount: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps) : JSX.Element;
  Title: ({ title, className }: ProductTitleProps) => JSX.Element;
  Image: ({ img, className }: ProductImageProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}

export interface onChangeProps {
  product: Product;
  count: number;
}
export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues  {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product:Product;
  updateItemsBy: (amount: number) => void;
  reset: () => void;
}