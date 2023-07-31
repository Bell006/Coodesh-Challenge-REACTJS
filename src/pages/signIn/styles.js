import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 40% auto;
    grid-template-areas: 
    "header"
    "form";
    grid-row-gap: 5rem;
    align-items: end;
    justify-items: center;

    >header {
        grid-area: header;
        width: 28rem;

        .imgContainer {
            display: flex;
            justify-content: center;

            >img {
                width: 8rem;
            }
        }
        
        h1 {
            width: 28rem;
            margin-top: 8rem;
            font-size: 2.3rem;
            font-style: italic;
        }
    }

    span, a {
        color: ${({ theme }) => theme.COLORS.YELLOW};
        font-weight: 600;
    }
`;

export const Form = styled.form`
    width: 28rem;
    height: 100%;

    grid-area: form;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    section {
        width: 24rem;
        margin: 0 auto;

        text-align: center;
        font-size: 1.4rem;

        Button:nth-child(1){
            margin-bottom: 4rem;
        }

        p {
            margin-bottom: 1rem;
        }
    }
`;
