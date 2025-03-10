import { createContext } from 'react';
import { CartContext as ICartContext } from '../../types/cartTypes';

const CartContext = createContext<ICartContext | null>(null);

export default CartContext;
