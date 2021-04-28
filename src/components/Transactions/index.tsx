import { Container } from './styles'

export function TransactionsTable() {

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

                    <tr>
                        <td>Desenvolvimento de Sites</td>
                        <td className="deposit">R$3000,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/05/201</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="widhdraw">-R$1200,00</td>
                        <td>Casa</td>
                        <td>03/05/201</td>
                    </tr>

                </tbody>
            </table>

        </Container>
    )

}