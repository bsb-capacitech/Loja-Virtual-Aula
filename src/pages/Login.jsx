import { useLocation, useNavigate } from "react-router-dom"
import { auth, googleProvider } from '../../firebase'
import { useAuth } from "../hooks/useAuth"
import { useState } from "react"

function Login() {
    const { login } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/';

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    
    const capitalize = (string) => {
        return string
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    const fetchUser = async (username) => {
        try {
            fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                body:JSON.stringify({
                    username,
                    password
                })
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
        } catch (error) {
            
        }
    }

    const fetchUserDetails = async (username) => {
        try {
            const response = fetch('https://fakestoreapi.com/users')

            if (response.data && response.data.length > 0) {
                const user = await response.data;
                const userData = await user.find(user => user.username === username)
                const name = capitalize(`${userData.name.firstname} ${userData.name.lastname}`)

                const newUserData = {
                    displayName: name,
                    email: userData.email
                }

                return newUserData
            }

            return null
        } catch (error) {
            console.error("Erro ao buscar detalhes do usuário: ", error)
            return null
        }
    }

    const handleSocialLogin = async (provider) => {
        try {
            const result = await signInWithPopup(auth, provider)

            login(result.user)

            navigate(from)
        } catch (error) {
            console.error("Erro no login: ", error)
            alert('Falha no login. Tente novamente')
        }
    }

    const handleManualLogin= async (e) => {
        e.preventDefault()

        try {
            const response = await fetchUser(username)

            if (response.data.token) {
                const userDetails = fetchUserDetails(username)

                if (userDetails) {
                    login(userDetails)
                    navigate(from)
                } else {
                    setError("Falha ao carregar informações do usuário. Tente novamente.")
                }
            } else {
                setError("Nome do usuário ou senha inválidos. Tente noavamente")
            }
        } catch (error) {
            console.error("Erro no login: ", error)
            alert('Usename ou senha inválidos. Tente novamente')
        }
    }

    return (
        <div className="container text-center mt-5">
            <h2>Faça Login</h2>
            
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Nome de Usuário</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <button
                className="btn btn-danger m-2"
                onClick={() => handleSocialLogin(googleProvider)}
            >
                Login com Google
            </button>
        </div>
    )
}

export default Login
