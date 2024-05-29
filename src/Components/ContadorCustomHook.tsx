import { useCounter } from "../hooks/useCounter"

export const ContadorCustomHook = () => {
  //llamar Custom hook
  //Destrucuturar un objeto: tomar directo cada atributo del objeto
  const{valor, contador, contadorResta} = useCounter(40);
  return (
    <div>
        <h3>Contador con Custom Hook: <small>{valor}</small></h3>
        <button 
        className='btn btn-primary'
        onClick={()=>contador(1)}>+1</button>
        &nbsp;
        <button className='btn btn-primary'
        onClick={()=>contadorResta(1)}>-1</button>
    </div>
  )
}
