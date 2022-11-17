import styled, { css } from "styled-components";

export const Teste = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LineFlex = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;

  @media (max-width: 1090px) {
    flex-direction: column;
  }
`;
