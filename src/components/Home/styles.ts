import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-bottom: 3rem;

    max-width: 100vw;
    width: 50%;

    gap: 2rem;
    

    @media (max-width: 1280px) {
        max-width: 610px;
    }

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

    strong{
        color: ${props => props.theme['--yellow']};
    }

    p {
        color: ${props => props.theme['--light-gray']};
    }

    h1 {
        font-size: 50px;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 65px;
            line-height: 1;
        }

        p {
            font-size: 25px;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 55px;
            line-height: 1;
        }

        p {
            font-size: 18px;
        }

    }

    @media (max-width: 390px) {
        h1 {
            font-size: 49px;
        }
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
        gap: 1rem;

        margin-bottom: 1rem ;
    }
    
    h2{
        font-size: 40px;
    }

    @media (max-width: 1024px) {
        padding-top: 0.5rem ;
        padding-bottom: 1rem;
        align-items: center;

        h2 {
            order: -1;
            font-size: 75px;
            letter-spacing: 0.3rem;
        }
    }
    
    @media (max-width: 480px) {
        padding-top: 0.5rem ;
        padding-bottom: 1rem;
        align-items: center;

        h2 {
            order: -1;
            font-size: 50px;
            letter-spacing: 0;
        }
    }

    @media (max-width: 390px) {
        h2 {
            font-size: 40px;
        }
    }

`

export const ContainerInfo = styled.section`
    display: flex;
    justify-content: space-between;

    gap: 2rem;

    @media (max-width: 1280px) {
        flex-direction: column;
    }


`

export const ButtonIcone = styled.div`
    background: ${props => props.theme['--gray-500']};
    display: flex;
    align-items: center;
    justify-content: center;

    height: 120px;
    width: 120px;

    border: 0;
    border-radius: 8px;
    padding: 0.75rem;

    transition: 0.2s;

    &:hover{
        transform: scale(1.1);
    }

    img {
        height: 4rem;
        width: 4rem;
        border-radius: 8px;
    }

    #imgReact {
        height: 4rem;
        width: 4.5rem;
    }

    #imgFigma {
        border-radius: 20px;
    }

    @media (max-width: 1024px) {

        height: 250px;
        width: 250px;

        img {
            height: 10rem;
            width: 10rem;
        }

        #imgReact {
            height: 10rem;
            width: 10.5rem;
        }

        #imgFigma {
            border-radius: 20px;
        }

        &:hover{
            transform: scale(1);
        }
    }

    @media (max-width: 950px) {
        width: 150px;
        height: 150px; 

        img {
            height: 5rem;
            width: 5rem;
        }

        #imgReact {
            height: 5rem;
            width: 5.5rem;
        }

        #imgFigma {
            border-radius: 20px;
        }
    }

    @media (max-width: 480px) {

        height: 140px;
        width: 140px;

        img {
            height: 5rem;
            width: 5rem;
        }

        #imgReact {
            height: 5rem;
            width: 5.5rem;
        }

        #imgFigma {
            border-radius: 20px;
        }

        &:hover{
            transform: scale(1);
        }
    }


    @media (max-width: 420px) {
        height: 100px;
        width: 100px;

        img {
            height: 4rem;
            width: 4rem;
        }

        #imgReact {
            height: 4rem;
            width: 4.5rem;
        }

        #imgFigma {
            border-radius: 20px;
        }

        &:hover{
            transform: scale(1);
        }
    }



    
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1280px) {
        flex-direction: row;
        gap: 0;
    }

    @media (max-width: 1024px) {
        display: none;
    }

    @media (max-width: 480px) {
        display: none;
    }

`

export const ButtonContato = styled.button`
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

    transition: 0.2s;

    &:hover{
        scale: 1.1;
        opacity:95%;
    }

`

export const ButtonSobre = styled.button`
    display: flex;
    align-items: end;
    background: ${props => props.theme['--yellow']};
    color: ${props => props.theme[' --dark-gray']};

    width: 277px;
    height: 180px;

    border: 0;
    border-radius: 8px;

    padding: 2rem 2rem 1rem 2rem;

    font-size: 40px;
    font-weight: 900;
    text-align: end;

    transition: 0.2s;

    
    opacity: 90%;

    &:hover{
        scale: 1.1;
        opacity:90%;
    }
`

export const ContainerProjetos = styled.section`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;
    align-items: center;
    justify-content: center;

    padding: 1rem 1rem 2rem ;

    h2{
        font-size: 40px;
        letter-spacing: 0.3rem;
    }

    @media (max-width: 1024px) {
        padding: 1rem 1rem 2rem ;
        

        h2 {
            font-size: 75px;
            letter-spacing: 0.9rem;
        }
    }
    @media (max-width: 768px) {
        ::-webkit-scrollbar {
            display: none;
        }
    }


    @media (max-width: 480px) {
        padding: 1rem 1rem 2rem ;
        align-items: center;
        justify-content: center;

        h2 {
            font-size: 55px;
            letter-spacing: 0;
        }
    }

    @media (max-width: 390px) {
        h2 {
            font-size: 49px;
            letter-spacing: 0;
        }
    }

`




export const ContainerSlider = styled.section`
    position: relative;
    max-width: 100vw;
    width: 100%;
    overflow: hidden;
    background: ${props => props.theme['--gray-500']};
    border-radius: 6px;
    padding: 0 0.5rem;

    @media (max-width: 1024px) {
        display: flex;
        height: 15rem;
        align-items: center;

    }

    @media (max-width: 480px) {
        
        height: 15rem;
        display: flex;
        align-items: center;

    }

    #caretleft {
        position: absolute;
        top: 48%;
        transform: translateY(-50%);
        z-index: 10;
        left: 10px;
    }

    #caretright{
        position: absolute;
        top: 48%;
        transform: translateY(-50%);
        z-index: 10;
        right: 10px;
    }

`



export const MoreProjects = styled.button`
    width: 20%;
    margin-top: 1rem;
    padding: 0.5rem 0;
    background: ${props => props.theme['--yellow']};
    border: solid 3px ${props => props.theme['--yellow']};

    border-radius: 8px;

    font-weight: bold;

    transition: 0.2s;
    margin-left: auto;
    
    &:hover {
        color: ${props => props.theme['--yellow']};
        background: ${props => props.theme[' --dark-gray']};
    }

    @media (max-width: 1024px) {
        width: 100%;
        margin: 2rem 0 0;
        padding: 0.5rem 0;
        font-size: 30px;
        &:hover {
            
            color: ${props => props.theme[' --dark-gray']};
            background: ${props => props.theme['--yellow']}; 
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 1rem 0 0;
        padding: 0%.5 0;
        font-size: 18px;
        
        &:hover {
            
            color: ${props => props.theme[' --dark-gray']};
            background: ${props => props.theme['--yellow']}; 
        }
    }
`

