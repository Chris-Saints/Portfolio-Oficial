import styled from "styled-components";

export const BasePerfil = styled.div`
    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    max-width: 500px;

    padding: 2rem 3.5rem;

    @media (max-width: 1280px) {
        max-width: 250px;
    }

    @media (max-width: 480px) {
        justify-content: center;
        max-width: 100vw;
        border: 0;
        border-radius: 0;
        background: transparent;
        padding: 0;
    }

`


export const ImgPerfil = styled.img`
    height: 150px;
    width: 150px;

    outline: solid 5px ${props => props.theme['--yellow']};
    border: solid 5px ${props => props.theme[' --dark-gray']};
    border-radius: 100%;

    margin-bottom: 1rem;

    @media (max-width: 1280px) {
        width: 180px;
        height: 180px;
    }

    @media (max-width: 480px){
        width: 220px;
        height: 220px;
        border-radius: 100% ;
    }
`

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2rem;
    line-height: 1.6;


    h2 {
        color: ${props => props.theme['--yellow']};

    }

    p{
        font-weight: 500;
    }

    div {
        margin: 2rem 0 0;
    }

    @media (max-width: 1280px) {
        h2 {
            font-size: 19px;
        }

        p {
            font-size: 15px;
        }
    }

    @media (max-width: 480px) {
        h2{
            font-size: 40px;
        }

        p {
            font-size: 20px;
        }

        div{
            margin-top: 0;
        }
    }
`

export const NavSocial = styled.nav`
    display: flex;
    gap: 1.5rem;

    @media (max-width: 1280px) {
        gap: 1rem;
    }

    @media (max-width: 480px) {
        gap: 2rem;
    }
`

export const AnchorSocial = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    background: ${props => props.theme['--gray-500']};

    height: 60px;
    width: 60px;

    border-radius: 8px;
    padding: 0.75rem;

    margin-bottom: 2.5rem;
    cursor: pointer;

    transition: 0.2s;

    img{
        height: 32px;
        width: 32px;
        border-radius: 6px;
    }

    &:hover {
        background: ${props => props.theme['--yellow']};
    }

    @media (max-width: 480px) {
        background: ${props => props.theme['--yellow']};

        height: 80px;
        width: 80px;

        img {
            height: 55px;
            width: 55px;
        }
    }
`


export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 14rem;

    a{
        width: 100%;
    }

    @media (max-width: 1280px) {
        a {
            width: 93%;
        }
    }

    @media (max-width: 480px) {
        width: 20rem;
        a {
            text-decoration: none;
            width: 100;
        }
    }

`

export const ButtonContato = styled.a`

    background: ${props => props.theme['--yellow']};
    color: ${props => props.theme[' --dark-gray']};
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.59rem 0;
    border: solid 0.31rem ${props => props.theme['--yellow']};
    border-radius: 8px;

    font-size: 20px;
    font-weight: bold;
    text-decoration: none;

    transition: 0.2s;

    cursor: pointer;

    &:hover {
        background: ${props => props.theme[' --dark-gray']};
        color: ${props => props.theme['--yellow']};
        border: solid 0.31rem ${props => props.theme['--yellow']};
        font-weight: 600;
    }

     @media (max-width: 480px) {
        display: none;
     }

`

export const ButtonCV = styled.button`
    background: ${props => props.theme['--gray-500']};
    color: ${props => props.theme['--white']};

    border-radius: 9px;
    padding: 0.59rem;
    border: solid 0.31rem ${props => props.theme['--gray-500']};;
    width: 100%;
    font-weight: 600;

    transition: 0.2s;

    &:hover {
        background: ${props => props.theme[' --dark-gray']};
        border: solid 0.31rem ${props => props.theme['--gray-500']};
        font-weight: 600;
    }

    @media (max-width: 480px) {
        background: ${props => props.theme[' --dark-gray']};
        color: ${props => props.theme['--yellow']};
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 1rem 1;
        border: solid 0.31rem ${props => props.theme['--yellow']};
        border-radius: 30px;
        margin: 0;
        height: 100px;

        font-size: 30px;
        font-weight: bold;

        transition: 0.2s;

        cursor: pointer;

        margin-bottom: 2rem;
    }
`