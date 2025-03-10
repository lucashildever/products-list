import { useContext } from 'react';
import HeaderContext from '../states/header/headerContext';

export const useHeaderContext = () => {
    const headerContext = useContext(HeaderContext);

    if (!headerContext) {
        throw new Error('no header context found');
    }

    const headerState = headerContext.state;
    const headerDispatch = headerContext.dispatch;

    return { headerState, headerDispatch };
};
