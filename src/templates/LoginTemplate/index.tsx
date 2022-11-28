import * as Styles from "./styles";
import { UserCircle } from "phosphor-react";
import { customSwal } from "../../utils/myAlert";
import { useState } from "react";
import SendCode from "./components/code";

const Login = () => {
  const stages = [
    { id: 1, stage: "login" },
    { id: 2, stage: "sendCode" },
  ];

  const [stage, setStage] = useState(stages[0].stage);

  const handle = (e: any) => {
    e.preventDefault();
    customSwal({
      text: "Teste",
      icon: "error",
      title: "teste",
      confirmButtonText: "confim",
    });
    setStage(stages[1].stage);
  };
  return (
    <>
      {stage === "login" && (
        <Styles.ContainerIntro>
          <Styles.Box>
            <img src="/img/bg1.svg" alt="" />
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
      )}
      {stage === "sendCode" && <SendCode />}
    </>
  );
};

export default Login;
