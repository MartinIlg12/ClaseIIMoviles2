import React from 'react'
//interfaaz
interface Persona{
    nombreCompleto: string;
    edad: number;
    direccion : Direccion;
}
interface Direccion {
    pais: string;
    casaNumero: number;
}
//no se puede instanciar una interace
//const persona = Persona();
export const ObjetosLiterales = () => {
    //Objetos -tipado estricto
    const persona: Persona = {
        nombreCompleto: 'Martin',
        edad: 22,
        direccion: {
            pais: 'Ecuador',
            casaNumero: 365
        }
    }
    //acceder a propiedades
    persona.nombreCompleto = 'Martin Ilguan'
  return (
    <div>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
        {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </div>
  )
}
