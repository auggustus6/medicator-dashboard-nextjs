import PieChart from "../../Charts/PieChart";
import * as Styles from "./styles";

const ApprovedFormulasCard = () => {
  return (
    <Styles.CardApproved>
      <Styles.CardHeader>
        <Styles.Aproved>
          <h3>FÓRMULAS APROVADAS</h3>
          <p>344</p>
        </Styles.Aproved>
        <Styles.InProgress>
          <h3>FÓRMULAS EM ANDAMENTO</h3>
          <p>5</p>
        </Styles.InProgress>
        <Styles.Rejected>
          <h3>FÓRMULAS REJEITADAS</h3>
          <p>111</p>
        </Styles.Rejected>
      </Styles.CardHeader>
      <Styles.ContainerPie>
        <PieChart />
      </Styles.ContainerPie>
    </Styles.CardApproved>
  );
};

export default ApprovedFormulasCard;
