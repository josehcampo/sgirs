import axios from '../api/axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
  //const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post('/forgetpassword', { email });
      setMessage(response.data.message); // Mostrar mensaje exitoso
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message); // Mostrar mensaje de error específico del backend
      } else {
        setError('Ocurrió un error. Intenta de nuevo.'); // Mensaje genérico
      }
    }
  };

  return (
    <Container className="small-container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="my-3">Restaurar contraseña</h4>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit" variant="success">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
