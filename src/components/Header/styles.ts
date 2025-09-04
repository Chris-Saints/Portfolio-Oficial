import styled from "styled-components";

export const BaseHeader = styled.header`
    background: ${props => props.theme[' --dark-gray']};
    color: ${props => props.theme['--light-gray']};

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    border-radius: 8px;

    margin: 2rem 20rem 2.5rem 20rem;
    padding: 1rem 1rem;
`

export const LogoHeader = styled.img`
    background: ${props => props.theme['--yellow']};
    height: 20px;
    width: 20px;
    border-radius: 10px;
`

export const NavHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`

export const NavButtonHeader = styled.button`
    border: 0;
    background: transparent;
    color: ${props => props.theme['--light-gray']};
    font-weight: 700;

    transition: 0.2s;

    &:hover {
        color: ${props => props.theme['--yellow']};
    }

`

export const ThemeButton = styled.button`
    border: 0;
    background: ${props => props.theme['--yellow']};
    height: 20px;
    width: 20px;
    border-radius: 10px;
`