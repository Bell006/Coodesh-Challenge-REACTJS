import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 3.5rem;

    display: flex;
    align-items: center;

    margin-bottom: 0.8rem;
    border-radius: 2rem;

    background-color: ${({ theme }) => theme.COLORS.WHITE};

    > input {
        height: 3rem;
        width: 100%;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.BLACK};

        padding: 1.2rem;
        border: 0;

        border-radius: 1.25rem;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GREY_300};
        }
    };

    >  svg {
            margin-left: 1.6rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_500}; 
        }

`;
