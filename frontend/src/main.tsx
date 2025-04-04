import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { GlobalStyle } from './styles/base.ts';
import { ThemeProvider } from 'styled-components';
import HeaderProvider from './states/header/headerProvider.tsx';
import CartProvider from './states/cart/cartProvider.tsx';
import theme from './styles/theme.ts';
import router from './router.tsx';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <CartProvider>
                <HeaderProvider>
                    <RouterProvider router={router} />
                </HeaderProvider>
            </CartProvider>
        </ThemeProvider>
    </StrictMode>
);
