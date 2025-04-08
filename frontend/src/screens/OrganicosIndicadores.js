import React, { useState, useEffect } from 'react';
import { Container, Form, Table, Modal, Button } from 'react-bootstrap';
import axios from '../api/axios';

import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import MyVerticallyCenteredModal from '../componentes/Modal';

import { FaCheckCircle, FaDownload } from 'react-icons/fa';

export default function OrganicosIndicadores({ userId }) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '';

  const [modalShow, setModalShow] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (
      !enero1 ||
      !febrero1 ||
      !marzo1 ||
      !abril1 ||
      !mayo1 ||
      !junio1 ||
      !enero2 ||
      !febrero2 ||
      !marzo2 ||
      !abril2 ||
      !mayo2 ||
      !junio2
    ) {
      toast.error('Por favor, completa todos los campos antes de continuar.');
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const [enero1, setEnero1] = useState('');
  const [febrero1, setFebrero1] = useState('');
  const [marzo1, setMarzo1] = useState('');
  const [abril1, setAbril1] = useState('');
  const [mayo1, setMayo1] = useState('');
  const [junio1, setJunio1] = useState('');
  const [enero2, setEnero2] = useState('');
  const [febrero2, setFebrero2] = useState('');
  const [marzo2, setMarzo2] = useState('');
  const [abril2, setAbril2] = useState('');
  const [mayo2, setMayo2] = useState('');
  const [junio2, setJunio2] = useState('');
  const [totalenero, setTotalenero] = useState(0);
  const [totalfebrero, setTotalfebrero] = useState(0);
  const [totalmarzo, setTotalmarzo] = useState('');
  const [totalabril, setTotalabril] = useState('');
  const [totalmayo, setTotalmayo] = useState('');
  const [totaljunio, setTotaljunio] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async (e) => {
    e.preventDefault();

    const Totalenero = (parseInt(enero1) / parseInt(enero2)) * 100;
    const Totalfebrero = (parseInt(febrero1) / parseInt(febrero2)) * 100;
    const Totalmarzo = (parseInt(marzo1) / parseInt(marzo2)) * 100;
    const Totalabril = (parseInt(abril1) / parseInt(abril2)) * 100;
    const Totalmayo = (parseInt(mayo1) / parseInt(mayo2)) * 100;
    const Totaljunio = (parseInt(junio1) / parseInt(junio2)) * 100;

    setTotalenero(Totalenero);
    setTotalfebrero(Totalfebrero);
    setTotalmarzo(Totalmarzo);
    setTotalabril(Totalabril);
    setTotalmayo(Totalmayo);
    setTotaljunio(Totaljunio);

    try {
      await axios.post(
        '/indicadoresorganicos',
        {
          userId,
          enero1,
          febrero1,
          marzo1,
          abril1,
          mayo1,
          junio1,
          enero2,
          febrero2,
          marzo2,
          abril2,
          mayo2,
          junio2,
          totalenero: Totalenero,
          totalfebrero: Totalfebrero,
          totalmarzo: Totalmarzo,
          totalabril: Totalabril,
          totalmayo: Totalmayo,
          totaljunio: Totaljunio,
        },
        {
          withCredentials: true,
        }
      );

      console.log('Datos enviados correctamente');
      setShowModal(true); // Mostrar modal de éxito

      navigate(redirect || '/');
    } catch (err) {
      console.log('Error al enviar los datos');
    }
  };

  useEffect(() => {
    const Totalenero = (parseInt(enero1) / parseInt(enero2)) * 100;
    const Totalfebrero = (parseInt(febrero1) / parseInt(febrero2)) * 100;
    const Totalmarzo = (parseInt(marzo1) / parseInt(marzo2)) * 100;
    const Totalabril = (parseInt(abril1) / parseInt(abril2)) * 100;
    const Totalmayo = (parseInt(mayo1) / parseInt(mayo2)) * 100;
    const Totaljunio = (parseInt(junio1) / parseInt(junio2)) * 100;

    setTotalenero(Totalenero);
    setTotalfebrero(Totalfebrero);
    setTotalmarzo(Totalmarzo);
    setTotalabril(Totalabril);
    setTotalmayo(Totalmayo);
    setTotaljunio(Totaljunio);
  }, [
    enero1,
    enero2,
    febrero1,
    febrero2,
    marzo1,
    marzo2,
    abril1,
    abril2,
    mayo1,
    mayo2,
    junio1,
    junio2,
  ]);

  return (
    <Container className="small-container2">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="my-3">INDICADORES DEL SGIRS (ORGANICOS)</h4>
      <br></br>

      <Form onSubmit={submitHandler}>
        {/* INDICADOR 1 */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 1: Evaluar la evolución de la incorporación de los RSO
                a la cadena de aprovechamiento mensualmente : RSO aprovechados
                (kg) RSO aprovechables generados *100
              </th>
              <th className="columnas">Julio</th>
              <th className="columnas">Agosto</th>
              <th className="columnas">Septiembre</th>
              <th className="columnas">Octubre</th>
              <th className="columnas">Noviembre</th>
              <th className="columnas">Diciembre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>RSO aprovechados (kg)</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setEnero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setFebrero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setMarzo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setAbril1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setMayo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setJunio1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>RSO aprovechables generados (kg)</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setEnero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setFebrero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setMarzo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setAbril2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setMayo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setJunio2(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador 1 </td>
              <td className="columnas">
                <Form.Control type="number" value={totalenero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={totalfebrero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={totalmarzo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={totalabril} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={totalmayo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={totaljunio} disabled />
              </td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <div className="boton">
          <Button variant="success" type="button" onClick={handleShowModal}>
            Siguiente
          </Button>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              <FaCheckCircle
                style={{ color: '#28a745', marginRight: '10px' }}
              />
              ¡Éxito!
            </Modal.Title>
          </Modal.Header>{' '}
          <Modal.Body>
            {/* Contenido del modal */}
            <p style={{ textAlign: 'justify' }}>
              ¡Felicidades por completar el reporte de indicadores y cumplir con
              los requerimientos del Decreto 0595 de 2022! Tu compromiso es
              clave en el camino hacia una gestión de residuos sólidos más
              efectiva. Si en algún momento necesitas asistencia técnica para el
              diseño o implementación del SGIRS, recuerda que la Unidad
              Administrativa Especial de Servicios Públicos - UAESP está aquí
              para apoyarte.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Al correo registrado será enviado próximamente el certificado de
              reporte con los datos suministrados en el registro de usuario.
              ¡Gracias por tu dedicación y hasta la próxima!
            </p>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              variant="success"
              type="button"
              onClick={(event) => {
                setShowModal(false); // Cierra el modal
                submitHandler(event); // Ejecuta la lógica de envío
              }}
            >
              Enviar
            </Button>

            <a
              href="/CERTIFICADO SGIRS GRAN GENERADOR.pdf"
              download="CERTIFICADO SGIRS GRAN GENERADOR.pdf"
            >
              <Button variant="primary" className="ml-2">
                <FaDownload style={{ marginRight: '5px' }} />
                Descargar certificado del reporte
              </Button>
            </a>
          </Modal.Footer>
        </Modal>

        <MyVerticallyCenteredModal
          show={modalShow}
          parrafo="¡Hola! Para mantener la coherencia en nuestros registros, recuerda que al reportar indicadores, por favor utiliza números enteros. En caso de contar con certificados que presenten valores decimales, te sugerimos aproximarlo al número entero más cercano y asegúrate de incluir las unidades solicitadas, como kilogramos. Esta práctica nos ayudará a mantener la consistencia en nuestros datos y facilitará el análisis para mejorar nuestras acciones en la gestión de residuos. 
          ¡Gracias por tu colaboración!"
          onHide={() => setModalShow(false)}
        />
        <br></br>
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
      </Form>
    </Container>
  );
}
