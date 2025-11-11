import styled from "styled-components";

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 100vw;
    width: 50%;

    @media (max-width: 1024px) {
        max-width: 100vw;
        width: 85%;
    }

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

    @media (max-width: 1024px) {
        h1 {
            font-size: 65px;
        }

        p {
            font-size: 30px;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 55px;
        }

        p {
            font-size: 18px;
        }
    }

    @media (max-width: 390px) {
        h1 {
            font-size: 55px;
        }
    }
`

export const SectionExpForm = styled.section`
    display: flex;
    gap: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
    }


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

    @media (max-width: 1024px) {
        h2 {
            font-size: 65px;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 55px;
        }
    }

    @media (max-width: 390px) {
        h2 {
            font-size: 42px;
        }
    }
`

export const ContainerExpFormacao = styled.div`
    line-height: 1.7;

    p {
        color: ${props => props.theme['--light-gray']};
    }

    @media (max-width: 1024px) {
        p {
            font-size: 25px;
        }

        h3 {
            font-size: 23px;
        }
    }

    @media (max-width: 480px) {
        p {
            font-size: 18px;
        }

        h3 {
            font-size: 20px;
        }
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

    @media (max-width: 1024px) {
        p {
            font-size: 30px;
        }

        span {
            font-weight: 900;
            font-size: 30px;
        }
        
    }

    @media (max-width: 480px) {
        p {
            font-size: 22px;
        }
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

    @media (max-width: 1024px) {
        padding-bottom: 3rem;

        h2 {
            font-size: 65px;
        }
    }

    @media (max-width: 480px) {
        padding-bottom: 3rem;

        h2 {
            font-size: 47px;
        }
    }

    @media (max-width: 390px) {
        h2 {
            font-size: 42px;
        }
    }

`