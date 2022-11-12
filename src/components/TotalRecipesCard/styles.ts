import styled, { css } from "styled-components";

export const ContainerTotal = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    max-width: 70rem;
    padding: 1rem;
  `}
`;

export const ContentRecipes = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: green;
  }
`;
