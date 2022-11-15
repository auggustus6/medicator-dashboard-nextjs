import styled, { css } from "styled-components";

export const ClientApprovedCard = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grayLigth};
    border-radius: 8px;
    padding: 1rem;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column; ;
  `}
`;

export const ContainerPieClient = styled.div`
  max-width: 40rem;
  width: 100%;
  padding-top: 4rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ClientesApproved = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    max-width: 30rem;
    width: 100%;
  }

  p {
    font-size: 3rem;
    font-weight: 700;
    color: green;
  }
`;

export const PartiallyApproved = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    max-width: 30rem;
    width: 100%;
  }

  p {
    font-size: 3rem;
    font-weight: 700;
    color: orange;
  }
`;
