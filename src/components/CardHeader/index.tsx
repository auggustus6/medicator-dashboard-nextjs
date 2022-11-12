import * as Styles from "./styles";

interface PropsCardHeader {
  title: string;
  content: string;
}

const CardHeader = ({ title, content }: PropsCardHeader) => {
  return (
    <Styles.CardDoctor>
      <Styles.Title>
        <h4>{title}</h4>
      </Styles.Title>
      <Styles.Content>
        <p>{content}</p>
      </Styles.Content>
    </Styles.CardDoctor>
  );
};

export default CardHeader;
