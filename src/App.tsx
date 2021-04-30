import { useState } from "react";
import { createServer, Model } from "miragejs";

import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from "./styles/global";
import { Header } from './components/header'
import { Dashboard } from './components/Dashboard'
import { TransactionsTable } from './components/Transactions'

createServer({

  models:{
    transactions: Model
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Desenvolvimento de Site',
          amount: 1300,
          type: 'deposity',
          category: 'venda',
          createAt: new Date('2021-04-15 11:00:00')
        },
        {
          id: 2,
          title: 'Compras',
          amount: 500,
          type: 'withdraw',
          category: 'casa',
          createAt: new Date('2021-04-21 08:00:00')
        }
      ]
    })
  },

  routes() {

    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
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
