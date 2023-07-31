import { Container } from "./styles";

export function Transactions({icon: Icon, transactions,...rest}) {
    return(
        <Container transactions={transactions}>
            <table>
                <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Data</th>
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Cliente</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                    <td>{transaction.type}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.product}</td>
                    <td>{(transaction.value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>{transaction.client}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    );
}