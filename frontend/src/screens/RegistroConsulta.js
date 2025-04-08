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
                <Link to={'/RegistrarPreguntas'}>
                  <Button
                    variant="success"
                    //  disabled={hasAnswered}
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
