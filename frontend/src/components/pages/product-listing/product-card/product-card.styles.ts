import styled from 'styled-components';
import { flexBox, animate } from '../../../../styles/base';

const CardContainer = styled.div`
    height: auto;
    width: 100%;
    opacity: 0.6;

    > h2 {
        margin-top: 25px;
        margin-bottom: 15px;
        font-weight: 400;
    }

    > p {
        font-weight: 600;
    }

    div.card-image {
        background-color: grey;
        height: 350px;
        background-size: cover;
        background-position: center;
        background-size: 100%;
        background-repeat: repeat;
        position: relative;
    }

    & div.card-image {
        ${animate()};
        > div.quick-shop-btn {
            ${animate()};
            ${flexBox('flex', 'center', 'center')};
            width: 55px;
            height: 55px;
            background-color: ${({ theme }) => theme.colors.green};
            border-radius: 50%;
            position: absolute;
            bottom: -8%;
            right: 25px;
            opacity: 0;

            > img {
                height: 23px;
                transform: translateX(-2px);
            }

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    &.in-stock {
        opacity: 1;
        cursor: pointer;

        &:hover {
            div.quick-shop-btn {
                opacity: 1;
            }
        }
        > div.card-image:hover {
            background-size: 120%;
        }
    }
    &:not(.in-stock) {
        cursor: not-allowed;
        > div.card-image > div.quick-shop-btn {
            display: none;
        }
    }
`;

export default CardContainer;
