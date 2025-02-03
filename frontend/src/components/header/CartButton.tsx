import styled from 'styled-components';
import cartIcon from '/cart.svg';

const CartButton = () => {
    return (
        <StyledCartBtn>
            <span>3</span>
            <img src={cartIcon} alt="cart icon" />
        </StyledCartBtn>
    );
};

const StyledCartBtn = styled.div`
    position: relative;
    cursor: pointer;

    > img { height: 23px; }

    > span {
        position: absolute;
        right: -10px;
        top: -10px;
        color: white;
        background-color: #1D1F22;
        width: 23px;
        height: 20px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        padding-bottom: 2px;
        font-size: 0.8rem;
    }
`;

export default CartButton;