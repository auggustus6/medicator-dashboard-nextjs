import { useState } from "react";
import OtpInput from "react-otp-input";
import * as Styles from "./styles";

const SendCode = () => {
  const [otp, setOtp] = useState("");
  return (
    <Styles.Container>
      <Styles.Box>
        <Styles.BoxInput>
          <Styles.Content>
            <b>Validação de Login</b>
            <p>Por favor, insira o código de validação recebido</p>
            <span>Código</span>
          </Styles.Content>
          <OtpInput
            value={otp}
            onChange={(otp: any) => setOtp(otp)}
            numInputs={4}
            separator={<span>-</span>}
            inputStyle={{
              width: "5rem",
              height: "5rem",
              margin: "0 1rem",
              fontSize: "3rem",
              borderRadius: 4,
              border: "1px solid rgba(0,0,0,0.3)",
            }}
          />
        </Styles.BoxInput>
        <button onClick={() => console.log(otp)}>Enviar código</button>
      </Styles.Box>
    </Styles.Container>
  );
};

export default SendCode;
