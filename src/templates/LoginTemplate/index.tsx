import * as Styles from "./styles";
import { UserCircle } from "phosphor-react";
import { myAlert } from "../../utils/myAlert";

const Login = () => {
  const handle = (e: any) => {
    e.preventDefault();

    myAlert({
      position: "top-end",
      icon: "error",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <Styles.ContainerIntro>
      <Styles.Box>
        <img src="/img/bg.png" alt="" />
        <Styles.Fomulary>
          <Styles.Icon>
            <UserCircle size={80} color="#fff" />
          </Styles.Icon>
          <Styles.MyForm>
            <input type="email" placeholder="E-mail Adrress" />
            <input type="password" placeholder="Password" />
            <button onClick={handle}>Login</button>
          </Styles.MyForm>
        </Styles.Fomulary>
      </Styles.Box>
    </Styles.ContainerIntro>
  );
};

export default Login;
