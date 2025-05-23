import React, { useState, useEffect } from 'react';
import { Container, Form, Table, Modal, Button } from 'react-bootstrap';
import axios from '../api/axios';

import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import MyVerticallyCenteredModal from '../componentes/Modal';

import { FaCheckCircle, FaDownload } from 'react-icons/fa';

export default function ComercialIndicadores({ userId }) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '';

  const [modalShow, setModalShow] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (
      !i1enero1 ||
      !i1febrero1 ||
      !i1marzo1 ||
      !i1abril1 ||
      !i1mayo1 ||
      !i1junio1 ||
      !i1enero2 ||
      !i1febrero2 ||
      !i1marzo2 ||
      !i1abril2 ||
      !i1mayo2 ||
      !i1junio2 ||
      !i2enero1 ||
      !i2febrero1 ||
      !i2marzo1 ||
      !i2abril1 ||
      !i2mayo1 ||
      !i2junio1 ||
      !i2enero2 ||
      !i2febrero2 ||
      !i2marzo2 ||
      !i2abril2 ||
      !i2mayo2 ||
      !i2junio2 ||
      !i3enero1 ||
      !i3febrero1 ||
      !i3marzo1 ||
      !i3abril1 ||
      !i3mayo1 ||
      !i3junio1 ||
      !pregunta1 ||
      !pregunta2 ||
      !pregunta3 ||
      !pregunta4 ||
      !pregunta5 ||
      !pregunta6 ||
      !pregunta7 ||
      !pregunta8 ||
      !i5enero1 ||
      !i5febrero1 ||
      !i5marzo1 ||
      !i5abril1 ||
      !i5mayo1 ||
      !i5junio1 ||
      !i5enero2 ||
      !i5febrero2 ||
      !i5marzo2 ||
      !i5abril2 ||
      !i5mayo2 ||
      !i5junio2
    ) {
      toast.error('Por favor, completa todos los campos antes de continuar.');
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const [i1enero1, setI1Enero1] = useState('');
  const [i1febrero1, setI1Febrero1] = useState('');
  const [i1marzo1, setI1Marzo1] = useState('');
  const [i1abril1, setI1Abril1] = useState('');
  const [i1mayo1, setI1Mayo1] = useState('');
  const [i1junio1, setI1Junio1] = useState('');
  const [i1enero2, setI1Enero2] = useState('');
  const [i1febrero2, setI1Febrero2] = useState('');
  const [i1marzo2, setI1Marzo2] = useState('');
  const [i1abril2, setI1Abril2] = useState('');
  const [i1mayo2, setI1Mayo2] = useState('');
  const [i1junio2, setI1Junio2] = useState('');
  const [i1totalenero, setI1Totalenero] = useState(0);
  const [i1totalfebrero, setI1Totalfebrero] = useState(0);
  const [i1totalmarzo, setI1Totalmarzo] = useState('');
  const [i1totalabril, setI1Totalabril] = useState('');
  const [i1totalmayo, setI1Totalmayo] = useState('');
  const [i1totaljunio, setI1Totaljunio] = useState('');

  const [i2enero1, seti2Enero1] = useState('');
  const [i2febrero1, seti2Febrero1] = useState('');
  const [i2marzo1, seti2Marzo1] = useState('');
  const [i2abril1, seti2Abril1] = useState('');
  const [i2mayo1, seti2Mayo1] = useState('');
  const [i2junio1, seti2Junio1] = useState('');
  const [i2enero2, seti2Enero2] = useState('');
  const [i2febrero2, seti2Febrero2] = useState('');
  const [i2marzo2, seti2Marzo2] = useState('');
  const [i2abril2, seti2Abril2] = useState('');
  const [i2mayo2, seti2Mayo2] = useState('');
  const [i2junio2, seti2Junio2] = useState('');
  const [i2totalenero, seti2Totalenero] = useState(0);
  const [i2totalfebrero, seti2Totalfebrero] = useState(0);
  const [i2totalmarzo, seti2Totalmarzo] = useState('');
  const [i2totalabril, seti2Totalabril] = useState('');
  const [i2totalmayo, seti2Totalmayo] = useState('');
  const [i2totaljunio, seti2Totaljunio] = useState('');

  const [i3enero1, seti3Enero1] = useState('');
  const [i3febrero1, seti3Febrero1] = useState('');
  const [i3marzo1, seti3Marzo1] = useState('');
  const [i3abril1, seti3Abril1] = useState('');
  const [i3mayo1, seti3Mayo1] = useState('');
  const [i3junio1, seti3Junio1] = useState('');
  const [i3totalenero, seti3Totalenero] = useState(0);
  const [i3totalfebrero, seti3Totalfebrero] = useState(0);
  const [i3totalmarzo, seti3Totalmarzo] = useState('');
  const [i3totalabril, seti3Totalabril] = useState('');
  const [i3totalmayo, seti3Totalmayo] = useState('');
  const [i3totaljunio, seti3Totaljunio] = useState('');

  const [pregunta1, setPregunta1] = useState('');
  const [pregunta2, setPregunta2] = useState('');
  const [pregunta3, setPregunta3] = useState('');
  const [pregunta4, setPregunta4] = useState('');
  const [pregunta5, setPregunta5] = useState('');
  const [pregunta6, setPregunta6] = useState('');
  const [pregunta7, setPregunta7] = useState('');
  const [pregunta8, setPregunta8] = useState('');

  const [i5enero1, seti5Enero1] = useState('');
  const [i5febrero1, seti5Febrero1] = useState('');
  const [i5marzo1, seti5Marzo1] = useState('');
  const [i5abril1, seti5Abril1] = useState('');
  const [i5mayo1, seti5Mayo1] = useState('');
  const [i5junio1, seti5Junio1] = useState('');
  const [i5enero2, seti5Enero2] = useState('');
  const [i5febrero2, seti5Febrero2] = useState('');
  const [i5marzo2, seti5Marzo2] = useState('');
  const [i5abril2, seti5Abril2] = useState('');
  const [i5mayo2, seti5Mayo2] = useState('');
  const [i5junio2, seti5Junio2] = useState('');
  const [i5totalenero, seti5Totalenero] = useState(0);
  const [i5totalfebrero, seti5Totalfebrero] = useState(0);
  const [i5totalmarzo, seti5Totalmarzo] = useState('');
  const [i5totalabril, seti5Totalabril] = useState('');
  const [i5totalmayo, seti5Totalmayo] = useState('');
  const [i5totaljunio, seti5Totaljunio] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async (e) => {
    e.preventDefault();

    const i1Totalenero = (parseInt(i1enero1) / parseInt(i1enero2)) * 100;
    const i1Totalfebrero = (parseInt(i1febrero1) / parseInt(i1febrero2)) * 100;
    const i1Totalmarzo = (parseInt(i1marzo1) / parseInt(i1marzo2)) * 100;
    const i1Totalabril = (parseInt(i1abril1) / parseInt(i1abril2)) * 100;
    const i1Totalmayo = (parseInt(i1mayo1) / parseInt(i1mayo2)) * 100;
    const i1Totaljunio = (parseInt(i1junio1) / parseInt(i1junio2)) * 100;

    setI1Totalenero(i1Totalenero);
    setI1Totalfebrero(i1Totalfebrero);
    setI1Totalmarzo(i1Totalmarzo);
    setI1Totalabril(i1Totalabril);
    setI1Totalmayo(i1Totalmayo);
    setI1Totaljunio(i1Totaljunio);

    const i2Totalenero = (parseInt(i2enero1) / parseInt(i2enero2)) * 100;
    const i2Totalfebrero = (parseInt(i2febrero1) / parseInt(i2febrero2)) * 100;
    const i2Totalmarzo = (parseInt(i2marzo1) / parseInt(i2marzo2)) * 100;
    const i2Totalabril = (parseInt(i2abril1) / parseInt(i2abril2)) * 100;
    const i2Totalmayo = (parseInt(i2mayo1) / parseInt(i2mayo2)) * 100;
    const i2Totaljunio = (parseInt(i2junio1) / parseInt(i2junio2)) * 100;

    seti2Totalenero(i2Totalenero);
    seti2Totalfebrero(i2Totalfebrero);
    seti2Totalmarzo(i2Totalmarzo);
    seti2Totalabril(i2Totalabril);
    seti2Totalmayo(i2Totalmayo);
    seti2Totaljunio(i2Totaljunio);

    const i3Totalenero = i3enero1;
    const i3Totalfebrero = i3febrero1;
    const i3Totalmarzo = i3marzo1;
    const i3Totalabril = i3abril1;
    const i3Totalmayo = i3mayo1;
    const i3Totaljunio = i3junio1;

    seti3Totalenero(i3Totalenero);
    seti3Totalfebrero(i3Totalfebrero);
    seti3Totalmarzo(i3Totalmarzo);
    seti3Totalabril(i3Totalabril);
    seti3Totalmayo(i3Totalmayo);
    seti3Totaljunio(i3Totaljunio);

    const i5Totalenero = (parseInt(i5enero1) / parseInt(i5enero2)) * 100;
    const i5Totalfebrero = (parseInt(i5febrero1) / parseInt(i5febrero2)) * 100;
    const i5Totalmarzo = (parseInt(i5marzo1) / parseInt(i5marzo2)) * 100;
    const i5Totalabril = (parseInt(i5abril1) / parseInt(i5abril2)) * 100;
    const i5Totalmayo = (parseInt(i5mayo1) / parseInt(i5mayo2)) * 100;
    const i5Totaljunio = (parseInt(i5junio1) / parseInt(i5junio2)) * 100;

    seti5Totalenero(i5Totalenero);
    seti5Totalfebrero(i5Totalfebrero);
    seti5Totalmarzo(i5Totalmarzo);
    seti5Totalabril(i5Totalabril);
    seti5Totalmayo(i5Totalmayo);
    seti5Totaljunio(i5Totaljunio);

    try {
      await axios.post(
        '/indicadorescomercial1',
        {
          i1enero1,
          i1febrero1,
          i1marzo1,
          i1abril1,
          i1mayo1,
          i1junio1,
          i1enero2,
          i1febrero2,
          i1marzo2,
          i1abril2,
          i1mayo2,
          i1junio2,
          i1totalenero: i1Totalenero,
          i1totalfebrero: i1Totalfebrero,
          i1totalmarzo: i1Totalmarzo,
          i1totalabril: i1Totalabril,
          i1totalmayo: i1Totalmayo,
          i1totaljunio: i1Totaljunio,
        },
        {
          withCredentials: true,
        }
      );
      await axios.post(
        '/indicadorescomercial2',
        {
          i2enero1,
          i2febrero1,
          i2marzo1,
          i2abril1,
          i2mayo1,
          i2junio1,
          i2enero2,
          i2febrero2,
          i2marzo2,
          i2abril2,
          i2mayo2,
          i2junio2,
          i2totalenero: i2Totalenero,
          i2totalfebrero: i2Totalfebrero,
          i2totalmarzo: i2Totalmarzo,
          i2totalabril: i2Totalabril,
          i2totalmayo: i2Totalmayo,
          i2totaljunio: i2Totaljunio,
        },
        {
          withCredentials: true,
        }
      );
      await axios.post(
        '/indicadorescomercial3',
        {
          i3enero1,
          i3febrero1,
          i3marzo1,
          i3abril1,
          i3mayo1,
          i3junio1,
          i3totalenero: i3Totalenero,
          i3totalfebrero: i3Totalfebrero,
          i3totalmarzo: i3Totalmarzo,
          i3totalabril: i3Totalabril,
          i3totalmayo: i3Totalmayo,
          i3totaljunio: i3Totaljunio,
        },
        {
          withCredentials: true,
        }
      );
      await axios.post(
        '/indicadorescomercial4',
        {
          pregunta1,
          pregunta2,
          pregunta3,
          pregunta4,
          pregunta5,
          pregunta6,
          pregunta7,
          pregunta8,
        },
        {
          withCredentials: true,
        }
      );
      await axios.post(
        '/indicadorescomercial5',
        {
          i5enero1,
          i5febrero1,
          i5marzo1,
          i5abril1,
          i5mayo1,
          i5junio1,
          i5enero2,
          i5febrero2,
          i5marzo2,
          i5abril2,
          i5mayo2,
          i5junio2,
          i5totalenero: i5Totalenero,
          i5totalfebrero: i5Totalfebrero,
          i5totalmarzo: i5Totalmarzo,
          i5totalabril: i5Totalabril,
          i5totalmayo: i5Totalmayo,
          i5totaljunio: i5Totaljunio,
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
    const i1Totalenero = (parseInt(i1enero1) / parseInt(i1enero2)) * 100;
    const i1Totalfebrero = (parseInt(i1febrero1) / parseInt(i1febrero2)) * 100;
    const i1Totalmarzo = (parseInt(i1marzo1) / parseInt(i1marzo2)) * 100;
    const i1Totalabril = (parseInt(i1abril1) / parseInt(i1abril2)) * 100;
    const i1Totalmayo = (parseInt(i1mayo1) / parseInt(i1mayo2)) * 100;
    const i1Totaljunio = (parseInt(i1junio1) / parseInt(i1junio2)) * 100;

    setI1Totalenero(i1Totalenero);
    setI1Totalfebrero(i1Totalfebrero);
    setI1Totalmarzo(i1Totalmarzo);
    setI1Totalabril(i1Totalabril);
    setI1Totalmayo(i1Totalmayo);
    setI1Totaljunio(i1Totaljunio);

    const i2Totalenero = (parseInt(i2enero1) / parseInt(i2enero2)) * 100;
    const i2Totalfebrero = (parseInt(i2febrero1) / parseInt(i2febrero2)) * 100;
    const i2Totalmarzo = (parseInt(i2marzo1) / parseInt(i2marzo2)) * 100;
    const i2Totalabril = (parseInt(i2abril1) / parseInt(i2abril2)) * 100;
    const i2Totalmayo = (parseInt(i2mayo1) / parseInt(i2mayo2)) * 100;
    const i2Totaljunio = (parseInt(i2junio1) / parseInt(i2junio2)) * 100;

    seti2Totalenero(i2Totalenero);
    seti2Totalfebrero(i2Totalfebrero);
    seti2Totalmarzo(i2Totalmarzo);
    seti2Totalabril(i2Totalabril);
    seti2Totalmayo(i2Totalmayo);
    seti2Totaljunio(i2Totaljunio);

    const i3Totalenero = parseInt(i3enero1);
    const i3Totalfebrero = parseInt(i3febrero1);
    const i3Totalmarzo = parseInt(i3marzo1);
    const i3Totalabril = parseInt(i3abril1);
    const i3Totalmayo = parseInt(i3mayo1);
    const i3Totaljunio = parseInt(i3junio1);

    seti3Totalenero(i3Totalenero);
    seti3Totalfebrero(i3Totalfebrero);
    seti3Totalmarzo(i3Totalmarzo);
    seti3Totalabril(i3Totalabril);
    seti3Totalmayo(i3Totalmayo);
    seti3Totaljunio(i3Totaljunio);

    const i5Totalenero = (parseInt(i5enero1) / parseInt(i5enero2)) * 100;
    const i5Totalfebrero = (parseInt(i5febrero1) / parseInt(i5febrero2)) * 100;
    const i5Totalmarzo = (parseInt(i5marzo1) / parseInt(i5marzo2)) * 100;
    const i5Totalabril = (parseInt(i5abril1) / parseInt(i5abril2)) * 100;
    const i5Totalmayo = (parseInt(i5mayo1) / parseInt(i5mayo2)) * 100;
    const i5Totaljunio = (parseInt(i5junio1) / parseInt(i5junio2)) * 100;

    seti5Totalenero(i5Totalenero);
    seti5Totalfebrero(i5Totalfebrero);
    seti5Totalmarzo(i5Totalmarzo);
    seti5Totalabril(i5Totalabril);
    seti5Totalmayo(i5Totalmayo);
    seti5Totaljunio(i5Totaljunio);
  }, [
    i1enero1,
    i1enero2,
    i1febrero1,
    i1febrero2,
    i1marzo1,
    i1marzo2,
    i1abril1,
    i1abril2,
    i1mayo1,
    i1mayo2,
    i1junio1,
    i1junio2,

    i2enero1,
    i2enero2,
    i2febrero1,
    i2febrero2,
    i2marzo1,
    i2marzo2,
    i2abril1,
    i2abril2,
    i2mayo1,
    i2mayo2,
    i2junio1,
    i2junio2,

    i3enero1,
    i3febrero1,
    i3marzo1,
    i3abril1,
    i3mayo1,
    i3junio1,

    i5enero1,
    i5enero2,
    i5febrero1,
    i5febrero2,
    i5marzo1,
    i5marzo2,
    i5abril1,
    i5abril2,
    i5mayo1,
    i5mayo2,
    i5junio1,
    i5junio2,
  ]);

  return (
    <Container className="small-container2">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="my-3">INDICADORES DEL SGIRS (COMERCIAL Y SERVICIOS)</h4>
      <br></br>
      <Form onSubmit={submitHandler}>
        {/* INDICADOR 1 */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 1: Porcentaje de ejecución de los componentes del
                SGIRS:
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
              <td>Número de Actividades IEC Ejecutadas</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Enero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Febrero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Marzo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Abril1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Mayo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Junio1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Número de Actividades IEC Programadas</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Enero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Febrero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Marzo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Abril2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Mayo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI1Junio2(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador 1 </td>
              <td className="columnas">
                <Form.Control type="number" value={i1totalenero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i1totalfebrero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i1totalmarzo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i1totalabril} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i1totalmayo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i1totaljunio} disabled />
              </td>
            </tr>
          </tbody>
        </Table>
        {/* INDICADOR 2 */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 2: Porcentaje de residuos sólidos aprovechables
                reincorporados a la cadena productiva de reciclaje:
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
              <td>Peso total de residuos sólidos aprovechados (kg)</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Enero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Febrero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Marzo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Abril1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Mayo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Junio1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Peso total de residuos sólidos generados (kg)</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Enero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Febrero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Marzo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Abril2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Mayo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti2Junio2(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador 2 </td>
              <td className="columnas">
                <Form.Control type="number" value={i2totalenero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i2totalfebrero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i2totalmarzo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i2totalabril} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i2totalmayo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i2totaljunio} disabled />
              </td>
            </tr>
          </tbody>
        </Table>
        {/* INDICADOR 3 */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 3: Porcentaje de disminución de residuos sólidos no
                aprovechables generados en el Establecimiento Comercial
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
              <td>Volumen mensual (m3) </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti3Enero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti3Febrero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti3Marzo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti3Abril1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti3Mayo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti3Junio1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador 3 </td>
              <td className="columnas">
                <Form.Control type="number" value={i3totalenero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i3totalfebrero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i3totalmarzo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i3totalabril} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i3totalmayo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i3totaljunio} disabled />
              </td>
            </tr>
          </tbody>
        </Table>
        {/* INDICADOR 4 */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={4}>
                Indicador 4: Cumplimiento de las condiciones técnicas de la
                unidad de almacenamiento de residuos UAR
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                ¿La UAR cuenta mínimo con las siguientes carácterísticas?
              </td>
              <td className="columnas">Si</td>
              <td className="columnas">No</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Recubrimiento que permita facil limpieza e impide el desarrollo
                de microorganismos
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="si"
                      checked={pregunta1 === 'si'}
                      onChange={(e) => setPregunta1(e.target.value)}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="no"
                      checked={pregunta1 === 'no'}
                      onChange={(e) => setPregunta1(e.target.value)}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>
                Ventilación e iluminación como rejillas o ventanas que impidan
                acceso de roedores, materiales factibles para rejillas,
                iluminación artificial.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="si"
                      checked={pregunta2 === 'si'}
                      onChange={(e) => setPregunta2(e.target.value)}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="no"
                      checked={pregunta2 === 'no'}
                      onChange={(e) => setPregunta2(e.target.value)}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Se realiza control de vectores y roedores</td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="si"
                      checked={pregunta3 === 'si'}
                      onChange={(e) => setPregunta3(e.target.value)}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="no"
                      checked={pregunta3 === 'no'}
                      onChange={(e) => setPregunta3(e.target.value)}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>
                La ubicación y accesibilidad facilita la recoleción por la
                empresa prestadora del servicio de aseo y otros gestores, y
                además permanece cerrada permitiendo el solo el acceso del
                personal autorizado.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="si"
                      checked={pregunta4 === 'si'}
                      onChange={(e) => setPregunta4(e.target.value)}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="no"
                      checked={pregunta4 === 'no'}
                      onChange={(e) => setPregunta4(e.target.value)}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>
                El punto hidráulico esta cercano y dentro de la UAR, además la
                frecuencia de lavado y desifencción se realiza una vez finalice
                el evento o diaria.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="si"
                      checked={pregunta5 === 'si'}
                      onChange={(e) => setPregunta5(e.target.value)}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="no"
                      checked={pregunta5 === 'no'}
                      onChange={(e) => setPregunta5(e.target.value)}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>
                Cuenta con elementos de seguridad como equipos de extición de
                incendios ubicados al exterior de la UAR y personal capacitado
                en manejo.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="si"
                      checked={pregunta6 === 'si'}
                      onChange={(e) => setPregunta6(e.target.value)}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="no"
                      checked={pregunta6 === 'no'}
                      onChange={(e) => setPregunta6(e.target.value)}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td>
                Señalización en todos los lugares de almacenamiento, señales de
                seguridad y de obligación a cumplir.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="si"
                      checked={pregunta7 === 'si'}
                      onChange={(e) => setPregunta7(e.target.value)}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="no"
                      checked={pregunta7 === 'no'}
                      onChange={(e) => setPregunta7(e.target.value)}
                    />
                  </div>
                ))}
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td>
                El área debe disponer de espacio suficiente para realizar el
                almacenamiento, la actividad de separación, evitar deterioro de
                material y ubica estibas y/o soportes de material resistentes
                para el almacenameinto de residuos aprovechables aislandolos del
                piso durante su almacenamiento.
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="si"
                      checked={pregunta8 === 'si'}
                      onChange={(e) => setPregunta8(e.target.value)}
                    />
                  </div>
                ))}
              </td>
              <td className="columnas">
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`inline-${type}-1`}
                      value="no"
                      checked={pregunta8 === 'no'}
                      onChange={(e) => setPregunta8(e.target.value)}
                    />
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </Table>
        {/* INDICADOR 5 */}
        <br></br>
        <h6>
          Nota: Este indicador se debe diligenciar si cuenta con plazoleta de
          comida, restaurante u ofrece un servicio que genere residuos sólidos
          orgánicos - RSO
        </h6>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 5: Evaluar la evolución de la incorporación de los RSO
                a la cadena de aprovechamiento mensualmente
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
              <td>RSO entregados a gestores de aprovechamiento (kg)</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Enero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Febrero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Marzo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Abril1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Mayo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Junio1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Residuos sólidos ordinarios generados (kg)</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Enero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Febrero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Marzo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Abril2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Mayo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => seti5Junio2(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador 5 </td>
              <td className="columnas">
                <Form.Control type="number" value={i5totalenero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i5totalfebrero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i5totalmarzo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i5totalabril} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i5totalmayo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i5totaljunio} disabled />
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
              href="/CERTIFICADO SGIRS ESTA COMERCIAL.pdf"
              download="CERTIFICADO SGIRS ESTA COMERCIAL.pdf"
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
