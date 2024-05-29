//rafc
import { join } from 'path';
import React from 'react'

export const TiposBasicos = () => {
    //Variables / constantes - tipado estricto
    const nombre: string | number  = 'Martin';
    const edad: number = 22;
    const donanteOrganos: boolean = true;

    //arreglos
    const poderes: string[] = ['volar', 'velocidad', 'fuerza'];
    // arreglar elemento arreglo
    poderes.push('invisibilidad')
  return (
    <div>
        <h3>Tipos Básicos</h3>
        {nombre}, {edad}, {donanteOrganos ? 'donante' : 'No donante'}
        <br/>
        {poderes.join(', ')}
    </div>
  )
}

