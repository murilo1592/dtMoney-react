import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

export function Header(){
    return (
        <Container>

            <Content>

            <img src={logoImg} alt="logo"></img>
            <button>Nova Transação</button>

            </Content>

        </Container>
    )
}