import { NavLink } from "react-router-dom";
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

export const NavItem = styled(NavLink)`
    border: 0;
    background: transparent;
    color: ${props => props.theme['--light-gray']};
    font-weight: 700;

    transition: 0.2s;
    text-decoration: none;


    &:hover {
        color: ${props => props.theme['--yellow']};
    }

    &.active {
        color: ${props => props.theme["--yellow"]};
    }

`

export const LogoHeader = styled.div`
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

export const ThemeButton = styled.div`
    border: 0;
    background: ${props => props.theme['--yellow']};
    height: 20px;
    width: 20px;
    border-radius: 10px;
`