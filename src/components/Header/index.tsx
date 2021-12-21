import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img className='logo' src={logoImg} alt='Logo' title='Homepage' />
        <button type='button'>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
