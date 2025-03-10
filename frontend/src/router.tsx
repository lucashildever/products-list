import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ProductDetails from './components/pages/product-details/ProductDetails';
import ProductsListing from './components/pages/product-listing/ProductsListing';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ProductsListing />,
            },
            {
                path: 'product/:productId',
                element: <ProductDetails />,
            },
        ],
    },
]);

export default router;
