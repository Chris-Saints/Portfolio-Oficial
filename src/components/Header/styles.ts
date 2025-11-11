import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BaseHeader = styled.header`
    background: ${props => props.theme[' --dark-gray']};
    color: ${props => props.theme['--light-gray']};

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;

    border-radius: 8px;

    margin: 2rem 20rem 2.5rem 20rem; 
    padding: 1rem 1rem;

    @media (max-width: 1280px) {
        max-width: 900px;
        width: 94%;
        margin: 2rem 10.3rem 2rem;
    }

    @media (max-width: 1024px) {
        margin: 0;
        padding: 2rem 3rem;
        max-width: 100vw;
        width: 100%;
        border-radius: 0;

        border-top: solid 4px ${props => props.theme['--yellow']};
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;

        font-size: 25px;
        box-shadow: 0 -10px 20px black;

    }

    @media (max-width: 480px) {
        margin: 0;

        padding: 1rem 1rem;
        width: 100vw;
        border-radius: 0;

        border-top: solid 4px ${props => props.theme['--yellow']};
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;

        font-size: 18px;
        box-shadow: 0 -10px 20px black;

    }
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

    @media (max-width: 1024px) {

        &:hover {
            color: ${props => props.theme['--yellow']};
        }

    }

    @media (max-width: 480px) {

        &:hover {
            color: ${props => props.theme['--yellow']};
        }

    }

`

export const LogoHeader = styled.div`
    background: ${props => props.theme['--yellow']};
    height: 20px;
    width: 20px;
    border-radius: 10px;

    @media (max-width: 1024px) {

        height: 50px;
        width: 50px;
        border-radius: 100%;

    }

    @media (max-width: 480px) {

        background: ${props => props.theme['--yellow']};
        height: 20px;
        width: 20px;
        border-radius: 10px;

    }
`

export const NavHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 1024px) {

        gap: 6rem;

    }

    @media (max-width: 480px) {

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;

    }
`

export const ThemeButton = styled.div`
    border: 0;
    background: ${props => props.theme['--yellow']};
    height: 20px;
    width: 20px;
    border-radius: 10px;

    @media (max-width: 1024px) {

        height: 50px;
        width: 50px;
        border-radius: 100%;

    }

    @media (max-width: 480px) {

        border: 0;
        background: ${props => props.theme['--yellow']};
        height: 20px;
        width: 20px;
        border-radius: 10px;
    }
`

