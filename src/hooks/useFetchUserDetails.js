import { useCallback } from 'react';

export function useFetchUserDetails() {
  const capitalizeFirstLetter = useCallback((string) => {
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, []);

  const fetchUserDetails = useCallback(async (username) => {
    try {
      const response = await fetch('https://fakestoreapi.com/users/');

      if (response.data && response.data.length > 0) {
        const users = await response.data;
        const userData = await users.find(user => user.username === username);
        const name = capitalizeFirstLetter(`${userData.name.firstname} ${userData.name.lastname}`);
        const newUserData = {
          displayName: name,
          email: userData.email
        }
        return newUserData;
      }
      
      return null;
    } catch (error) {
      console.error('Erro ao buscar detalhes do usuário:', error);
      return null;
    }
  }, [capitalizeFirstLetter]);

  return { fetchUserDetails };
}
