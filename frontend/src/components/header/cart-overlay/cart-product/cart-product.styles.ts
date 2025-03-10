import styled from 'styled-components';
import { flexBox } from '../../../../styles/base';

const CartProdContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    min-height: 100px;
    margin-bottom: 25px;

    > div.prod-info {
        ${flexBox('column', 'flex-start', 'flex-start')};
        justify-content: space-between;
        height: auto;

        > span {
            font-weight: 600;
            margin-top: 15px;
        }
    }

    > div.prod-counter {
        ${flexBox('column')};
        justify-content: space-between;
        align-items: center;
        height: 100%;
        font-family: 'raleway';
        font-size: 1.2rem;
        font-weight: 600;
    }

    > div.prod-img {
        height: 100%;
        background-size: cover;
    }
`;

export default CartProdContainer;
