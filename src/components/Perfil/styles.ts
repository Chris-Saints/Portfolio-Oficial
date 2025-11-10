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

`


export const ImgPerfil = styled.img`
    background: #f379b2;
    height: 150px;
    width: 150px;

    outline: solid 5px ${props => props.theme['--yellow']};
    border: solid 5px ${props => props.theme[' --dark-gray']};
    border-radius: 75px;

    margin-bottom: 1rem;

    @media (max-width: 1280px) {
        width: 180px;
        height: 180px;
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

    @media (max-width: 1280px) {
        h2 {
            font-size: 19px;
        }

        p {
            font-size: 15px;
        }
    }
`

export const NavSocial = styled.nav`
    display: flex;
    gap: 1.5rem;

    @media (max-width: 1280px) {
        gap: 1rem;
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
`