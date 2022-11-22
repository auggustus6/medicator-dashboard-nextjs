import styled, { css } from "styled-components";

export const ContainerTotalSalesCard = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;

    p {
      text-align: center;
      font-size: 3rem;
      font-weight: 700;
      color: green;
    }
  `}
`;

export const ConrainerLineChart2 = styled.div`
  max-width: 128rem;
  width: 100%;
  display: flex;
  align-self: center;
  margin-top: 1rem;
`;
