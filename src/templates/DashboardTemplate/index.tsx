import React from "react";
import GeneralAnalysisOfOrders from "../../components/GeneralAnalysisOfOrders";
import HeaderDashboard from "../../components/HeaderDashboard";

import * as Styles from "./styles";

const DashboardTemplate = () => {
  return (
    <Styles.ContainerMain>
      <HeaderDashboard />
      <GeneralAnalysisOfOrders />
    </Styles.ContainerMain>
  );
};

export default DashboardTemplate;
