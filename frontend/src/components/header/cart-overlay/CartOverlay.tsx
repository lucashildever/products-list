import { generateProductKey } from '../../../utils/generateProductKey';
import { useCartContext } from '../../../hooks/useCartContext';
import { useHeaderContext } from '../../../hooks/useHeaderContext';

import CartProduct from './cart-product/CartProduct';
import SubmitButton from '../../shared/submit-button/SubmitButton';

import OverlayContainer from './cart-overlay.styles';

const CartOverlay = ({ isOpen }: { isOpen: boolean }) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        cartDispatch({ type: 'PLACE_ORDER' });
    };

    const { cartState, cartDispatch } = useCartContext();
    const { headerDispatch } = useHeaderContext();

    // checks if cart product option is selected
    const handleCartSelected = (
        cartItemKey: string
    ): ((attributeId: string, itemId: string) => boolean) => {
        return (attributeId, itemId) => {
            const product = cartState.cartItems.find(
                (item) => item.cartItemKey === cartItemKey
            );

            if (!product) return false;

            const selectedAttr = product.selectedAttributes.find(
                (attr) => attr.attrId === attributeId
            );

            if (!selectedAttr) return false;

            return selectedAttr.optionId === itemId;
        };
    };

    return (
        <OverlayContainer className={isOpen ? '' : 'hide'}>
            <div className="cart-overlay">
                <h3>
                    <span>My Bag</span>, {cartState.totalQuantity} items
                </h3>
                <div id="cart-form">
                    {cartState.cartItems.map((item) => {
                        const productKey = generateProductKey(
                            item.id,
                            item.selectedAttributes
                        );
                        return (
                            <CartProduct
                                key={productKey}
                                cartItemKey={productKey}
                                handleCartSelected={handleCartSelected(
                                    productKey
                                )}
                                name={item.name}
                                price={parseFloat(item.price.toFixed(2))}
                                quantity={item.amount}
                                image={item.image}
                                attributes={item.attributes}
                            />
                        );
                    })}
                    <div className="cart-total">
                        <p>Total</p>
                        <p>${cartState.totalPrice.toFixed(2)}</p>
                    </div>
                    <SubmitButton
                        disable={cartState.totalQuantity < 1}
                        onClick={handleSubmit}
                    >
                        PLACE ORDER
                    </SubmitButton>
                </div>
            </div>
            <span
                className="bg-overlay"
                onClick={() => headerDispatch({ type: 'TOGGLE_CART' })}
            ></span>
        </OverlayContainer>
    );
};

export default CartOverlay;
