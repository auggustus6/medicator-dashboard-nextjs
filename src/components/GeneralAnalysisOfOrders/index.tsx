import ActiveCitiesRejectedCard from "../Cards/ActiveCitiesRejectedCard";
import ApprovedCitiesCard from "../Cards/ApprovedCitiesCard/idenx";
import ApprovedCustomersCard from "../Cards/ApprovedCustomersCard";
import ApprovedFormulasCard from "../Cards/ApprovedFormulasCard";
import Title from "../Labels/Title";
import TotalRecipesCard from "../Cards/TotalRecipesCard";
import * as Styles from "./styles";
import GeneralSalesCard from "../Cards/GeneralSalesCard";
import MonthlyEvolutionCard from "../Cards/MonthlyEvolutionCard";

const GeneralAnalysisOfOrders = () => {
  return (
    <Styles.GeneralAnalysisOfOrders>
      <Styles.LineFlex>
        <TotalRecipesCard />
        <ApprovedFormulasCard />
      </Styles.LineFlex>
      <Styles.LineFlex>
        <ApprovedCustomersCard />
        <TotalRecipesCard />
      </Styles.LineFlex>
      <Styles.LineFlex>
        <ActiveCitiesRejectedCard />
        <ApprovedCitiesCard />
      </Styles.LineFlex>
      <Title title="ANALISE - GERAL VENDAS" />
      <GeneralSalesCard />
      <MonthlyEvolutionCard />
    </Styles.GeneralAnalysisOfOrders>
  );
};
export default GeneralAnalysisOfOrders;
