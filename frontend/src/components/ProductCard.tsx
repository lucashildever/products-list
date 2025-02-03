import styled from 'styled-components';

const ProductCard = () => {
    return (
        <StyledCard>
            <div className='card-image'></div>
            <h2>Card name</h2>
            <p>$00.00</p>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    height: auto;
    width: 100%;
    
    > h2 {
        margin-top: 25px;
        margin-bottom: 15px;
        font-weight: 400;
    }

    > p { font-weight: 600; }
    
    div.card-image {
        background-color: grey;
        height: 350px;
    }
`;

export default ProductCard;