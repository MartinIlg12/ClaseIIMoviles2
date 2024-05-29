import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
        //Hook useState
        const [valor, setvalor] = useState<boolean>(false)
        //funcion cambiar valor useState
        const cambiarValor = () =>{
            setvalor(!valor);
        }
        //hook - useEffect
        useEffect(() => {
          console.log('Desde el useEffect');
          //dependencia
        },[valor]);
        
    return (
    <div>
        <h3>Hook - Use Effect</h3>
        <button onClick={cambiarValor}>Cambiar Valor</button>
    </div>
  )
}
