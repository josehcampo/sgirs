import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from '../api/axios';

import { ToastContainer, toast } from 'react-toastify';
import MyVerticallyCenteredModal from '../componentes/Modal';

import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';

import { useEffect, useState } from 'react';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, errors: signupErrors } = useAuth();
  const navigate = useNavigate();

  const [idsector, setIdector] = useState([]);
  const [modalShow, setModalShow] = useState(true);

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetchSectores();
  }, []);

  const fetchSectores = async () => {
    try {
      const response = await axios.get('/consultarsectores');
      setIdector(response.data);
    } catch (error) {
      //console.error(error);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data);
    if (user) {
      navigate('/');
    } else {
      // Mostrar errores usando react-toastify
      if (signupErrors && signupErrors.length > 0) {
        signupErrors.forEach((err) => {
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

          <h4 className="my-3">Registrar Usuario</h4>
          <br></br>

          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="nit">
              <Form.Label>Nit</Form.Label>
              <Form.Control
                type="number"
                {...register('nit', {
                  required: true,
                })}
                placeholder="Digite el NIT sin digito de verificación"
              />
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3" controlId="nomsector">
              <Form.Label>Nombre del sector</Form.Label>
              <Form.Select
                {...register('idsector', {
                  required: true,
                })}
              >
                <option value="">Seleccionar opción</option>
                {idsector.map((sector) => (
                  <option key={sector.id} value={sector.id}>
                    {sector.nombre}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="nomestablecimiento">
              <Form.Label>Nombre del establecimiento</Form.Label>
              <Form.Control
                {...register('nomestablecimiento', {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="direccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                {...register('direccion', {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="comuna">
              <Form.Label>Comuna</Form.Label>
              <Form.Control
                type="number"
                {...register('comuna', {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="barrio">
              <Form.Label>Barrio</Form.Label>
              <Form.Control
                {...register('barrio', {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                autoComplete="new-email"
                {...register('email', {
                  required: true,
                })}
                placeholder="name@example.com"
                onChange={(e) => {
                  // Convierte el valor a minúsculas y actualiza el estado
                  e.target.value = e.target.value.toLowerCase();
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nomresponsable">
              <Form.Label>Nombre del responsable del SGIRS</Form.Label>
              <Form.Control
                {...register('nomresponsable', {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Numero de contacto</Form.Label>
              <Form.Control
                type="number"
                {...register('numero', {
                  required: true,
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                autoComplete="new-password"
                {...register('password', {
                  required: true,
                })}
              />
            </Form.Group>
            <div className="mb-3">
              <Button variant="success" type="submit">
                Registrar
              </Button>
            </div>
            <div className="mb-3">
              Ya tiene una cuenta?
              <Link to="/">Ingresar</Link>
            </div>
            <MyVerticallyCenteredModal
              show={modalShow}
              parrafo="Hola! Si tu establecimiento comercial o Institución Educativa cuenta dos o más sedes, deberás crear un usuario para cada una. Si cuentan con el mismo NIT, deberás diferenciarlo por el correo y nombre del establecimiento. Recuerda que la información suministrada en el registro te permitirá acceder en los próximos reportes."
              onHide={() => setModalShow(false)}
            />
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
        theme="light"
      />
    </div>
  );
}
