import * as Styles from "./styles";

type PropsTitle = {
  title: string;
};

const Title = ({ title }: PropsTitle) => {
  return (
    <Styles.Title>
      <h1>{title}</h1>
    </Styles.Title>
  );
};

export default Title;
