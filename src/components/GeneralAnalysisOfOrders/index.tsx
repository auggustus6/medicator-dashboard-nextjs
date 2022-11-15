import ApprovedCustomers from "../ApprovedCustomers";
import ApprovedFormulasCard from "../ApprovedFormulasCard";
import PieChart from "../PieChart";
import TotalRecipesCard from "../TotalRecipesCard";

import * as Styles from "./styles";

const GeneralAnalysisOfOrders = () => {
  return (
    <Styles.Teste>
      <Styles.LineOne>
        <TotalRecipesCard />
        <ApprovedFormulasCard />
      </Styles.LineOne>
      <Styles.LineTwo>
        <ApprovedCustomers />
        <TotalRecipesCard />
      </Styles.LineTwo>
    </Styles.Teste>
  );
};
export default GeneralAnalysisOfOrders;
