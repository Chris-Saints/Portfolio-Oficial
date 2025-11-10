import styled from "styled-components";

export const Containerbase = styled.main`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    width: 100%;

    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;

    padding: 1rem 2rem 2rem 2rem;

    margin-bottom: 4rem;

    h1{
        font-size: 40px;

    }

    @media (max-width: 1280px) {
        max-width: 610px;
    }
`




export const LineProject = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    padding: 2rem 0;

    border-bottom: solid 3px ${props => props.theme['--yellow']};

    &:last-child {
        border-bottom: 0;
    }

`

export const ContainerTask = styled.a`
    display: flex;
    flex-direction: column;

    border: 0;

    border-radius: 15px;
    height: 11.3rem;
    width: 14.25rem;

    transition: 0.2s;

    cursor: pointer;

    text-decoration: none;

    


    img{
        background: ${props => props.theme['--light-gray']};
        border-radius: 8px 8px 0 0;

        height: 9rem;
        width: 100%;
    }

    div {
        background:  ${props => props.theme['--gray-500']};
        color: ${props => props.theme['--white']};
        
        height: 3rem;
        width: 100%;
        padding: 0.2rem 0 0 1rem;
        border-radius: 0 0 8px 8px;

        text-align: start;
    }

    &:hover{
        border: solid 5px ${props => props.theme[' --dark-gray']};
        outline: solid 5px ${props => props.theme['--yellow']};
        transform: scale(1.2);
    }
`