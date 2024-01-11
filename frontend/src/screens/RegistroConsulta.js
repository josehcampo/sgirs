import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de importar los estilos

import seleccion from '../images/seleccion.png';

function RegistroConsulta() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha respondido al cargar el componente
    const hasAnsweredStored = localStorage.getItem('answered');
    setHasAnswered(!!hasAnsweredStored);
  }, []);

  const handleButtonClick = () => {
    if (hasAnswered) {
      // El usuario ya ha respondido, muestra un mensaje de error
      toast.error('El usuario ya ha respondido al formulario');
    } else {
      // El usuario aún no ha respondido
      // Establecer el valor en localStorage
      localStorage.setItem('answered', true);
    }
  };

  return (
    <Container className="small-container1">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4 className="my-3">REGISTRO DE INDICADORES</h4>
      <br />
      <br />
      <Form onSubmit={(e) => e.preventDefault()}>
        <div className="padre">
          <div>
            <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src={seleccion} />
              <Card.Body>
                <Card.Title>Nuevo registro de indicadores</Card.Title>
              </Card.Body>
              <Card.Body>
                {/* Utilizamos el componente Link para redirigir */}
                <Link
                  to={hasAnswered ? '/RegistroConsulta' : '/RegistrarPreguntas'}
                >
                  <Button
                    variant="success"
                    //  disabled={hasAnswered}
                    onClick={handleButtonClick}
                  >
                    Responder Formulario
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Form>
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
    </Container>
  );
}

export default RegistroConsulta;
