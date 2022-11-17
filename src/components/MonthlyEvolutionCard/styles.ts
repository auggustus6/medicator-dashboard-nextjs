import styled, { css } from "styled-components";

export const ContainerMonthlyEvolution = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;
    margin-top: 2rem;
  `}
`;

export const ConrainerBar = styled.div`
  max-width: 128rem;
  width: 100%;
  display: flex;
  align-self: center;
  margin-top: 1rem;
`;
