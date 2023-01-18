import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

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