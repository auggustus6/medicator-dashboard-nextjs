import CardHeader from "../CardHeader";
import CardSide from "../CardSide";
import * as Styles from "./styles";

const HeaderDashboard = () => {
  return (
    <Styles.HeaderDashboard>
      <CardHeader title="Médico" content="BRUNA SCARENSE LEITE DE OLIVEIRA" />
      <CardHeader title="Registro" content="CRM-SP-156630" />
      <CardHeader title="Especialidade" content="ENDOCRINOLOGISTA" />
      <CardHeader title="Médico" content="BRUNO BARONI" />
      <Styles.CityAndMonth>
        <CardSide />
      </Styles.CityAndMonth>
    </Styles.HeaderDashboard>
  );
};

export default HeaderDashboard;
