import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kid</li>
            </ul>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        li {
            cursor: pointer;
        }
    }
`;

export default Header;