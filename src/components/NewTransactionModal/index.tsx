import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { Container, ContainerTransactionType, RadioBox } from './styles'

import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/app'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void; // TIPO FUNÇÃO
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title, 
            value, 
            category, 
            type
        }
    
        await api.post('/transactions', data)

        setTitle('')
        setCategory('')
        setType('deposit')
        setValue(0)

        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                className="react-modal-close"
                onClick={onRequestClose}
            >
                <img src={CloseImg} alt="Fechar Modal" />
            </button>

            <Container>

                <h2>Cadastrar nova Transação</h2>

                <input
                    placeholder="Nome"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                    placeholder="Valor"
                />

                <ContainerTransactionType>

                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={OutcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>

                </ContainerTransactionType>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit" onClick={handleCreateNewTransaction}>Cadastrar</button>

            </Container>
        </Modal>
    )
}