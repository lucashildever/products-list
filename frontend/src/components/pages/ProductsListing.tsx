import styled from 'styled-components';
import ProductCard from '../ProductCard';

const ProductsListing = () => {
    return (
        <StyledProductsList>
            <h1>Women</h1>
            <div className='list'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </StyledProductsList>
    );
};

const StyledProductsList = styled.div`
    margin-top: 100px;
    margin-bottom: 80px;
    
    > h1 {
        margin-bottom: 50px;
    }

    div.list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;        
    }
`;

export default ProductsListing;
