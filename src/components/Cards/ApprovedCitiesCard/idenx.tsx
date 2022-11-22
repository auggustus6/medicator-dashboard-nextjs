import HorizontalBarChart from "../../Charts/HorizontalBarChart";
import H3 from "../../Labels/H3";
import * as Styles from "./styles";

const ApprovedCitiesCard = () => {
  return (
    <Styles.ActiveCities>
      <H3 title="TOP 5 - CIDADES - ATIVOS APROVADOS" />
      <Styles.ContainerApprovedCities>
        <HorizontalBarChart />
      </Styles.ContainerApprovedCities>
    </Styles.ActiveCities>
  );
};

export default ApprovedCitiesCard;
