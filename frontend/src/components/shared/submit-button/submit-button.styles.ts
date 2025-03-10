import styled from 'styled-components';

const SubmitBtnContainer = styled.button`
    &.disable {
        opacity: 0.5;
        cursor: not-allowed;
    }

    text-align: center;
    width: 100%;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
    margin-top: 25px;
    margin-bottom: 25px;
    color: white;
    font-weight: 600;
    font-size: 0.92rem;
`;

export default SubmitBtnContainer;
