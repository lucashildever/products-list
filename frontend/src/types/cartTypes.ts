export interface CartItem {
    id: string;
    cartItemKey: string;
    name: string;
    amount: number;
    image: string;
    price: number;
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
    selectedAttributes: {
        attrId: string;
        optionId: string;
    }[];
}

export interface CartState {
    cartItems: CartItem[];
    totalPrice: number;
    totalQuantity: number;
}

export type AddProductPayload =
    | { cartItemKey: string; product?: never }
    | { product: CartItem; cartItemKey?: never };

export type CartAction =
    | { type: 'PLACE_ORDER' }
    | {
          type: 'ADD_PRODUCT';
          payload:
              | { cartItemKey: string; product?: never }
              | { product: CartItem; cartItemKey?: never };
      }
    | { type: 'REMOVE_PRODUCT'; payload: { cartItemKey: string } };

export interface CartContext {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}
