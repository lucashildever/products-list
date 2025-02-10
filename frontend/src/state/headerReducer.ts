import { IState, ActionType } from '../types/headerTypes';

export const headerReducer = (state: IState, action: ActionType) => {
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
}