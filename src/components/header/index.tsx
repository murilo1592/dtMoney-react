import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

// CRIANDO INTERFACE PARA REPASSE DE FUNÇÃO COMO PARÂMETRO

interface HeaderProps{
    onOpenNewModal: () => void;
}

export function Header({onOpenNewModal}: HeaderProps) {
    return (
        <Container>

            <Content>
                <img src={logoImg} alt="logo"></img>
                <button onClick={onOpenNewModal}>
                    Nova Transação
                </button>
            </Content>

        </Container>
    )
}