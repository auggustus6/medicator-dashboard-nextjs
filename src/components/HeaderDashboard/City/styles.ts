import styled, { css } from "styled-components";

export const City = styled.div`
  ${({ theme }) => css`
    display: flex;
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    flex-direction: column;
    padding: 1rem;
  `}
`;

export const CityName = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    text-align: center;
    font-weight: 600;
    color: ${theme.colors.grayLigth};
  `}
`;

export const CityTitle = styled.div``;
