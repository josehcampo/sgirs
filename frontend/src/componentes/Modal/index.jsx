import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p style={{ textAlign: 'justify' }}>{props?.parrafo}</p>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="success" onClick={props.onHide}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
