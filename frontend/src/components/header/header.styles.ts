import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 1;

    img[alt='logo'] {
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
                background-color: ${({ theme }) => theme.colors.green};
                opacity: 0;
            }

            &.active {
                color: ${({ theme }) => theme.colors.green};
                &:after {
                    opacity: 1;
                }
                font-weight: 600;
            }
        }
    }
`;

export default HeaderContainer;
