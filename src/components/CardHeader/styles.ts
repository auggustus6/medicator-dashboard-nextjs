import styled, { css } from "styled-components";

export const CardDoctor = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  ${({ theme }) => css`
    h4 {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    p {
      font-size: ${theme.font.sizes.large};
      text-align: center;
      font-weight: 600;
      color: ${theme.colors.grayLigth};
    }
  `}
`;
