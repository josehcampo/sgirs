import { createContext, useState, useContext, useEffect } from 'react';
import Cookie from 'js-cookie';
import axios from '../api/axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga

  const signin = async (data) => {
    try {
      const res = await axios.post('/signin', data, {
        withCredentials: true,
      });
      setUser(res.data);
      setIsAuth(true);
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const signup = async (data) => {
    try {
      const res = await axios.post('/signup', data, {
        withCredentials: false,
      });
      setUser(res.data);
      setIsAuth(false);
      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const signout = async () => {
    await axios.post('/signout', null, {
      withCredentials: true,
    });
    setUser(null);
    setIsAuth(false);
    localStorage.removeItem('userInfo');
  };

  useEffect(() => {
    const checkAuth = async () => {
      if (Cookie.get('token')) {
        try {
          const res = await axios.get('/profile', { withCredentials: true });
          setUser(res.data);
          setIsAuth(true);
        } catch (err) {
          setUser(null);
          setIsAuth(false);
        } finally {
          setLoading(false); // La verificación de autenticación ha terminado
        }
      } else {
        setLoading(false); // No hay token, termina la carga
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        signup,
        signin,
        signout,
        loading, // Agregamos `loading` al contexto
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
