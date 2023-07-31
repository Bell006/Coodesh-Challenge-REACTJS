import styled from "styled-components";

export const Container = styled.div`
    width: clamp(12rem, 80vw, 90rem);
    padding: 2rem 0;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 2rem;
    font-size: clamp(1.1rem, 2vw, 1.5rem);

    display: flex;
    justify-content: center;
    
    th,
    td {
        padding: .2rem;
        text-align: left;
        border-radius: 1rem;
    }

    th {
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        color: ${({ theme }) => theme.COLORS.YELLOW}; 
    }

    tr:nth-child(odd) {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }

    @media (min-width: 750px) {
        width: 100%;
        padding: 2rem;

        font-size: 1.8rem;

        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 2rem;

        display: flex;
        justify-content: center;
        
        th,
        td {
            padding: 0.8rem;
        }
    }
`;
