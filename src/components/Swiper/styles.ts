import { styled } from "styled-components";

export const Item = styled.div`
    border-radius: 8px;
    overflow: hidden;
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin: 0.5rem 0;


    img {
        width: 100%;
        height: 100%;
        transition: transform 0.4s ease;
        border:  solid 3px transparent;
    }

    &:hover img {
        border-top:  solid 3px ${props => props.theme['--yellow']};
        border-right:  solid 3px ${props => props.theme['--yellow']};
        border-left:  solid 3px ${props => props.theme['--yellow']};
    }

    &:hover > div {
        opacity: 1;
        transform: translateY(0);
        border-bottom:  solid 3px ${props => props.theme['--yellow']};
        border-right:  solid 3px ${props => props.theme['--yellow']};
        border-left:  solid 3px ${props => props.theme['--yellow']};
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
  opacity: 20%;
  transform: translateY(100%);
  transition: all 0.4s ease;
  border-radius: 0 0 12px 12px;
  font-weight: bold;
  font-size: 1rem;
  
` 