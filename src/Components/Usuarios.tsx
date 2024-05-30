import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ListaUsuarioReqRes, Usuario } from '../interfaces/interfaceReqRes';

export const Usuarios = () => {
    //hook useRef
    const paginaRef = useRef(1)
    //hook useState
    const [users, setUsers] = useState<Usuario[]>([]);
    //hook useEffect
    useEffect(() => {
        //llamado a la api
        return()=>{
        cargaUsuarios()
        }
    }, [])
    //funcion para cargar lista usuarios - api
    const cargaUsuarios = async() =>{
            //llamado a la api
        const resp = await reqResApi.get<ListaUsuarioReqRes>('/users',{
            params:{
                page:paginaRef.current
            }
        });
        //validar el vector
        if (resp.data.data.length > 0) {
            setUsers(resp.data.data)
            paginaRef.current++
        }else{
            alert('No existen mas usuarios huevas')
        }
        setUsers(resp.data.data);
    }
    //funcion mostrar cada usuario de manera dinamica
    const itemUsuario = ({id, first_name, last_name, email, avatar}: Usuario)=>{
        return(
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} 
                    alt={first_name}
                    style={{
                        width:40,
                        borderRadius:10,
                    }} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }
    
  return (
    <div>
        <h3>Lista Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((usuario)=>itemUsuario(usuario))
                }
            </tbody>
        </table>
        <button className="btn btn-primary"onClick={cargaUsuarios}>Siguiente</button>
    </div>
  )
}
