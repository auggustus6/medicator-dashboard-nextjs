import City from "../City";
import Month from "../Month";
import * as Styles from "./styles";

const CardSide = () => {
  return (
    <Styles.CardSide>
      <City />
      <Month />
    </Styles.CardSide>
  );
};

export default CardSide;
