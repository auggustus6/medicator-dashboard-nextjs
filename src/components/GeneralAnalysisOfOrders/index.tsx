import ActiveCitiesRejectedCard from "../ActiveCitiesRejectedCard";
import ApprovedCustomersCard from "../ApprovedCustomersCard";
import ApprovedFormulasCard from "../ApprovedFormulasCard";
import TotalRecipesCard from "../TotalRecipesCard";

import * as Styles from "./styles";

const GeneralAnalysisOfOrders = () => {
  return (
    <Styles.Teste>
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
      </Styles.LineFlex>
    </Styles.Teste>
  );
};
export default GeneralAnalysisOfOrders;
