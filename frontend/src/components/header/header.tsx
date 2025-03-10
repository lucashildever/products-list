import { useHeaderContext } from '../../hooks/useHeaderContext';
import { HeaderCategory } from '../../types/headerTypes';

import CartButton from './cart-button/CartButton';
import CartOverlay from './cart-overlay/CartOverlay';

import HeaderContainer from './header.styles';
import logo from '/logo.svg';

const Header = () => {
    const { headerState, headerDispatch } = useHeaderContext();

    return (
        <>
            <HeaderContainer>
                <ul>
                    <li
                        onClick={() =>
                            headerDispatch({
                                type: 'CATEGORY_CLICK',
                                payload: HeaderCategory.ALL,
                            })
                        }
                        className={
                            headerState.selectedCategory === HeaderCategory.ALL
                                ? 'active'
                                : ''
                        }
                        data-testid={
                            headerState.selectedCategory === HeaderCategory.ALL
                                ? 'active-category-link'
                                : 'category-link'
                        }
                    >
                        <span>All</span>
                    </li>
                    <li
                        onClick={() =>
                            headerDispatch({
                                type: 'CATEGORY_CLICK',
                                payload: HeaderCategory.CLOTHES,
                            })
                        }
                        className={
                            headerState.selectedCategory ===
                            HeaderCategory.CLOTHES
                                ? 'active'
                                : ''
                        }
                        data-testid={
                            headerState.selectedCategory ===
                            HeaderCategory.CLOTHES
                                ? 'active-category-link'
                                : 'category-link'
                        }
                    >
                        <span>Clothes</span>
                    </li>
                    <li
                        onClick={() =>
                            headerDispatch({
                                type: 'CATEGORY_CLICK',
                                payload: HeaderCategory.TECH,
                            })
                        }
                        className={
                            headerState.selectedCategory === HeaderCategory.TECH
                                ? 'active'
                                : ''
                        }
                        data-testid={
                            headerState.selectedCategory === HeaderCategory.TECH
                                ? 'active-category-link'
                                : 'category-link'
                        }
                    >
                        <span>Tech</span>
                    </li>
                </ul>
                <img src={logo} alt="logo" />
                <CartButton />
            </HeaderContainer>
            <CartOverlay isOpen={headerState.isCartOpen} />
        </>
    );
};

export default Header;
