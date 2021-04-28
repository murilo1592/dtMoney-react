import { Container } from "./styles";

import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

export function Sumary() {
    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas"></img>
                </header>

                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Saídas"></img>
                </header>

                <strong>-R$300,00</strong>
            </div>

            <div className="boxTotal">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total"></img>
                </header>

                <strong>R$700,00</strong>
            </div>

        </Container>
    )
}