import styled from "styled-components";
import theme from "../../../../styles/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  align-self: flex-start;
  margin-left: 1rem;

  b {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  span {
    margin-bottom: 1rem;
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const BoxInput = styled.div`
  max-width: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Box = styled.div`
  width: 50rem;
  height: 50rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);

  button {
    margin-top: 3rem;
    padding: 1.6rem 3.2rem;
    border-radius: 50px;
    font-size: 1.8rem;
    line-height: 3.2rem;
    font-weight: 500;
    background: ${theme.colors.secondary};
    color: #fff;
    cursor: pointer;
    outline: none;
    border: none;
  }

  button:hover {
    background: ${theme.colors.primary};
  }
`;
