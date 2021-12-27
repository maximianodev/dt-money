import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {

  return (
    <Container>
      <Content>
        <img className='logo' src={logoImg} alt='Logo' title='Homepage' />
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
