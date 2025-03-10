import { useContext } from 'react';
import CartContext from '../states/cart/cartContext';

export const useCartContext = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error('no cart context found');
    }

    const cartState = cartContext.state;
    const cartDispatch = cartContext.dispatch;

    return { cartState, cartDispatch };
};
