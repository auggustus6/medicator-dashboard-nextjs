import styled, { css } from "styled-components";

export const ActiveCitiesRejectedCard = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    padding: 1rem;
    flex: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column; ;
  `}
`;

export const ActiveCitiesContent = styled.div``;

export const ContainerHorizontalChart = styled.div`
  max-width: 70rem;
  width: 100%;
  margin-top: 2rem;
`;
