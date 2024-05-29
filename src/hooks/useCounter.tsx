import { useState } from "react"

export const useCounter = (numeroInicial: number=10) => {
  //hook useState
  const [valor, setValor] = useState<number>(numeroInicial)
  //funcion cambiar valor del contador suma
  const contador = (numero : number) =>{
      setValor(valor+numero)
  }
  //funcion cambiar valor del contador resta
  const contadorResta = (numero : number) =>{
      setValor(valor-numero)
  }
  //return objeto
  return{
    //valor: valor,
    //contador: contador
    valor,
    contador,
    contadorResta
  }
}
