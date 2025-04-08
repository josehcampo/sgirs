import axios from '../api/axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function ResetPasswordScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const [modalMessage, setModalMessage] = useState(''); // Mensaje en el modal
  const [isError, setIsError] = useState(false); // Controla si es un error o éxito

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setModalMessage('Las contraseñas no coinciden. Inténtalo nuevamente.');
      setIsError(true); // Error
      setShowModal(true); // Mostrar modal
      return;
    }

    try {
      await axios.post(`/resetpassword/${id}`, { newPassword: password });
      setModalMessage('¡Contraseña actualizada correctamente!');
      setIsError(false); // Éxito
      setShowModal(true); // Mostrar modal
    } catch (err) {
      setModalMessage(
        'Error al restablecer la contraseña. Intenta nuevamente.'
      );
      setIsError(true); // Error
      setShowModal(true); // Mostrar modal
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    if (!isError) {
      navigate('/'); // Redirigir al inicio de sesión si el cambio fue exitoso
    }
  };

  return (
    <Container className="small-container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h4 className="my-3">Restaurar Contraseña</h4>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña Nueva</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirmar Contraseña Nueva</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <div className="mb-3">
          <Button type="submit" variant="success">
            Restaurar Contraseña
          </Button>
        </div>
      </Form>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: isError ? '#f8d7da' : '#d4edda',
            color: isError ? '#721c24' : '#155724',
          }}
        >
          <Modal.Title>
            {isError ? (
              <>
                <FaExclamationTriangle style={{ marginRight: '10px' }} />
                Error
              </>
            ) : (
              <>
                <FaCheckCircle style={{ marginRight: '10px' }} />
                Éxito
              </>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: isError ? '#f8d7da' : '#d4edda',
            color: isError ? '#721c24' : '#155724',
            textAlign: 'center',
            fontSize: '18px',
          }}
        >
          {modalMessage}
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: isError ? '#f8d7da' : '#d4edda',
            borderTop: isError ? '1px solid #f5c6cb' : '1px solid #c3e6cb',
          }}
        >
          <Button
            variant={isError ? 'danger' : 'success'}
            onClick={handleModalClose}
          >
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
