import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IngresosEgresos from './components/IngresosEgresos'
import { GlobalProvider } from './context/GlobalState'
import GastosLista from './components/GastosLista'
import AddForm from './components/AddForm'

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IngresosEgresos />
          <GastosLista />
          <AddForm />
        </div>
      </GlobalProvider>
    </>
  )
}

export default App