import { useState } from "react";
import { createServer } from "miragejs";

import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from "./styles/global";
import { Header } from './components/header'
import { Dashboard } from './components/Dashboard'
import { TransactionsTable } from './components/Transactions'

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposity',
          category: 'Food',
          createAt: new Date()
        }
      ]
    })
  }
})

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function hendleOpenModalTransaction() {
    setIsNewTransactionModalOpen(true)
  }

  function hendleCloseModalTransaction() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewModal={hendleOpenModalTransaction} />

      <Dashboard />

      <TransactionsTable />

      <GlobalStyle />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={hendleCloseModalTransaction}
      />

    </>
  );
}
