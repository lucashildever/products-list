import { useHeaderContext } from '../../../hooks/useHeaderContext';
import { useCartContext } from '../../../hooks/useCartContext';

import CartBtnContainer from './cart-button.styles';
import cartIcon from '/cart.svg';

const CartButton = () => {
    const { headerDispatch } = useHeaderContext();
    const { cartState } = useCartContext();

    return (
        <CartBtnContainer
            onClick={() => headerDispatch({ type: 'TOGGLE_CART' })}
            data-testid="cart-btn"
        >
            <span className={cartState.totalQuantity < 1 ? 'hide' : ''}>
                {cartState.totalQuantity}
            </span>
            <img src={cartIcon} alt="cart icon" />
        </CartBtnContainer>
    );
};

export default CartButton;
