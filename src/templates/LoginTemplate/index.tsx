import * as Styles from "./styles";
import { UserCircle } from "phosphor-react";

const Login = () => {
  return (
    <Styles.Intro>
      <img src="/img/bg.png" alt="" />
      <Styles.Fomulary>
        <UserCircle size={80} />
        <input type="text" />
        <input type="password" />
      </Styles.Fomulary>
    </Styles.Intro>
  );
};

export default Login;
