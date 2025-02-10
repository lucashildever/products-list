import { createContext } from 'react';
import { IHeaderContext } from '../types/headerTypes';

export const HeaderContext = createContext<IHeaderContext | null>(null);