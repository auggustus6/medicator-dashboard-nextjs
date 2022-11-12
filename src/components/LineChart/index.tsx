import * as Styles from "./styles";
import { VictoryLine, VictoryChart } from "victory";

const data = [
  { x: "1", y: 10 },
  { x: "2", y: 20 },
  { x: "3", y: 30 },
  { x: "4", y: 40 },
  { x: "5", y: 4 },
  { x: "6", y: 2 },
  { x: "7", y: 4 },
  { x: "9", y: 6 },
  { x: "10", y: 10 },
  { x: "11", y: 20 },
  { x: "12", y: 30 },
  { x: "13", y: 40 },
];

const LineChart = () => {
  return (
    <VictoryChart>
      <VictoryLine
        data={data}
        style={{
          labels: {
            color: "red",
          },
          data: {
            stroke: "#00A6DE",
          },
        }}
      />
    </VictoryChart>
  );
};

export default LineChart;
