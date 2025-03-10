import { useEffect } from 'react';
import { useProducts, FetchType } from '../../../hooks/useProducts';
import { useHeaderContext } from '../../../hooks/useHeaderContext';

import ProductCard from './product-card/ProductCard';
import Loading from '../../shared/loading/Loading';

import ProdListContainer from './products-listing.styles';

const ProductsListing = () => {
    const { headerState } = useHeaderContext();
    const { products, fetchProducts, isLoading } = useProducts();

    useEffect(() => {
        if (headerState.selectedCategory != 'all') {
            fetchProducts(FetchType.CATEGORY, headerState.selectedCategory);
        } else {
            fetchProducts(FetchType.ALL);
        }
    }, [headerState.selectedCategory]);

    return (
        <ProdListContainer>
            <h1>
                {headerState.selectedCategory.charAt(0).toUpperCase() +
                    headerState.selectedCategory.slice(1)}
            </h1>
            <div className="list">
                {isLoading ? (
                    <Loading />
                ) : (
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.prices[0].amount}
                            image={product.gallery[0]}
                            id={product.id}
                            attributes={product.attributes}
                            inStock={product.inStock}
                        />
                    ))
                )}
            </div>
        </ProdListContainer>
    );
};

export default ProductsListing;
