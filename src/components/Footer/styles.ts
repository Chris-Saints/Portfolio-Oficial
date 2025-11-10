import styled from "styled-components";

export const FooterBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    background: ${props => props.theme[' --dark-gray']};
    height: 5.1rem;
    max-width: auto;
    width: 100%;

    @media (max-width: 480px) {
        margin-bottom: 4rem;

        width: 100vw;
    }


`