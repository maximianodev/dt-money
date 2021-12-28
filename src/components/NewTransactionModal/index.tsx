import { useState } from "react"
import Modal from 'react-modal'

import type { FormEvent } from 'react'

import { Container, RadioBox, TransactionTypeContainer } from "./styles"

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from "../../services/api"

Modal.setAppElement('#root')

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      value,
      title,
      category
    }

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar informação</h2>

        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <input
          value={value}
          onChange={event => setValue(Number(event.target.value))}
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>

          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          value={category}
          onChange={event => setCategory(event.target.value)}
          type="text"
          placeholder="Categoria"
        />

        <button
          type="submit"
          onClick={handleCreateNewTransaction}
        >Cadastrar</button>
      </Container>
    </Modal>
  )
}
