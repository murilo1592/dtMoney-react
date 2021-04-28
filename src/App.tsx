import { GlobalStyle } from "./styles/global";

import { Header } from './components/header'
import { Dashboard } from './components/Dashboard'
import { TransactionsTable } from './components/Transactions'

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}
