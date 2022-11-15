import Teste from "../Teste";
import * as Styles from "./styles";

const TotalRecipesCard = () => {
  return (
    <Styles.ContainerTotal>
      <Styles.ContentRecipes>
        <h3>TOTAL DE FÓRMULAS</h3>
        <p>460</p>
      </Styles.ContentRecipes>
      <h3>EVOLUÇÃO DIÁRIA</h3>
      <Teste />
    </Styles.ContainerTotal>
  );
};

export default TotalRecipesCard;
