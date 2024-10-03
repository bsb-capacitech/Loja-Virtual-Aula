import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { useAuth } from './useAuth';

export function useAuthentication(auth) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const [errorAuth, setErrorAuth] = useState(null);

  const handleSocialLogin = async (provider) => {
    try {
        const result = await signInWithPopup(auth, provider)

        login(result.user)

        navigate(from)
    } catch (error) {
        setErrorAuth(err.message);
        alert('Erro no login:', err);
    }
  }

  const handleManualLogin = async (username, password, fetchUserDetails, setError) => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
            method:'POST',
            body:JSON.stringify({
                username,
                password
            })
      }).then(res=>res.json()).then(json=>console.log(json))

      if (response.data.token) {
        const userDetails = await fetchUserDetails(username);
        if (userDetails) {
          login(userDetails);
          navigate(from);
        } else {
          setError('Falha ao carregar informações do usuário.');
        }
      } else {
        setError('Nome de usuário ou senha inválidos.');
      }
    } catch (error) {
      alert('Erro no login manual:', error);
      setError('Falha ao realizar login.');
    }
  };

  return { handleSocialLogin, handleManualLogin, errorAuth };
}
