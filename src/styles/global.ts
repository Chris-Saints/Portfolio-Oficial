import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme['--gray']};
        color: ${props => props.theme['--white']};
    }

    body, textarea, input, button {
        font-family: "Jaldi", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button:hover {
        cursor: pointer;
    }
`