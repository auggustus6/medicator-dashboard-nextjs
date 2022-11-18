import styled, { css } from "styled-components";

export const ActiveCities = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    padding: 1rem;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      align-self: flex-start;
    }
  `}
`;

export const ContainerApprovedCities = styled.div`
  max-width: 50rem;
  width: 100%;
  margin-top: 2rem;
`;
