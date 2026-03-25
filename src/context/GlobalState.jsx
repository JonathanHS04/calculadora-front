import React, { createContext, useReducer, useEffect, use } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    gastos: [
        {id: 1, descripcion: "Flores", importe: -20},
        {id: 2, descripcion: "Sabritas", importe: -25},
        {id: 3, descripcion: "Salario", importe: 500},
        {id: 4, descripcion: "Fotos", importe: 600},
    ],
    loading: true,
    error: null
}

const API_URL = "https://calculadora-back-972t.onrender.com/api/movimientos"

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        getGastos()
    }, [])

    async function getGastos() {
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
            dispatch({
                type: "GET_GASTOS",
                payload: data
            })
        } catch (error) {
            dispatch({
                type: "GASTOS_ERROR",
                payload: error.message
            })
        }
    }

    async function deleteGasto(id) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            })
            dispatch({
                type: "DELETE_GASTO",
                payload: id
            })
        } catch (error) {
            dispatch({
                type: "GASTOS_ERROR",
                payload: error.message
            })
        }
    }

    async function addGasto(gasto) {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(gasto)
            })
            const data = await response.json()
            dispatch({
                type: "ADD_GASTO",
                payload: data
            })
        } catch (error) {
            dispatch({
                type: "GASTOS_ERROR",
                payload: error.message
            })
        }
    }



    return (<GlobalContext.Provider value={{
        gastos: state.gastos,
        loading: state.loading,
        error: state.error,
        deleteGasto,
        addGasto
    }}>
        {children}
    </GlobalContext.Provider>)


}