import { useReducer } from 'react';
import HeaderContext from './headerContext';
import headerReducer from './headerReducer';
import { HeaderCategory, HeaderState } from '../../types/headerTypes';

const initialState: HeaderState = {
    isCartOpen: false,
    selectedCategory: HeaderCategory.ALL,
};

const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(headerReducer, initialState);

    return (
        <HeaderContext.Provider value={{ state, dispatch }}>
            {children}
        </HeaderContext.Provider>
    );
};

export default HeaderProvider;
