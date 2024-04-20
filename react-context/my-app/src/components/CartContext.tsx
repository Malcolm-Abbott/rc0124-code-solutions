import { createContext } from 'react';
import { Product } from '../lib';

export type ShoppingCartItem = {
  product: Product;
  quantity: number;
};

export type CartContextValues = {
  cart: ShoppingCartItem[];
  addToCart: (product: Product, quantity: number) => void;
};

export const CartContext = createContext<CartContextValues>({
  cart: [],
  addToCart: () => undefined,
});
