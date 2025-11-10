import styled from "styled-components";


export const DivPrincipal = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 2.8rem;

    margin: 0 20rem;

    @media (max-width: 1280px) {
        width: 99%;
        margin-left: 0.4rem
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;

        margin: 2.5rem 0 0 ;
    }
`

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;


    @media (max-width: 480px) {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 9999;
    }

`

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    width: auto;
`

export const ContatoFixed = styled.a`
        position: fixed;
        bottom: 5rem;
        right: 1rem;

        border-radius: 100%;

        background: ${props => props.theme['--yellow']};
        height: 70px;
        width: 70px;

        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 20px black;
        z-index: 9999;
        
 
    @media (min-width: 769px) {
        display: none;
    }
`