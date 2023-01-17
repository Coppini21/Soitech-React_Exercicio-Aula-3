import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 715px;
        width: 100%;
        background: #0F1F37;
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;