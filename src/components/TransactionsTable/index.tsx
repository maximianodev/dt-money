import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions()

  if (!transactions.length) return null

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            (props, key) =>
              props &&
              <tr key={key}>
                <td>{props?.title}</td>
                <td className={props?.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(props?.ammount)}
                </td>
                <td>{props?.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(props?.createdAt))}
                </td>
              </tr>)}
        </tbody>
      </table>
    </Container>
  )
}
