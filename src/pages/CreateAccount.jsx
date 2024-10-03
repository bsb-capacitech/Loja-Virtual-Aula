import { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCreateAccount = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method:"POST",
        body:JSON.stringify({
            email: email,
            username: username,
            password: password,
        })
      }).then(res=>res.json()).then(json=>console.log(json))
      
      if (response.data) {
        // Sucesso na criação do usuário
        alert('Conta criada com sucesso! Faça login.');
        navigate('/login'); // Redireciona para o login após a criação da conta
      }
    } catch (error) {
      console.error('Erro na criação da conta:', error);
      setError('Erro ao criar conta. Tente novamente.');
    }
  }, [email, username, password, navigate]);

  // Uso de useMemo para condicionar a exibição da mensagem de erro
  const errorMessage = useMemo(() => {
    return error ? <p className="text-danger">{error}</p> : null;
  }, [error]);

  return (
    <div className="container text-center mt-5">
      <h2>Criar Conta</h2>

      <form onSubmit={handleCreateAccount} className="mb-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
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

        {errorMessage}
        
        <button type="submit" className="btn btn-primary">Criar Conta</button>
      </form>
    </div>
  );
}

export default CreateAccount
