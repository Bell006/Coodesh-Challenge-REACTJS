import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 2rem;

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
        max-width: 28rem;

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
        }
    }

    span, a {
        color: ${({ theme }) => theme.COLORS.YELLOW};
    }
`;

export const Form = styled.form`
    max-width: 28rem;
    height: 100%;

    grid-area: form;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    section {
        width: 24rem;
        margin: 0 auto;

        font-size: 1.4rem;

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
`;

export const UploadField = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 2rem;

    > label {
        height: 12rem;
        width: 30rem;
        padding: 3rem;
        border-radius: 1.8rem;

        position: relative;

        display: flex;
        align-items: center;
        gap: 1rem;

        font-size: 2rem;
        
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

        .label-text {
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        }
    }

    >label:hover {
        cursor: pointer;
    }

    input {
        display: none;
    }

    svg {
        width: 6rem;
        height: 5rem;
    }
`;


