import * as Styles from "./styles";

const ApprovedCustomers = () => {
  return (
    <Styles.ClientApprovedCard>
      <Styles.Content>
        <Styles.ClientesApproved>
          <h3>CLIENTES COM PEDIDOS APROVADOS COMPLETO</h3>
          <p>51</p>
        </Styles.ClientesApproved>
        <Styles.PartiallyApproved>
          <h3>CLIENTES COM PEDIDOS APROVADOS COMPLETO</h3>
          <p>10</p>
        </Styles.PartiallyApproved>
      </Styles.Content>
    </Styles.ClientApprovedCard>
  );
};

export default ApprovedCustomers;
