import styled from 'styled-components';
import logo from '/logo.svg';
import cartIcon from '/cart.svg';
import { useState } from 'react';

const Header = () => {

    const [active, setActive] = useState<string>('women');

    const handleActive = (navOption: string): string => {
        setActive(navOption);
        return active;
    }

    return (
        <StyledHeader>
            <ul>
                <li
                    onClick={() => handleActive('women')}
                    className={active === 'women' ? 'active' : ''}
                >
                    <span>Women</span>
                </li>
                <li
                    onClick={() => handleActive('men')}
                    className={active === 'men' ? 'active' : ''}
                >
                    <span>Men</span>
                </li>
                <li
                    onClick={() => handleActive('kid')}
                    className={active === 'kid' ? 'active' : ''}
                >
                    <span>Kid</span>
                </li>
            </ul>
            <img src={logo} alt="logo" />
            <img src={cartIcon} alt="cart icon" />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 17px;
    padding-bottom: 17px;
    position: relative;

    img[alt="logo"] {
        position: absolute;
        height: 35px;
        left: 50%;
        transform: translateX(-50%);
    }

    img:nth-of-type(2) {
        height: 23px;
    }

    ul {
        display: flex;

        li { 
            cursor: pointer;
            position: relative;

            // middle link spacing
            &:nth-child(2) {
                padding-left: 15px;
                padding-right: 15px;
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
            }
        }
    }
`;

export default Header;