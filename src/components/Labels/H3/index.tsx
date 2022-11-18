type PropsTitle = {
  title: string;
};

const H3 = ({ title }: PropsTitle) => {
  return <h3>{title}</h3>;
};

export default H3;
