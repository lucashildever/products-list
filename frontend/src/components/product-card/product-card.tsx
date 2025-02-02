import styled from 'styled-components';

const ProductCard = () => {
    return (
        <StyledCard>
            <h1>Product Card</h1>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    height: 200px;
    width: 200px;
    background-color: grey;
`;

export default ProductCard;