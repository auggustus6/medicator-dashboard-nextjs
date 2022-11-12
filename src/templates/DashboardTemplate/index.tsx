import React from "react";
import Title from "../../components/Labels/Title";
import GeneralAnalysisOfOrders from "../../components/GeneralAnalysisOfOrders";
import HeaderDashboard from "../../components/HeaderDashboard";

import * as Styles from "./styles";
import CircleDashboard from "../../components/CircleDashboard";

const register = {
  nome: "BRUNA SCARENSE LEITE DE OLIVEIRA",
  register: "CRM-SP-156630",
  especialidade: "ENDOCRINOLOGISTA",
  consultor: "BRUNO BARONI",
};

const DashboardTemplate = () => {
  return (
    <Styles.ContainerMain>
      <HeaderDashboard data={register} />
      <Title title="ANALISE - GERAL DOS PEDIDOS" />
      <GeneralAnalysisOfOrders />
    </Styles.ContainerMain>
  );
};

export default DashboardTemplate;
