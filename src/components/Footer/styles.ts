import styled from "styled-components";

export const FooterBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    background: ${props => props.theme[' --dark-gray']};
    height: 9.1rem;
`