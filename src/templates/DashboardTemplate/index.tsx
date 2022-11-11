import React from "react";
import Layout from "../../components/Layout";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";

import * as Styles from "./styles";
import CircleDashboard from "../../components/CircleDashboard";

const DashboardTemplate = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
  );

  const data = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        label: "TOTAL DE FÓRMULAS",
        data: [400, 300, 350, 200, 280],
        borderColor: "blue",
        backgroundColor: "white",
      },
    ],
  };
  return (
    <Layout>
      <Styles.ContainerMain>
        <Styles.Container>
          <Line
            data={data}
            options={{
              responsive: true,
            }}
          />
          <CircleDashboard />
        </Styles.Container>
      </Styles.ContainerMain>
    </Layout>
  );
};

export default DashboardTemplate;
