import { CategoryItem } from '../categories/categories.types';

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
  REMOVE_ITEM_FROM_CART = 'cart/REMOVE_ITEM_FROM_CART',
  CLEAR_ITEM_FROM_CART = 'cart/CLEAR_ITEM_FROM_CART',
}

export type CartItem = CategoryItem & {
  quantity: number;
};
