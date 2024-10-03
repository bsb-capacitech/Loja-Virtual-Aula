import { createContext, useCallback, useReducer } from "react"
import PropTypes from "prop-types"

export const AuthContext = createContext()

// Ações/Actions
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

// Estado Inicial/Initial State
const initialState = {
    user: null,
}

function authReducer(state, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload }
        case LOGOUT:
            return { ...state, user: null }
    }
}

export function AuthProviver({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = useCallback((user) => {
        dispatch({ type: LOGIN, payload: user })
    }, [])

    const logout = useCallback(() => {
        dispatch({ type: LOGOUT })
    }, [])

    return (
        <AuthContext.Provider value={{ user: state.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProviver.proptTypes = {
    children: PropTypes.element.isRequired,
}
