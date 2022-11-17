import HorizontalBarChart from "../HorizontalBarChart";
import H3 from "../Labels/H3";
import * as Styles from "./styles";

const ActiveCitiesRejectedCard = () => {
  return (
    <Styles.ActiveCitiesRejectedCard>
      <H3 title="TOP 5 - CIDADES - ATIVOS REJEITADOS" />
      <Styles.ContainerHorizontalChart>
        <HorizontalBarChart />
      </Styles.ContainerHorizontalChart>
    </Styles.ActiveCitiesRejectedCard>
  );
};

export default ActiveCitiesRejectedCard;
