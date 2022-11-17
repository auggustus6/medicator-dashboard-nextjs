import styled, { css } from "styled-components";

export const HeaderDashboard = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;

export const CityAndMonth = styled.div`
  display: flex;
  flex-direction: column;
`;
