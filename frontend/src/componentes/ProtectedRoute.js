import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ redirectTo, isAllowed, children }) => {
  const { loading } = useAuth(); // Obtén el estado de carga desde el contexto de autenticación

  if (loading) {
    return <div>Cargando...</div>; // Puedes usar un spinner o componente de carga personalizado aquí
  }

  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};
