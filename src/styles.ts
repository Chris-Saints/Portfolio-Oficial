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
`

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    width: auto;
`

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    width: auto;
`