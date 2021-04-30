import { useEffect, useState } from 'react';
import { api } from '../../services/app';
import { Container } from './styles'

interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransaction] = useState<Transaction[]>([])

    useEffect(() => {
        api.get("transactions")
            .then(response => setTransaction(response.data.transactions))
    }, []);

    console.log(transactions)

    return (
        <Container>

            <table>

                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>

                <tbody>

                    {transactions.map(transaction => {

                        return (

                            <tr key={transaction.id}>

                                <td>{transaction.title}</td>

                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>

                                <td>{transaction.category}</td>

                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createAt))}</td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>

        </Container>
    )

}