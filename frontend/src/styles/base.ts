import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html { font-size: 15px; }
    body {
        padding-right: 10%;
        padding-left: 10%;
    }
    
    /* regular */
    ul, h1, span, h2, h3, p, button {
        font-family: "Raleway", serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    h1 { font-size: 2rem; }
    ul, span, button { font-size: 1.25rem; }
    h2, h3, p { font-size: 1.1rem; }
`;

export const animate = (time: number = 0.6) => css`
    transition: ${time}s ease;
`;

export const flexBox = (
    direction: string = 'flex',
    justify: string = 'center',
    align: string = 'center'
) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;
