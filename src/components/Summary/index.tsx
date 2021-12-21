import { Container } from './styles'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img className='logo' src={incomeImg} alt='Logo' title='incomeImg' />
        </header>
        <strong>
          R$ 6000,00
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img className='logo' src={outcomeImg} alt='Logo' title='outcomeImg' />
        </header>
        <strong>
          - R$ 5000,00
        </strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img className='logo' src={totalImg} alt='Logo' title='totalImg' />
        </header>
        <strong>
          R$ 1000,00
        </strong>
      </div>
    </Container>
  )
}
