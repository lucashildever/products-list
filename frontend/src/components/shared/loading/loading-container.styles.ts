import styled from 'styled-components';

const LoadingContainer = styled.div`
    .loader {
        overflow: hidden;
        width: 100%;
        height: 90%;
        position: fixed;
        top: 10%;
        left: 0;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        z-index: 100000;
    }

    .element {
        border-radius: 100%;
        border: 8px solid ${({ theme }) => theme.colors.green};
        margin: calc(8px * 2);
    }

    .element:nth-child(1) {
        animation: preloader 0.6s ease-in-out alternate infinite;
    }
    .element:nth-child(2) {
        animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
    }

    .element:nth-child(3) {
        animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
    }

    @keyframes preloader {
        100% {
            transform: scale(2);
        }
    }
`;

export default LoadingContainer;
