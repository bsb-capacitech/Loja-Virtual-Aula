import { useNavigate } from "react-router-dom"
import { auth, googleProvider } from '../../firebase'
import { useAuth } from "../hooks/useAuth"

function Login() {
    const { login } = useAuth()

    const navigate = useNavigate()

    const handleLogin = async (provider) => {
        try {
            const result = await signInWithPopup(auth, provider)

            login(result.user)

            navigate('/')
        } catch (error) {
            console.error("Erro no login: ", error)
            alert('Falha no login. Tente novamente')
        }
    }

    return (
        <div className="container text-center mt-5">
            <h2>Faça Login</h2>
            <button
                className="btn btn-danger m-2"
                onClick={() => handleLogin(googleProvider)}
            >
                Login com Google
            </button>
        </div>
    )
}

export default Login
