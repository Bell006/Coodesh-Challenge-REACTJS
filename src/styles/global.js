import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    html {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        ::-webkit-scrollbar
            {
                width: 1rem;
            }

        ::-webkit-scrollbar-thumb
        {
            background-color: ${({ theme }) => theme.COLORS.YELLOW};
            border-radius: 1rem;
        }   
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a, button {
        text-decoration: none;
        border: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    } 

    button:hover, a:hover {
        filter: brightness(0.92);
    } 
`;