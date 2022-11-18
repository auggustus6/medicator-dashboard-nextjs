import BarChart from "../BarChart";
import H3 from "../Labels/H3";

import * as Styles from "./styles";

const MonthlyEvolutionCard = () => {
  return (
    <Styles.ContainerMonthlyEvolution>
      <H3 title="EVOLUÇÃO MENSAL" />
      <Styles.ConrainerBar>
        <BarChart />
      </Styles.ConrainerBar>
    </Styles.ContainerMonthlyEvolution>
  );
};

export default MonthlyEvolutionCard;
