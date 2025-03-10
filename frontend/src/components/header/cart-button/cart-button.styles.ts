import styled from 'styled-components';

const CartBtnContainer = styled.div`
    position: relative;
    cursor: pointer;

    > img {
        height: 23px;
    }

    > span {
        &.hide {
            display: none;
        }

        position: absolute;
        right: -10px;
        top: -10px;
        color: white;
        background-color: ${({ theme }) => theme.colors.grey};
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

export default CartBtnContainer;
