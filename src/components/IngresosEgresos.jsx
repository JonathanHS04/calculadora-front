import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

const IngresosEgresos = () => {

    const {gastos} = useContext(GlobalContext)

    const importes = gastos.map(gasto => gasto.importe)

    const ingresos = importes
            .filter(importe => importe > 0)
            .reduce((acc, item) => (acc += item), 0).toFixed(2)
    const egresos = importes
            .filter(importe => importe < 0)
            .reduce((acc, item) => (acc += item), 0).toFixed(2)


  return (
    <div className="inc-exp-container">
        <div>
            <h4>Ingresos</h4>
            <p className="money plus">${ingresos}</p>
        </div>
        <div>
            <h4>Egresos</h4>
            <p className="money minus">-${Math.abs(egresos)}</p>
        </div>
    </div>
  )
}

export default IngresosEgresos