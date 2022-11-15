import CardHeader from "../CardHeader";
import CardSide from "../CardSide";
import * as Styles from "./styles";

interface DataProps {
  data: DataRegister;
}

interface DataRegister {
  nome: string;
  register: string;
  especialidade: string;
  consultor: string;
}

const HeaderDashboard = ({ data }: DataProps) => {
  return (
    <Styles.HeaderDashboard>
      <CardHeader title="Médico" content={data?.nome} />
      <CardHeader title="Registro" content={data?.register} />
      <CardHeader title="Especialidade" content={data?.especialidade} />
      <CardHeader title="Consultor" content={data?.consultor} />
      <Styles.CityAndMonth>
        <CardSide />
      </Styles.CityAndMonth>
    </Styles.HeaderDashboard>
  );
};

export default HeaderDashboard;
