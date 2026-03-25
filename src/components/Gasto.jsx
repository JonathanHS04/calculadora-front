import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Gasto = ({ gasto }) => {
    const { deleteGasto } = useContext(GlobalContext)
    const signo = gasto.importe < 0 ? "-" : "+"
  return (
    <li className={gasto.importe < 0 ? "minus" : "plus"}>
      {gasto.descripcion} <span>{signo}{Math.abs(gasto.importe)}</span>
      <button className="delete-btn" onClick={() => deleteGasto(gasto._id)}>x</button>
    </li>
  )
}

export default Gasto