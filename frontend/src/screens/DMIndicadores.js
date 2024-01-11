import React, { useState, useEffect } from 'react';
import { Container, Form, Table, Modal, Button } from 'react-bootstrap';
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../api/axios';

import 'react-toastify/dist/ReactToastify.css';
import MyVerticallyCenteredModal from '../componentes/Modal';

export default function DesarrollosMultifamiliaresIndicadores() {
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
      !pregunta1 ||
      !pregunta2 ||
      !pregunta3 ||
      !pregunta4 ||
      !pregunta5 ||
      !pregunta6 ||
      !pregunta7 ||
      !pregunta8 ||
      !i3enero1 ||
      !i3febrero1 ||
      !i3marzo1 ||
      !i3abril1 ||
      !i3mayo1 ||
      !i3junio1 ||
      !i3enero2 ||
      !i3febrero2 ||
      !i3marzo2 ||
      !i3abril2 ||
      !i3mayo2 ||
      !i3junio2 ||
      !i4enero1 ||
      !i4febrero1 ||
      !i4marzo1 ||
      !i4abril1 ||
      !i4mayo1 ||
      !i4junio1 ||
      !i4enero2 ||
      !i4febrero2 ||
      !i4marzo2 ||
      !i4abril2 ||
      !i4mayo2 ||
      !i4junio2 ||
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

  const [pregunta1, setPregunta1] = useState('');
  const [pregunta2, setPregunta2] = useState('');
  const [pregunta3, setPregunta3] = useState('');
  const [pregunta4, setPregunta4] = useState('');
  const [pregunta5, setPregunta5] = useState('');
  const [pregunta6, setPregunta6] = useState('');
  const [pregunta7, setPregunta7] = useState('');
  const [pregunta8, setPregunta8] = useState('');

  const [i3enero1, setI3Enero1] = useState('');
  const [i3febrero1, setI3Febrero1] = useState('');
  const [i3marzo1, setI3Marzo1] = useState('');
  const [i3abril1, setI3Abril1] = useState('');
  const [i3mayo1, setI3Mayo1] = useState('');
  const [i3junio1, setI3Junio1] = useState('');
  const [i3enero2, setI3Enero2] = useState('');
  const [i3febrero2, setI3Febrero2] = useState('');
  const [i3marzo2, setI3Marzo2] = useState('');
  const [i3abril2, setI3Abril2] = useState('');
  const [i3mayo2, setI3Mayo2] = useState('');
  const [i3junio2, setI3Junio2] = useState('');
  const [i3totalenero, setI3Totalenero] = useState(0);
  const [i3totalfebrero, setI3Totalfebrero] = useState(0);
  const [i3totalmarzo, setI3Totalmarzo] = useState('');
  const [i3totalabril, setI3Totalabril] = useState('');
  const [i3totalmayo, setI3Totalmayo] = useState('');
  const [i3totaljunio, setI3Totaljunio] = useState('');

  const [i4enero1, setI4Enero1] = useState('');
  const [i4febrero1, setI4Febrero1] = useState('');
  const [i4marzo1, setI4Marzo1] = useState('');
  const [i4abril1, setI4Abril1] = useState('');
  const [i4mayo1, setI4Mayo1] = useState('');
  const [i4junio1, setI4Junio1] = useState('');
  const [i4enero2, setI4Enero2] = useState('');
  const [i4febrero2, setI4Febrero2] = useState('');
  const [i4marzo2, setI4Marzo2] = useState('');
  const [i4abril2, setI4Abril2] = useState('');
  const [i4mayo2, setI4Mayo2] = useState('');
  const [i4junio2, setI4Junio2] = useState('');
  const [i4totalenero, setI4Totalenero] = useState(0);
  const [i4totalfebrero, setI4Totalfebrero] = useState(0);
  const [i4totalmarzo, setI4Totalmarzo] = useState('');
  const [i4totalabril, setI4Totalabril] = useState('');
  const [i4totalmayo, setI4Totalmayo] = useState('');
  const [i4totaljunio, setI4Totaljunio] = useState('');

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

    const i3Totalenero =
      ((parseInt(i3enero1) - parseInt(i3enero2)) / parseInt(i3enero1)) * 100;
    const i3Totalfebrero =
      ((parseInt(i3febrero1) - parseInt(i3febrero2)) / parseInt(i3febrero1)) *
      100;
    const i3Totalmarzo =
      ((parseInt(i3marzo1) - parseInt(i3marzo2)) / parseInt(i3marzo1)) * 100;
    const i3Totalabril =
      ((parseInt(i3abril1) - parseInt(i3abril2)) / parseInt(i3abril1)) * 100;
    const i3Totalmayo =
      ((parseInt(i3mayo1) - parseInt(i3mayo2)) / parseInt(i3mayo1)) * 100;
    const i3Totaljunio =
      ((parseInt(i3junio1) - parseInt(i3junio2)) / parseInt(i3junio1)) * 100;

    setI3Totalenero(i3Totalenero);
    setI3Totalfebrero(i3Totalfebrero);
    setI3Totalmarzo(i3Totalmarzo);
    setI3Totalabril(i3Totalabril);
    setI3Totalmayo(i3Totalmayo);
    setI3Totaljunio(i3Totaljunio);

    const i4Totalenero = (parseInt(i4enero1) / parseInt(i4enero2)) * 100;
    const i4Totalfebrero = (parseInt(i4febrero1) / parseInt(i4febrero2)) * 100;
    const i4Totalmarzo = (parseInt(i4marzo1) / parseInt(i4marzo2)) * 100;
    const i4Totalabril = (parseInt(i4abril1) / parseInt(i4abril2)) * 100;
    const i4Totalmayo = (parseInt(i4mayo1) / parseInt(i4mayo2)) * 100;
    const i4Totaljunio = (parseInt(i4junio1) / parseInt(i4junio2)) * 100;

    setI4Totalenero(i4Totalenero);
    setI4Totalfebrero(i4Totalfebrero);
    setI4Totalmarzo(i4Totalmarzo);
    setI4Totalabril(i4Totalabril);
    setI4Totalmayo(i4Totalmayo);
    setI4Totaljunio(i4Totaljunio);

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

    setLoading(true);

    try {
      await axios.post(
        '/indicadoresdm1',
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
        '/indicadoresdm2',
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
        '/indicadoresdm3',
        {
          i3enero1,
          i3febrero1,
          i3marzo1,
          i3abril1,
          i3mayo1,
          i3junio1,
          i3enero2,
          i3febrero2,
          i3marzo2,
          i3abril2,
          i3mayo2,
          i3junio2,
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
        '/indicadoresdm4',
        {
          i4enero1,
          i4febrero1,
          i4marzo1,
          i4abril1,
          i4mayo1,
          i4junio1,
          i4enero2,
          i4febrero2,
          i4marzo2,
          i4abril2,
          i4mayo2,
          i4junio2,
          i4totalenero: i4Totalenero,
          i4totalfebrero: i4Totalfebrero,
          i4totalmarzo: i4Totalmarzo,
          i4totalabril: i4Totalabril,
          i4totalmayo: i4Totalmayo,
          i4totaljunio: i4Totaljunio,
        },
        {
          withCredentials: true,
        }
      );
      await axios.post(
        '/indicadoresdm5',
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

    const i3Totalenero =
      ((parseInt(i3enero1) - parseInt(i3enero2)) / parseInt(i3enero1)) * 100;
    const i3Totalfebrero =
      ((parseInt(i3febrero1) - parseInt(i3febrero2)) / parseInt(i3febrero1)) *
      100;
    const i3Totalmarzo =
      ((parseInt(i3marzo1) - parseInt(i3marzo2)) / parseInt(i3marzo1)) * 100;
    const i3Totalabril =
      ((parseInt(i3abril1) - parseInt(i3abril2)) / parseInt(i3abril1)) * 100;
    const i3Totalmayo =
      ((parseInt(i3mayo1) - parseInt(i3mayo2)) / parseInt(i3mayo1)) * 100;
    const i3Totaljunio =
      ((parseInt(i3junio1) - parseInt(i3junio2)) / parseInt(i3junio1)) * 100;

    setI3Totalenero(i3Totalenero);
    setI3Totalfebrero(i3Totalfebrero);
    setI3Totalmarzo(i3Totalmarzo);
    setI3Totalabril(i3Totalabril);
    setI3Totalmayo(i3Totalmayo);
    setI3Totaljunio(i3Totaljunio);

    const i4Totalenero = (parseInt(i4enero1) / parseInt(i4enero2)) * 100;
    const i4Totalfebrero = (parseInt(i4febrero1) / parseInt(i4febrero2)) * 100;
    const i4Totalmarzo = (parseInt(i4marzo1) / parseInt(i4marzo2)) * 100;
    const i4Totalabril = (parseInt(i4abril1) / parseInt(i4abril2)) * 100;
    const i4Totalmayo = (parseInt(i4mayo1) / parseInt(i4mayo2)) * 100;
    const i4Totaljunio = (parseInt(i4junio1) / parseInt(i4junio2)) * 100;

    setI4Totalenero(i4Totalenero);
    setI4Totalfebrero(i4Totalfebrero);
    setI4Totalmarzo(i4Totalmarzo);
    setI4Totalabril(i4Totalabril);
    setI4Totalmayo(i4Totalmayo);
    setI4Totaljunio(i4Totaljunio);

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

    i3enero1,
    i3febrero1,
    i3marzo1,
    i3abril1,
    i3mayo1,
    i3junio1,
    i3enero2,
    i3febrero2,
    i3marzo2,
    i3abril2,
    i3mayo2,
    i3junio2,

    i4enero1,
    i4febrero1,
    i4marzo1,
    i4abril1,
    i4mayo1,
    i4junio1,
    i4enero2,
    i4febrero2,
    i4marzo2,
    i4abril2,
    i4mayo2,
    i4junio2,

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

  // useEffect(() => {
  //  if (userInfo) {
  //   navigate(redirect);
  //  }
  // }, [navigate, redirect, userInfo]);

  const [loading, setLoading] = useState(false);

  return (
    <Container className="small-container2">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="my-3">
        INDICADORES DEL SGIRS (DESARROLLOS MULTIFAMILIARES)
      </h4>
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
              <td>Número de actividades ejecutadas semestralmente</td>
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
              <td>Número de actividades programadas semestralmente</td>
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
              <th colSpan={4}>
                Indicador 2: Cumplimiento de las condiciones técnicas de la
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

        {/* INDICADOR 3 */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 3: Porcentaje de generación de residuos no
                aprovechables generados en el DM
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
              <td>
                Cantidad de residuos sólidos generado en el periodo anterior
                (kg)
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Enero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Febrero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Marzo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Abril1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Mayo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Junio1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Cantidad de residuos sólidos generados en el periodo a evaluar
                (kg)
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Enero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Febrero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Marzo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Abril2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Mayo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI3Junio2(e.target.value)}
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
              <th colSpan={2}>
                Indicador 4: Porcentaje de residuos aprovechables reincorporados
                a la cadena productiva de reciclaje por el edificio o conjunto
                residencial
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
              <td>Peso total de residuos aprovechables (kg)</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Enero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Febrero1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Marzo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Abril1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Mayo1(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Junio1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Peso total de residuos generados (kg)</td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Enero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Febrero2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Marzo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Abril2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Mayo2(e.target.value)}
                />
              </td>
              <td className="columnas">
                <Form.Control
                  type="number"
                  required
                  onChange={(e) => setI4Junio2(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Resultado Indicador 4 </td>
              <td className="columnas">
                <Form.Control type="number" value={i4totalenero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i4totalfebrero} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i4totalmarzo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i4totalabril} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i4totalmayo} disabled />
              </td>
              <td className="columnas">
                <Form.Control type="number" value={i4totaljunio} disabled />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* INDICADOR 5 */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 5: Porcentaje de actividades IEC ejecutadas con
                Residentes y empleados al interior del desarrollo multifamiliar
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
              <td>Actividades IEC ejecutadas</td>
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
              <td>Actividades IEC programadas</td>
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

        <div className="boton">
          <Button variant="success" type="button" onClick={handleShowModal}>
            Siguiente
          </Button>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {/* Contenido del modal */}
            <p>
              ¡Felicidades por completar el reporte de indicadores y cumplir con
              los requerimientos del Decreto 0595 de 2022! Tu compromiso es
              clave en el camino hacia una gestión de residuos sólidos más
              efectiva. Si en algún momento necesitas asistencia técnica para el
              diseño o implementación del SGIRS, recuerda que la Unidad
              Administrativa Especial de Servicios Públicos - UAESP está aquí
              para apoyarte. Al correo registrado será enviado próximamente el
              certificado de reporte con los datos suministrados en el registro
              de usuario. ¡Gracias por tu dedicación y hasta la próxima!
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div className="boton">
              <Button
                variant="success"
                type="submit"
                onClick={(event) => submitHandler(event)}
              >
                Enviar
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
        <MyVerticallyCenteredModal
          show={modalShow}
          parrafo="¡Hola! Para mantener la coherencia en nuestros registros, recuerda que al reportar indicadores, por favor utiliza números enteros. En caso de contar con certificados que presenten valores decimales, te sugerimos aproximarlo al número entero más cercano y asegúrate de incluir las unidades solicitadas, como kilogramos. Esta práctica nos ayudará a mantener la consistencia en nuestros datos y facilitará el análisis para mejorar nuestras acciones en la gestión de residuos. ¡Gracias por tu colaboración!"
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
