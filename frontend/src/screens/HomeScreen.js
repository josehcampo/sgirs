import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { USER_ROLE } from '../types';

const ROLE_BY_ID = new Map();
ROLE_BY_ID.set(1, USER_ROLE.COMERCIAL_Y_SERVICIOS);
ROLE_BY_ID.set(2, USER_ROLE.ORGANICOS);
ROLE_BY_ID.set(3, USER_ROLE.INSTITUCIONES_EDUCATIVAS);
ROLE_BY_ID.set(4, USER_ROLE.EVENTOS_MASIVOS);
ROLE_BY_ID.set(5, USER_ROLE.ENTIDADES_PUBLICAS);
ROLE_BY_ID.set(6, USER_ROLE.DESARROLLOS_MULTIFAMILIARES);

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      navigate('/Registroconsulta');
    } else {
      // Mostrar errores usando react-toastify
      if (loginErrors) {
        loginErrors.forEach((err) => {
          toast.error(err);
        });
      }
    }
  });

  return (
    <div>
      <section className="formulario">
        <Container className="small-container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4 className="my-3">Iniciar Sesión</h4>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                autoComplete="current-email"
                required
                {...register('email', {
                  required: true,
                })}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                required
                autoComplete="current-password"
                {...register('password', {
                  required: true,
                })}
              />
            </Form.Group>
            <div className="mb-3">
              <Button variant="success" type="submit">
                Ingresar
              </Button>
            </div>
            <div className="mb-3">
              Nuevo usuario? <Link to="/CrearUsuario">Crear una cuenta</Link>
            </div>
            <div className="mb-3">
              Olvido su contraseña?{' '}
              <Link to={`/forgetpassword`}>Restaurar contraseña</Link>
            </div>
          </Form>
        </Container>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
