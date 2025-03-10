import styled from 'styled-components';
import { flexBox } from '../../../styles/base';

const AttrContainer = styled.div`
    > p {
        font-size: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    > div.option-selector {
        ${flexBox('row', 'flex-start', 'center')};
        flex-wrap: wrap;
        width: 100%;
    }
`;

export default AttrContainer;
