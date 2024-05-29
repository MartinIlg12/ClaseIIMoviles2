//rafc
//control+k+c
import React from 'react'
//import { TiposBasicos } from './typescript/TiposBasicos';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from './typescript/Funciones';
import { Contador } from './Components/Contador';
import { ContadorCustomHook } from './Components/ContadorCustomHook';
import { ComponentUseEffect } from './Components/ComponentUseEffect';
import { Login } from './Components/Login';

export const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion TS - React</h1>
      <hr/>
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      {/* <ContadorCustomHook/> */}
      {/* <ComponentUseEffect/> */}
      <Login/>
    </div>
  )
}
export default App;
