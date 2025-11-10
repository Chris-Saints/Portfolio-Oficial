import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-bottom: 3rem;

    gap: 2rem;
    

    @media (max-width: 1280px) {
        max-width: 610px;
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

        margin-bottom: 1rem ;
    }
    
    h2{
        font-size: 40px;
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
    flex-wrap: wrap;
    box-sizing: border-box;

    background: ${props => props.theme[' --dark-gray']};
    border-top: solid 5px ${props => props.theme['--yellow']};
    border-radius: 8px;

    padding: 1rem 2rem 2rem 2rem;

    h2{
        font-size: 40px;
        letter-spacing: 0.5rem;
    }

`

export const ContainerSlider = styled.section`
    width: 100%;
    overflow: hidden;
    position: relative;
    background: ${props => props.theme['--gray-500']};
    border-radius: 6px;
`

export const BotaoEsquerdo = styled.button`
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
    background: ${props => props.theme['--yellow']};
    border: none;
    border-radius: 50%;
    color: ${props => props.theme[' --dark-gray']};
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 0.75rem 0.1rem 0.7rem;
    cursor: pointer;
    z-index: 2;
    left: 0.2rem;

    &:hover {
        opacity: 80%;
    }

`

export const BotaoDireito = styled.button`
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
    background: ${props => props.theme['--yellow']};
    border: none;
    border-radius: 50%;
    color: ${props => props.theme[' --dark-gray']};
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 0.75rem 0.1rem 0.7rem;
    cursor: pointer;
    z-index: 2;
    right: 0.2rem;

    &:hover {
        opacity: 80%;
    }
`

interface SliderProps {
  translate: number;
}

export const Slider = styled.div<SliderProps>`
  display: flex;
  transition: transform 1s ease;
  transform: ${({ translate }) => `translateX(${translate}px)`};

    padding: 1rem ;

`

export const Item = styled.div`
    display: flex;
    position: relative;

    flex: 0 0 auto;
    width: 30%; /* mostra 3 por vez aproximadamente */
    aspect-ratio: 16 / 9;
    margin: 0 0.5rem;
    border-radius: 8px;
    overflow: hidden;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }

    &:hover img {
        border:  solid 3px ${props => props.theme['--yellow']};
    }

    &:hover > div {
        opacity: 1;
        transform: translateY(0);
        border-bottom:  solid 3px ${props => props.theme['--yellow']};
        border-right:  solid 3px ${props => props.theme['--yellow']};
        border-left:  solid 3px ${props => props.theme['--yellow']};
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
`

export const ItemOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  color: ${props => props.theme['--yellow']};
  text-align: center;
  opacity: 30%;
  transform: translateY(100%);
  transition: all 0.4s ease;
  border-radius: 0 0 12px 12px;
  font-weight: bold;
  font-size: 1rem;
  
` 

