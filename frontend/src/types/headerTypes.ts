export enum HeaderCategory {
    ALL = 'all',
    CLOTHES = 'clothes',
    TECH = 'tech',
}

export interface HeaderState {
    isCartOpen: boolean;
    selectedCategory: HeaderCategory;
}

export type HeaderAction =
    | { type: 'TOGGLE_CART' }
    | { type: 'CATEGORY_CLICK'; payload: HeaderCategory };

export interface HeaderContext {
    state: HeaderState;
    dispatch: React.Dispatch<HeaderAction>;
}
