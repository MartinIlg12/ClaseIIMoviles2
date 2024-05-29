import React, { useState } from 'react'

export const Contador = () => {
    //hook useState
    const [valor, setValor] = useState<number>(0)
    //funcion cambiar valor del contador suma
    const contador = (numero : number) =>{
        setValor(valor+numero)
    }
    //funcion cambiar valor del contador resta
    const contadorResta = (numero : number) =>{
        setValor(valor-numero)
    }
  return (
    <div>
        <h3>Contador: <small>{valor}</small></h3>
        <button 
        className='btn btn-primary'
        onClick={()=>contador(1)}>+1</button>
        &nbsp;
        <button className='btn btn-primary'
        onClick={()=>contadorResta(1)}>-1</button>
    </div>
  )
}
