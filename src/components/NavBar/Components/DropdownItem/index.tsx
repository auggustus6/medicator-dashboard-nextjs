import * as Styles from "./styles";

interface DropdownItemProps {
  img: string;
  text: string;
}

const DropdownItem = ({ img, text }: DropdownItemProps) => {
  return (
    <Styles.Dropdownitem>
      <img src={img} />
      <a href="#">{text}</a>
    </Styles.Dropdownitem>
  );
};

export default DropdownItem;
