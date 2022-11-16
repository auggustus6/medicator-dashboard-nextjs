import * as Styles from "./styles";

type PropsTitle = {
  title: string;
};

const Title = ({ title }: PropsTitle) => {
  return <h1>{title}</h1>;
};

export default Title;
