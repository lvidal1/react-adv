import { Product } from '../interfaces/interfaces';

const product = {
    id: 1,
    title: "Coffee Mug 1",
    img: "https://picsum.photos/200",
  };
  
  const product2 = {
    id: 2,
    title: "Coffee Mug 2",
    img: "https://picsum.photos/250",
  };
  
  export const products: Product[] = [product, product2];