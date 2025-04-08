import Header from './componentes/Header';
import HomeScreen from './screens/HomeScreen';
import CrearUsuario from './screens/CrearUsuario';
import RegistrarPreguntas from './screens/RegistrarPreguntas';
import RegistroConsulta from './screens/RegistroConsulta';
import ComercialIndicadores from './screens/ComercialIndicadores';
import OrganicosIndicadores from './screens/OrganicosIndicadores';
import IEIndicadores from './screens/IEIndicadores';
import EntidadesPublicasIndicadores from './screens/EntidadesPublicasIndicadores';
import EventosMasivosIndicadores from './screens/EventosMasivosIndicadores';
import DMIndicadores from './screens/DMIndicadores';
import ProfilePage from './screens/ProfilePage';
import ForgetPassword from './screens/forgetpassword';
import ResetPassword from './screens/ResetPassword';

import { Routes, Route, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Container } from './componentes/Container';
import { ProtectedRoute } from './componentes/ProtectedRoute';

function App() {
  const { isAuth } = useAuth();
  return (
    <>
      <Container className="py-5">
        <Header />
        <Routes>
          <Route
            element={
              <ProtectedRoute
                isAllowed={!isAuth}
                redirectTo="/RegistroConsulta"
              />
            }
          >
            <Route path="/" element={<HomeScreen />} />
            <Route path="/CrearUsuario" element={<CrearUsuario />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/ResetPassword/:id" element={<ResetPassword />} />
          </Route>

          <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/" />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/RegistrarPreguntas"
              element={<RegistrarPreguntas />}
            />
            <Route path="/RegistroConsulta" element={<RegistroConsulta />} />
            <Route
              path="/ComercialIndicadores"
              element={<ComercialIndicadores />}
            />
            <Route
              path="/OrganicosIndicadores"
              element={<OrganicosIndicadores />}
            />
            <Route path="/IEIndicadores" element={<IEIndicadores />} />
            <Route
              path="/EntidadesPublicasIndicadores"
              element={<EntidadesPublicasIndicadores />}
            />
            <Route
              path="/EventosMasivosIndicadores"
              element={<EventosMasivosIndicadores />}
            />
            <Route path="/DMIndicadores" element={<DMIndicadores />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
