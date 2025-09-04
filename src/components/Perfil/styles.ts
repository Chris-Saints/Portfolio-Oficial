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

`


export const ImgPerfil = styled.img`
    background: #f379b2;
    height: 150px;
    width: 150px;

    outline: solid 5px ${props => props.theme['--yellow']};
    border: solid 5px ${props => props.theme[' --dark-gray']};
    border-radius: 75px;

    margin-bottom: 1rem;

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
`

export const NavSocial = styled.nav`
    display: flex;
    gap: 1rem;
`

export const AnchorSocial = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme['--gray-500']};

    height: 60px;
    width: 60px;

    border-radius: 8px;
    padding: 0.75rem;

    margin-bottom: 2.5rem;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
        color: ${props => props.theme['--yellow']};
    }
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 14rem;
`

export const ButtonContato = styled.button`

    background: ${props => props.theme['--yellow']};

    padding: 0.59rem;
    border: solid 0.31rem ${props => props.theme['--yellow']};
    border-radius: 8px;

    font-size: 18px;
    font-weight: 600;

    width: 100%;

    transition: 0.2s;

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

    transition: 0.2s;

    &:hover {
        background: ${props => props.theme[' --dark-gray']};
        border: solid 0.31rem ${props => props.theme['--gray-500']};
        font-weight: 600;
    }
`