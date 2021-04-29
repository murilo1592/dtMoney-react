import Modal from 'react-modal'
import { Container,  ContainerTransactionType } from './styles'

import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void; // TIPO FUNÇÃO
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button" className="react-modal-close" onClick={onRequestClose}>
                <img src={CloseImg} alt="Fechar Modal" />
            </button>

            <Container>
                <h2>Cadastrar nova Transação</h2>
                <input
                    placeholder="Nome" />

                <input
                    type="number"
                    placeholder="Valor" />

                    <ContainerTransactionType>

                        <button type="button">
                            <img src={IncomeImg} alt="Entrada" />
                            <span>Entrada</span>
                        </button>

                        <button type="button">
                            <img src={OutcomeImg} alt="Saída" />
                            <span>Saída</span>
                        </button>

                    </ContainerTransactionType>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}