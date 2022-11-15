import styled, { css } from "styled-components";

export const ContainerTotal = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
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
