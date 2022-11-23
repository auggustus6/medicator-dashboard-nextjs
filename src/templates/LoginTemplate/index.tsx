import * as Styles from "./styles";
import { UserCircle } from "phosphor-react";

const Login = () => {
  return (
    <Styles.ContainerIntro>
      <Styles.Box>
        <img src="/img/bg.png" alt="" />
        <Styles.Fomulary>
          <Styles.Icon>
            <UserCircle size={80} color="#fff" />
          </Styles.Icon>
          <Styles.Form>
            <input type="email" placeholder="E-mail Adrress" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </Styles.Form>
        </Styles.Fomulary>
      </Styles.Box>
    </Styles.ContainerIntro>
  );
};

export default Login;
