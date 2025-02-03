import { useState } from 'react';
import styled from 'styled-components';

import CartButton from './CartButton';
import CartOverlay from './CartOverlay';

import logo from '/logo.svg';

const Header = () => {

    const [active, setActive] = useState<string>('women');

    return (
        <>
            <StyledHeader>
                <ul>
                    <li
                        onClick={() => setActive('women')}
                        className={active === 'women' ? 'active' : ''}
                        data-testid={active === 'women' ? 'active-category-link' : 'category-link'}
                    >
                        <span>Women</span>
                    </li>
                    <li
                        onClick={() => setActive('men')}
                        className={active === 'men' ? 'active' : ''}
                        data-testid={active === 'men' ? 'active-category-link' : 'category-link'}
                    >
                        <span>Men</span>
                    </li>
                    <li
                        onClick={() => setActive('kid')}
                        className={active === 'kid' ? 'active' : ''}
                        data-testid={active === 'kid' ? 'active-category-link' : 'category-link'}
                    >
                        <span>Kid</span>
                    </li>
                </ul>
                <img src={logo} alt="logo" />
                <CartButton />
            </StyledHeader>
            <CartOverlay />
        </>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: white;
    /* padding-top: 17px;
    padding-bottom: 17px; */

    img[alt="logo"] {
        position: absolute;
        height: 35px;
        left: 50%;
        transform: translateX(-50%);
    }

    ul {
        display: flex;

        li { 
            cursor: pointer;
            position: relative;

            // middle link spacing
            &:nth-child(2) {
                margin-left: 15px;
                margin-right: 15px;
            }

            &:after {
                transition: ease 0.3s;
                content: '';
                position: absolute;
                left: 0;
                bottom: -15px;
                width: 100%;
                height: 2px;
                background-color: #5ECE7B;
                opacity: 0;
            }

            &.active {
                color : #5ECE7B;
                &:after { opacity: 1; }
                font-weight: 600;
            }
        }
    }
`;

export default Header;