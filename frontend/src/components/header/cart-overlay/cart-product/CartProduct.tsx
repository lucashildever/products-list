import { useCartContext } from '../../../../hooks/useCartContext';

import ProductAttribute from '../../../shared/product-attribute/ProductAttribute';
import OptionButton from '../../../shared/product-attribute/option-button/OptionButton';

import CartProdContainer from './cart-product.styles';

interface overlayProductProps {
    name: string;
    image: string;
    price: number;
    quantity: number;
    cartItemKey: string;
    attributes: {
        id: string;
        name: string;
        type: string;
        items: {
            displayValue: string;
            value: string;
            id: string;
        }[];
    }[];
    handleCartSelected?: (attributeId: string, itemId: string) => boolean;
}

const CartProduct = ({
    name,
    image,
    price,
    quantity,
    cartItemKey,
    attributes,
    handleCartSelected,
}: overlayProductProps) => {
    const { cartDispatch } = useCartContext();

    return (
        <CartProdContainer>
            <div className="prod-info">
                <p>{name}</p>
                <span>${(price * quantity).toFixed(2)}</span>
                {attributes.map((attr) => (
                    <ProductAttribute
                        key={attr.id}
                        attribute={attr}
                        isCartItemAttr
                        handleCartSelected={handleCartSelected}
                    />
                ))}
            </div>
            <div className="prod-counter">
                <OptionButton
                    onClick={() =>
                        cartDispatch({
                            type: 'ADD_PRODUCT',
                            payload: { cartItemKey },
                        })
                    }
                    type={'counter'}
                    counterType={'increase'}
                />
                {quantity}
                <OptionButton
                    onClick={() =>
                        cartDispatch({
                            type: 'REMOVE_PRODUCT',
                            payload: { cartItemKey },
                        })
                    }
                    type={'counter'}
                    counterType={'decrease'}
                />
            </div>
            <div
                className="prod-img"
                style={{ backgroundImage: `url('${image}')` }}
            ></div>
        </CartProdContainer>
    );
};

export default CartProduct;
