import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddForm = () => {

    const [descripcion, setDescripcion] = useState('')
    const [importe, setImporte] = useState(0)

    const {addGasto} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const nuevoGasto = {
            descripcion,
            importe: +importe
        }
        addGasto(nuevoGasto)
        setDescripcion('')
        setImporte(0)
    }

  return (
    <>
      <h3>Agregar Gasto</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="descripcion">Descripción:</label>
                <input
                    type="text"
                    id="descripcion"
                    value={descripcion}
                    placeholder="Por favor teclea la descripción de tu gasto"
                    onChange={(e)=> setDescripcion(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="importe">Importe:</label>
                <input
                    type="number"
                    id="importe"
                    value={importe}
                    placeholder="Por favor teclea el importe de tu gasto"
                    onChange={(e)=>setImporte(e.target.value)}
                />
            </div>
            <button className="btn">Agregar Gasto</button>
        </form>
    </>
  )
}

export default AddForm