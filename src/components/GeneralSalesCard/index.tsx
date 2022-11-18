import H3 from "../Labels/H3";
import LineChart2 from "../LineChart2";
import * as Styles from "./styles";

const GeneralSalesCard = () => {
  return (
    <Styles.ContainerTotalSalesCard>
      <H3 title="R$ - TOTAL" />
      <p>43.739,05</p>
      <H3 title="EVOLUÇÃO DIÁRIA" />
      <Styles.ConrainerLineChart2>
        <LineChart2 />
      </Styles.ConrainerLineChart2>
    </Styles.ContainerTotalSalesCard>
  );
};

export default GeneralSalesCard;
