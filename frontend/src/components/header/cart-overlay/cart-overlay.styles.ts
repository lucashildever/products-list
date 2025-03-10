import styled from 'styled-components';

const OverlayContainer = styled.div`
    &.hide {
        display: none;
    }

    > span {
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0px;
        top: 57px;
        background-color: #00000073;
        z-index: 1;
    }

    > div.cart-overlay {
        max-height: 70vh;
        overflow-y: auto;
        background-color: ${({ theme }) => theme.colors.background};
        position: fixed;
        right: 10%;
        top: 57px;
        z-index: 2;
        min-width: 300px;
        height: auto;
        padding-right: 25px;
        padding-left: 25px;

        > h3 {
            margin-bottom: 25px;
            margin-top: 25px;
            span {
                font-weight: 700;
            }
        }

        > div#cart-form {
            div.cart-total {
                display: flex;
                justify-content: space-between;
                > p {
                    font-weight: 600;
                }
            }
        }
    }
`;

export default OverlayContainer;
