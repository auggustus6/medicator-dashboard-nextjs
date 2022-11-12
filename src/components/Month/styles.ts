import styled, { css } from "styled-components";

export const Month = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 50rem;
    width: 100%;
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    flex-direction: column;
    padding: 1rem;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background: #222;
    padding: 1rem;

    p {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: 600;
      text-align: center;
    }
  `}
`;
