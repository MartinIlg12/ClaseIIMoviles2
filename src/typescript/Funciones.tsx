import React from 'react'

export const Funciones = () => {
    //funcion de retorno
    const sumar=(num1: number, num2: number): number=>{
        return num1 + num2;
    }
  return (
    <div>
        <h3>Funciones TypeScript</h3>
        <span>El resultado es: {sumar(7,9)}</span>
    </div>
  )
}
