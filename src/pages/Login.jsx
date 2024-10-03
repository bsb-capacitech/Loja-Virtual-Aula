import { useState, memo } from 'react'
import { auth, googleProvider } from '../../firebase'
import { useFetchUserDetails } from '../hooks/useFetchUserDetails'
import { useAuthentication } from '../hooks/useAuthentication'

function Login() {
  const { fetchUserDetails } = useFetchUserDetails();
  const { handleLogin, handleManualLogin, error: errorAuth } = useAuthentication(auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

    // Combinando os erros manual e de autenticação com provedores
    const combinedError = error || errorAuth;

  return (
    <div className="container text-center mt-5">
      <h2>Faça Login</h2>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleManualLogin(username, password, fetchUserDetails, setError);
        }}
        className="mb-3"
      >
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

        {combinedError && <p className="text-danger">{error}</p>}
        
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      <button
        className="btn btn-danger m-2"
        onClick={() => handleLogin(googleProvider)}
      >
        Login com Google
      </button>

      <p>Não tem uma conta? <a href="/criar-conta">Crie sua conta</a></p>
    </div>
  );
}

export default memo(Login)
