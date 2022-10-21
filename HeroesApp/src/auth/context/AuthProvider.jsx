import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


const initialState = {
    logged: false,
}


const AuthProvider = ({ children }) => {

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'))

        return{
            logged: !!user,
            user,
        }
    }

    const [authState, dispatch] = useReducer(authReducer, initialState, init)

    const onLoginUser = (name = '') => {
        const user = {id: 'ABC', name}
        const action = {
            type: types.login,
            payload: user

        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }

    const onLogoutUser = () => {
        const user = {id: 'ABC'}
        const action = {
            type: types.logout,
            payload: user

        }
        localStorage.removeItem('user')
        dispatch(action)

    }



    return (
        <AuthContext.Provider value={{ onLoginUser, ...authState,onLogoutUser }}>

            {children}

        </AuthContext.Provider>

    )
}

export default AuthProvider