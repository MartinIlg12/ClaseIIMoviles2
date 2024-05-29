import { useReducer, useEffect} from "react";

// Interface - estado inicial (objeto)
interface AuthState {
    validando: boolean;
    token: null | string;
    nombre: string;
    correo: string;
}

// Type - login action payload
type LoginActionPayLoad = {
    nombre: string;
    correo: string;
}

// Type - parametro de action - funcion reducer
type AuthAction =
    { type: 'logout' }
    | { type: 'login', payload: LoginActionPayLoad }

export const Login = () => {
    // Valor - estado inicial use reduce
    const initialState: AuthState = {
        validando: true,
        token: null,
        nombre: '',
        correo: '',
    }

    // Funcion de retorno- reducer
    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    nombre: '',
                    correo: ''
                }
            case 'login':
                // destructurar el objeto
                const { nombre, correo } = action.payload;
                return {
                    validando: false,
                    token: 'DHSHshdhhgdfghgd5fDFFA555g',
                    nombre: nombre,
                    correo: correo
                }
            default:
                return state
        }
    }

    // Funcion action login
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Martin',
                correo: 'martinilguan@hotmail.com'
            }
        })
    }

    // Funcion action logout
    const logout = () => {
        dispatch({ type: 'logout' });
    }

    // Hook useReducer
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

    // Hook useEffect
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, [])

    // Validando carga inicial de página
    if (validando) { // true
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    return (
        <div>
            <h3>Login</h3>
            {
                (token == null)
                    ? <div className="alert alert-danger">No autenticado...</div>
                    : <div className="alert alert-success">Autenticado como: {nombre}</div>
            }
            {
                (token == null)
                    ? <div className="btn btn-primary"
                        onClick={login}>Login</div>
                    : <div className="btn btn-danger"
                        onClick={logout}>Logout</div>
            }
        </div>
    )
}
