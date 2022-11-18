import styled, { css } from "styled-components";

export const CardApproved = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

export const ContainerPie = styled.div`
  max-width: 30rem;
  width: 100%;
  margin-top: 4rem;
`;

export const Aproved = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 3rem;
    font-weight: bold;
    color: green;
  }
`;

export const InProgress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 3rem;
    font-weight: bold;
    color: orange;
  }
`;
export const Rejected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 3rem;
    font-weight: bold;
    color: red;
  }
`;
