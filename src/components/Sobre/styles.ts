import styled from "styled-components";

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;


    @media (max-width: 480px) {
        max-width: 100vw;
        width: 90%;
    }
`

export const ContainerBase = styled.section`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;

    padding: 1rem 2rem 2rem 2rem;


    h1{
        font-size: 50px;
    }

    p{
        color: ${props => props.theme['--light-gray']};
    }
`

export const SectionExpForm = styled.section`
    display: flex;
    gap: 2rem;
`

export const ContainerBaseExpForm = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 1rem;

    width: 100%;

    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;

    padding: 1rem 2rem 2rem 2rem;

    h2{
        font-size: 30px;
    }
`

export const ContainerExpFormacao = styled.div`
    line-height: 1.7;

    p {
        color: ${props => props.theme['--light-gray']};
    }
`

export const ContainerEspecializacao = styled.div`

    display: flex;
    flex-direction: column;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    p{
        font-size: 20px;
    }

    span {
        font-weight: 900;
    }
`

export const ContainerEspecializacaoBase = styled.section`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    gap: 1.5rem;

    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;

    margin-bottom: 3rem;
    padding: 1rem 2rem 2rem 2rem;

    div{
        width: 100%;
    }

    h2{
        font-size: 30px;
    }
`