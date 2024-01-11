import React, { useState, useEffect } from 'react';
import { Container, Form, Table, Modal, Button } from 'react-bootstrap';
import Axios from 'axios';

import axios from '../api/axios';

import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import MyVerticallyCenteredModal from '../componentes/Modal';

export default function EntidadesPublicasIndicadores() {
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
      !pregunta8
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

  const [pregunta1, setPregunta1] = useState('');
  const [pregunta2, setPregunta2] = useState('');
  const [pregunta3, setPregunta3] = useState('');
  const [pregunta4, setPregunta4] = useState('');
  const [pregunta5, setPregunta5] = useState('');
  const [pregunta6, setPregunta6] = useState('');
  const [pregunta7, setPregunta7] = useState('');
  const [pregunta8, setPregunta8] = useState('');

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

    const i3Totalenero = (parseInt(i3enero1) / parseInt(i3enero2)) * 100;
    const i3Totalfebrero = (parseInt(i3febrero1) / parseInt(i3febrero2)) * 100;
    const i3Totalmarzo = (parseInt(i3marzo1) / parseInt(i3marzo2)) * 100;
    const i3Totalabril = (parseInt(i3abril1) / parseInt(i3abril2)) * 100;
    const i3Totalmayo = (parseInt(i3mayo1) / parseInt(i3mayo2)) * 100;
    const i3Totaljunio = (parseInt(i3junio1) / parseInt(i3junio2)) * 100;

    setI3Totalenero(i3Totalenero);
    setI3Totalfebrero(i3Totalfebrero);
    setI3Totalmarzo(i3Totalmarzo);
    setI3Totalabril(i3Totalabril);
    setI3Totalmayo(i3Totalmayo);
    setI3Totaljunio(i3Totaljunio);

    setLoading(true);

    try {
      await axios.post(
        '/indicadoresep1',
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
        '/indicadoresep2',
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
        '/indicadoresep3',
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
        '/indicadoresep4',
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

    const i3Totalenero = (parseInt(i3enero1) / parseInt(i3enero2)) * 100;
    const i3Totalfebrero = (parseInt(i3febrero1) / parseInt(i3febrero2)) * 100;
    const i3Totalmarzo = (parseInt(i3marzo1) / parseInt(i3marzo2)) * 100;
    const i3Totalabril = (parseInt(i3abril1) / parseInt(i3abril2)) * 100;
    const i3Totalmayo = (parseInt(i3mayo1) / parseInt(i3mayo2)) * 100;
    const i3Totaljunio = (parseInt(i3junio1) / parseInt(i3junio2)) * 100;

    setI3Totalenero(i3Totalenero);
    setI3Totalfebrero(i3Totalfebrero);
    setI3Totalmarzo(i3Totalmarzo);
    setI3Totalabril(i3Totalabril);
    setI3Totalmayo(i3Totalmayo);
    setI3Totaljunio(i3Totaljunio);
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
    i3enero2,
    i3febrero2,
    i3marzo2,
    i3abril2,
    i3mayo2,
    i3junio2,
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
      <h4 className="my-3">INDICADORES DEL SGIRS (ENTIDADES PUBLICAS)</h4>
      <br></br>
      <Form onSubmit={submitHandler}>
        {/* INDICADOR 1 */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2}>
                Indicador 1: Porcentaje de ejecución de actividades IEC:
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
                aprovechables generados en la entidad pública
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
              <td>Peso total de residuos no aprovechables (kg)</td>
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
              <td>Peso total de residuos generados (kg)</td>
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
