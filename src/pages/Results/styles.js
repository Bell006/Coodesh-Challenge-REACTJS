import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 2rem;

    display: grid;
    grid-template-rows: 24% auto 15%;
    grid-template-areas: 
    "header"
    "main"
    "section";
    grid-row-gap: 3rem;
    align-items: end;
    justify-items: center;
    justify-content: center;

    > header {
        grid-area: header;
        max-width: 28rem;

        >img {
            width: 8rem;
        }
    }

    main {
        grid-area: main;
        width: clamp(15rem, 80vw, 90rem);
        height: 100%;

        .results, h1 {
            display: flex;
        }

        h1 {
            width: 100%;
            font-size: 2.3rem;

            justify-content: space-between;
            align-items: flex-end;

            margin-bottom: 2rem;

            .exit {
                background: none;

                margin-top: 3rem;
                color: ${({ theme }) => theme.COLORS.YELLOW};

                display: flex;
                gap: .5rem;
            
                > svg {
                    width: 2.5rem;
                    height: 2.5rem;
                }
            }
        }

        .results {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    section {
        grid-area: section;
        width: 24rem;
        height: 100%;
        margin: 0 auto;

        text-align: center;
        
        p {
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        Button:nth-child(1){
            margin-bottom: 5rem;
        }
    }
`;




