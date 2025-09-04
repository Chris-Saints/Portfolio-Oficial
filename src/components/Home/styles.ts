import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-bottom: 3rem;

    gap: 2rem;
`

export const ContainerBase = styled.section`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;

    padding: 1rem 2rem 2rem 2rem;

    strong{
        color: ${props => props.theme['--yellow']};
    }

    p {
        color: ${props => props.theme['--light-gray']};
    }

    h1 {
        font-size: 50px;
    }

`

export const ContainerExp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;

    padding: 2rem 2rem 1rem 2rem;

    div{ 
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        margin-bottom: 2.5rem ;
    }
    
    h2{
        font-size: 40px;
    }

`

export const ContainerInfo = styled.section`
    display: flex;
    justify-content: space-between;

    gap: 2rem;

`

export const ButtonIcone = styled.button`
    background: ${props => props.theme['--gray-500']};

    height: 120px;
    width: 120px;

    border: 0;
    border-radius: 8px;
    padding: 0.75rem;

    transition: 0.2s;

    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

`

export const ButtonSobre = styled.button`
    display: flex;
    align-items: end;
    background: ${props => props.theme[' --dark-gray']};
    color: ${props => props.theme['--white']};

    border: 0;
    border-radius: 8px;

    width: 277px;
    height: 180px;

    padding: 2rem 2rem 1rem 2rem;

    font-size: 40px;
    font-weight: 900;
    text-align: end;
`

export const ButtonContato = styled.button`
    display: flex;
    align-items: end;
    background: ${props => props.theme['--yellow']};

    width: 277px;
    height: 180px;

    border: 0;
    border-radius: 8px;

    padding: 2rem 2rem 1rem 2rem;

    font-size: 40px;
    font-weight: 900;
    text-align: end;
`

export const ContainerProjetos = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: border-box;

    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;

    padding: 1rem 2rem 2rem 2rem;

    h2{
        font-size: 40px;
        letter-spacing: 1rem;
    }

    div{
        display: flex; 
        align-items: center;

        gap: 3.75rem;
        
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        display: flex;
        padding: 1rem;
        background: ${props => props.theme['--yellow']};
        border: 0;
        border-radius: 100%;
        font-weight: 800;
        position: static ;

    }

    span{
        background: ${props => props.theme['--light-gray']};
        width: 180px;
        height: 112px;
        border-radius: 8px;

        transition: 0.2s;

        &:hover {
            transform: scale(1.1);
        }
    }
`