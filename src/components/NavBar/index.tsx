import { useState } from "react";
import * as Styles from "./styles";
import DropdownItem from "./Components/DropdownItem";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Styles.MenuContainer>
      <h1>MEDICATOR</h1>

      <Styles.MenuTrigger>
        <img
          src="/img/eu.png"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </Styles.MenuTrigger>
      {open && (
        <Styles.DropdownMenu>
          <h3>Dr.Gustavo</h3>
          <ul>
            <DropdownItem img="/img/sign-out.png" text="sair" />
          </ul>
        </Styles.DropdownMenu>
      )}
    </Styles.MenuContainer>
  );
};

export default NavBar;
