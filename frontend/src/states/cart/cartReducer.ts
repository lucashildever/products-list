import {
    AddProductPayload,
    CartAction,
    CartState,
} from '../../types/cartTypes';

const cartReducer = (state: CartState, action: CartAction) => {
    const isIncrement = (
        payload: AddProductPayload
    ): payload is { cartItemKey: string; product?: never } => {
        return 'cartItemKey' in payload && !('product' in payload);
    };

    switch (action.type) {
        case 'ADD_PRODUCT':
            if (isIncrement(action.payload)) {
                const existingProduct = state.cartItems.find(
                    (item) =>
                        item.cartItemKey ===
                        (action.payload as { cartItemKey: string }).cartItemKey
                );

                if (existingProduct) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map((item) =>
                            item.cartItemKey === existingProduct.cartItemKey
                                ? { ...item, amount: item.amount + 1 }
                                : item
                        ),
                        totalQuantity: state.totalQuantity + 1,
                        totalPrice: state.totalPrice + existingProduct.price,
                    };
                }
            } else {
                const productToAdd = action.payload.product;

                const existingProduct = state.cartItems.find(
                    (item) => item.cartItemKey === productToAdd.cartItemKey
                );

                let updatedCartItems = [];

                if (existingProduct) {
                    updatedCartItems = state.cartItems.map((item) =>
                        item.cartItemKey === productToAdd.cartItemKey
                            ? { ...item, amount: item.amount + 1 }
                            : item
                    );
                } else {
                    updatedCartItems = [...state.cartItems, productToAdd];
                }

                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalQuantity: state.totalQuantity + 1,
                    totalPrice: state.totalPrice + productToAdd.price,
                };
            }

            return state;

        case 'REMOVE_PRODUCT':
            const cartItemToRemove = action.payload.cartItemKey;

            const productToRemove = state.cartItems.find(
                (item) => item.cartItemKey === cartItemToRemove
            );

            if (!productToRemove) return state;

            if (productToRemove.amount === 1) {
                const updatedCartItems = state.cartItems.filter(
                    (item) => item.cartItemKey !== cartItemToRemove
                );

                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalQuantity: state.totalQuantity - 1,
                    totalPrice: state.totalPrice - productToRemove.price,
                };
            } else {
                const updatedCartItems = state.cartItems.map((item) =>
                    item.cartItemKey === cartItemToRemove
                        ? { ...item, amount: item.amount - 1 }
                        : item
                );

                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalQuantity: state.totalQuantity - 1,
                    totalPrice: state.totalPrice - productToRemove.price,
                };
            }

        case 'PLACE_ORDER':
            // register order in db
            // clear cart total and quantity

            return {
                ...state,
                cartItems: [],
                totalQuantity: 0,
                totalPrice: 0,
            };
        default:
            return state;
    }
};

export default cartReducer;
