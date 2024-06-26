import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root {
        --text: #A0A0A0;
    }

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    *:before,
    *:after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    h1 {
        font-size: 2rem;
        font-weight: 900;
        letter-spacing: -2px;
    }

    h3, h4, h5 {
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 6.67px;
        text-transform: uppercase;
        margin-right: auto;
    }

    p {
        font-size: 1rem;
        line-height: 22px;
        color: var(--text);
    }

    a {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: -0.67px;
        color: #000000;
        text-decoration: none;
        list-style: none;

    }

    li {
        font-size: 4em;
    }

    body {
        font-family: "league Spartan", sans-serif;
        max-width: 712px;
        min-width: 375px;
        overflow-x: hidden;
    }
`
export default GlobalStyle;



