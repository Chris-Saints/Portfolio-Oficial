import styled from "styled-components";

export const ContainerFather = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    width: 100%;
`

export const DivPrincipal = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 2.8rem;
    margin-top: 2rem;

    max-width: 100vw;
    width: 90%;

    @media (max-width: 1280px) {
        width: 99%;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;

    }
`

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    width: 100%;

    @media (max-width: 1024px) {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 9999;
    }


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
    width: 100%;
`

