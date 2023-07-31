import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4rem;
    padding: 1rem 1rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background: ${({ theme }) => theme.COLORS.YELLOW};;
    border-radius: 2rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
`;
