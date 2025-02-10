import { useReducer } from 'react';
import { HeaderContext } from './headerContext';
import { headerReducer } from './headerReducer';
import { HeaderCategory, IState } from '../types/headerTypes';

const initialState: IState = {
    isCartOpen: false,
    selectedCategory: HeaderCategory.ALL,
};

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(headerReducer, initialState);

    return (
        <HeaderContext.Provider value={{ state, dispatch }}>
            {children}
        </HeaderContext.Provider>
    )
}