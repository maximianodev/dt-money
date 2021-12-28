import styled from "styled-components"
import { darken, transparentize } from 'polished'

const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter .3s;

    &:hover {
      filter: brightness(.9);
    }
  }
`
const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`

interface IRadioBox {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#E52e54'
}

const RadioBox = styled.button<IRadioBox>`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d7d7d7;
  border-radius: .25rem;
  
  transition: border-color .3s;
  
  background: ${({isActive, activeColor}) => isActive 
  ? transparentize(0.9, colors[activeColor])
  : 'transparent'};

  &:hover {
    border-color: ${darken(0.10, '#d7d7d7')};
  }

  span {
    margin-left: 1rem;
    font-size: 1.125rem;
    color: var(--text-title);
    display: inline-block;
  }
`


export { Container, TransactionTypeContainer, RadioBox }