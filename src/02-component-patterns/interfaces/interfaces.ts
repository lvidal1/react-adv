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
  product: Product;
  counter: number;
  updateItemsBy: (amount: number) => void;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps) : JSX.Element;
  Title: ({ title, className }: ProductTitleProps) => JSX.Element;
  Image: ({ img, className }: ProductImageProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}