import ActiveCitiesRejectedCard from "../ActiveCitiesRejectedCard";
import ApprovedCitiesCard from "../ApprovedCitiesCard/idenx";
import ApprovedCustomersCard from "../ApprovedCustomersCard";
import ApprovedFormulasCard from "../ApprovedFormulasCard";
import GeneralSalesCard from "../GeneralSalesCard";
import Title from "../Labels/Title";
import MonthlyEvolutionCard from "../MonthlyEvolutionCard";
import TotalRecipesCard from "../TotalRecipesCard";

import * as Styles from "./styles";

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
