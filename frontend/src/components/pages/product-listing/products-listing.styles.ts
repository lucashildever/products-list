import styled from 'styled-components';

const ProdListContainer = styled.div`
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

export default ProdListContainer;
