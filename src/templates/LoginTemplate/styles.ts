import styled from "styled-components";
import theme from "../../styles/theme";

export const ContainerIntro = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.primary};

  @media (max-width: 425px) {
    img {
      display: none;
    }
  }

  img {
    max-width: 50%;
    width: 100%;
    border-radius: 8px;
  }
`;

export const Icon = styled.div`
  width: 10rem;
  height: 10rem;
  background: ${theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyForm = styled.form`
  display: flex;
  max-width: 40rem;
  width: 100%;
  flex-direction: column;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    max-width: 30rem;
  }

  @media (max-width: 768px) {
    max-width: 25rem;
  }

  @media (max-width: 425px) {
    width: 40rem;
  }

  input {
    padding: 1rem;
    outline: none;
    width: 100%;
    border-radius: 8px;
    font-weight: 500;
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    border: 1px solid gray;
  }

  input::placeholder {
    font-size: 1.4rem;
    color: ${(p) => p.theme.colors.gray};
  }

  button {
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

export const Box = styled.div`
  max-width: 100rem;
  width: 100%;
  min-height: 50rem;
  display: flex;
  border-radius: 8px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  background: #fff;

  @media (max-width: 1024px) {
    max-width: 80rem;
  }

  @media (max-width: 768px) {
    max-width: 60rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    height: 30rem;
    align-items: center;
    justify-content: center;
    width: 30rem;
  }
`;

export const Fomulary = styled.div`
  flex-direction: column;
  max-width: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
