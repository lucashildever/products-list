import { CartState } from '../../types/cartTypes';
import { useReducer } from 'react';
import cartReducer from './cartReducer';
import CartContext from './cartContext';

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
