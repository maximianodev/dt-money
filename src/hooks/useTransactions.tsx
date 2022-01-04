import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface ITransaction {
  id: number
  title: string
  type: string
  category: string
  ammount: number
  createdAt: Date
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionsProviderProps {
  children: ReactNode
}

interface ITransactionsContextData {
  transactions: ITransaction[]
  createTransaction: (transaction: ITransactionInput) => Promise<void>
}

const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
)

export const TransactionsProvider = ({ children }: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response =>
        setTransactions(response.data.transactions)).catch(err => console.log(err))
  }, [])

  async function createTransaction(transactionInput: ITransactionInput) {
    const response = await api.post('/transactions',
      { ...transactionInput, createdAt: new Date() }
    )
    const { transactions: transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}