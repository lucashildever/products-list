import styled from 'styled-components';
import { flexBox } from '../../../styles/base';

const ProductDetailsContainer = styled.div`
    margin-top: 130px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: 0.32fr 1.5fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;

    > div {
        /* background-color: grey; */
    }

    div.image-list {
        height: 450px;
        ${flexBox('column', 'flex-start')}
        overflow-y: auto;

        .img-list-item {
            background-color: grey;
            cursor: pointer;
            width: 100%;
            aspect-ratio: 1/1;
            margin-bottom: 15px;
            background-size: 100%;
            background-position: 'center';
            background-repeat: 'no-repeat';
        }
    }

    div.prod-main-image {
        height: 400px;
        ${flexBox('flex', 'space-between')}
        padding: 25px;
        background-size: 100%;
        background-position: 'center';
        background-repeat: 'no-repeat';

        > div {
            background-color: ${({ theme }) => theme.colors.grey};
            opacity: 0.6;
            height: 40px;
            width: 40px;
            cursor: pointer;

            ${flexBox('row', 'center', 'center')}

            > img {
                height: 60%;
            }
        }
    }
`;

export default ProductDetailsContainer;
