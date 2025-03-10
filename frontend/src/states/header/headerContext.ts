import { createContext } from 'react';
import { HeaderContext as IHeaderContext } from '../../types/headerTypes';

const HeaderContext = createContext<IHeaderContext | null>(null);

export default HeaderContext;
