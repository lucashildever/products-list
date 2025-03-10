import { HeaderState, HeaderAction } from '../../types/headerTypes';

const headerReducer = (state: HeaderState, action: HeaderAction) => {
    switch (action.type) {
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            };
        case 'CATEGORY_CLICK':
            return {
                ...state,
                selectedCategory: action.payload,
            };
        default:
            return state;
    }
};

export default headerReducer;
