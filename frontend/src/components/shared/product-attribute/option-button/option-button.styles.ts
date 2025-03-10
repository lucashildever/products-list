import styled from 'styled-components';

const rightSpacing = 'margin-right: 7px;';

const TextButton = styled.div`
    ${rightSpacing}
    &.clickable {
        cursor: pointer;
    }
    padding-top: 6px;
    padding-bottom: 6px;
    margin-bottom: 6px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid ${({ theme }) => theme.colors.grey};

    > span {
        font-size: 1rem;
    }

    &.selected {
        background-color: ${({ theme }) => theme.colors.grey};
        color: white;
    }
`;

const ColorButton = styled.div`
    ${rightSpacing}
    &.clickable {
        cursor: pointer;
    }
    height: 23px;
    width: 23px;
    border: none;
    outline: none;
    margin-right: 8px;

    &.selected {
        outline: 1px solid ${({ theme }) => theme.colors.green};
        outline-offset: 2px;
    }
`;

const CounterButton = styled.button`
    cursor: pointer;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    height: 30px;
    width: 30px;

    > span {
        position: absolute;
        display: block;
        top: 50%;
        left: 27%;
        width: 45%;
        height: 0px;
        border-top: 1px solid ${({ theme }) => theme.colors.grey};
    }

    &.increase {
        > span:first-child {
            transform: rotate(90deg);
        }
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.grey};
        > span {
            border-top: 1px solid white;
        }
    }
`;

export { TextButton, ColorButton, CounterButton };
