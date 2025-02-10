export enum HeaderCategory {
    ALL,
    CLOTHES,
    TECH,
};

export interface IState {
    isCartOpen: boolean;
    selectedCategory: HeaderCategory
};

export type ActionType =
  | { type: 'TOGGLE_CART' }
  | { type: 'CATEGORY_CLICK'; payload: HeaderCategory };

export interface IHeaderContext {
    state: IState;
    dispatch: React.Dispatch<ActionType>;
};