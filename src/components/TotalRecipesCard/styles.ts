import styled, { css } from "styled-components";

export const ContainerTotal = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;
  `}
`;

export const ContentRecipes = styled.div`
  p {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: green;
  }
`;

export const ContainerLineChart = styled.div`
  display: flex;
  align-self: center;
  flex: 1;
  max-width: 70rem;
  width: 100%;
  margin-top: 1rem;
`;
