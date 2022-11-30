import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export const MenuTrigger = styled.div`
  img {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background: #fff;
  top: 10px;
  right: 100px;
  border-radius: 8px;
  padding: 1rem 2rem;
  width: 20rem;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);

  h3 {
    text-align: center;
    padding: 2rem 0;
    font-weight: 500;
    font-size: 1.8rem;
    color: #555;
    line-height: 1.2rem;
  }

  span {
    font-size: 1.4rem;
    color: #cecece;
    font-weight: 400;
  }

  ul li {
    padding: 1rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);

    a {
      font-size: 1.6rem;
      color: #222;
      &:hover {
        color: #8f8f8f;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 35px;
    right: -9px;
    height: 20px;
    width: 20px;
    background: #fff;
    transform: rotate(45deg);
  }
`;
