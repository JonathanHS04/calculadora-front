import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Gasto from './Gasto'

const GastosLista = () => {
  const { gastos } = useContext(GlobalContext)

  return (
    <>
        <h3>Gastos</h3>
        <ul className="list">
            {gastos.map(gasto=> (
                <Gasto key={gasto._id} gasto={gasto} />
            ))}

        </ul>
    </>
  )
}

export default GastosLista