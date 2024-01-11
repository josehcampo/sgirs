import React, { useState, useEffect } from 'react';
import { Container, Form, Modal, Button } from 'react-bootstrap';
//import Axios from 'axios';
import axios from '../api/axios';

import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import MyVerticallyCenteredModal from '../componentes/Modal';
import { USER_ROLE } from '../types';

const PATH_BY_ROLE = new Map();
PATH_BY_ROLE.set(USER_ROLE.COMERCIAL_Y_SERVICIOS, '/comercialindicadores');
PATH_BY_ROLE.set(USER_ROLE.ORGANICOS, '/OrganicosIndicadores');
PATH_BY_ROLE.set(USER_ROLE.INSTITUCIONES_EDUCATIVAS, '/IEIndicadores');
PATH_BY_ROLE.set(USER_ROLE.EVENTOS_MASIVOS, '/EventosMasivosIndicadores');
PATH_BY_ROLE.set(USER_ROLE.ENTIDADES_PUBLICAS, '/EntidadesPublicasIndicadores');
PATH_BY_ROLE.set(USER_ROLE.DESARROLLOS_MULTIFAMILIARES, '/DMIndicadores');

export default function Questions({ userRole, userNit }) {
  // STATE MODAL
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '';

  const [modalShow, setModalShow] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (
      !pregunta1 ||
      !pregunta2 ||
      !pregunta3 ||
      !pregunta4 ||
      !pregunta5 ||
      !pregunta6 ||
      !pregunta7 ||
      !pregunta8 ||
      !pregunta9 ||
      !pregunta10 ||
      !pregunta11 ||
      !pregunta12 ||
      !pregunta15 ||
      !pregunta22 ||
      !pregunta26 ||
      !pregunta30 ||
      !pregunta33 ||
      !pregunta37 ||
      !pregunta39 ||
      !pregunta40 ||
      !pregunta41
    ) {
      toast.error('Por favor, completa todos los campos antes de continuar.');
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  /* CONDICIONAL DIAGNOSTICO */

  const [respuestadiagnostico, setRespuestadiagnostico] = useState('');
  const [mostrarPreguntadiagnostico, setMostrarPreguntadiagnostico] =
    useState(false);

  const handleRespuestadiagnosticoChange = (event) => {
    setRespuestadiagnostico(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntadiagnostico(true);
    } else {
      setMostrarPreguntadiagnostico(false);
    }
  };

  /* CONDICIONAL ESQUEMA */

  const [respuestaesquema, setRespuestaesquema] = useState('');
  const [mostrarPreguntaesquema, setMostrarPreguntaesquema] = useState(false);
  const handleRespuestaesquemaChange = (event) => {
    setRespuestaesquema(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaesquema(true);
    } else {
      setMostrarPreguntaesquema(false);
    }
  };

  /* CONDICIONAL CARECTIZACIÓN */

  const [respuestaCarectizacion, setRespuestaCarectizacion] = useState('');
  const [mostrarPreguntaCarectizacion, setMostrarPreguntaCarectizacion] =
    useState(false);
  const handleRespuestaCarectizacionChange = (event) => {
    setRespuestaCarectizacion(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaCarectizacion(true);
    } else {
      setMostrarPreguntaCarectizacion(false);
    }
  };

  /* CONDICIONAL AFORO */

  const [respuestaAforo, setRespuestaAforo] = useState('');
  const [mostrarPreguntaAforo, setMostrarPreguntaAforo] = useState(false);
  const handleRespuestaAforoChange = (event) => {
    setRespuestaAforo(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAforo(true);
    } else {
      setMostrarPreguntaAforo(false);
    }
  };

  /* CONDICIONAL ORGANICOS */

  const [respuestaOrganicos, setRespuestaOrganicos] = useState('');
  const [mostrarPreguntaOrganicos, setMostrarPreguntaOrganicos] =
    useState(false);
  const handleRespuestaOrganicosChange = (event) => {
    setRespuestaOrganicos(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaOrganicos(true);
    } else {
      setMostrarPreguntaOrganicos(false);
    }
  };

  /* CONDICIONAL APROVECHABLES */

  const [respuestaAprovechables, setRespuestaAprovechables] = useState('');
  const [mostrarPreguntaAprovechables, setMostrarPreguntaAprovechables] =
    useState(false);
  const handleRespuestaAprovechablesChange = (event) => {
    setRespuestaAprovechables(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAprovechables(true);
    } else {
      setMostrarPreguntaAprovechables(false);
    }
  };

  const [respuestaAprovechables0, setRespuestaAprovechables0] = useState('');
  const [mostrarPreguntaAprovechables0, setMostrarPreguntaAprovechables0] =
    useState(false);
  const handleRespuestaAprovechablesChange0 = (event) => {
    setRespuestaAprovechables0(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAprovechables0(true);
    } else {
      setMostrarPreguntaAprovechables0(false);
    }
  };

  const [respuestaAprovechables1, setRespuestaAprovechables1] = useState('');
  const [mostrarPreguntaAprovechables1, setMostrarPreguntaAprovechables1] =
    useState(false);
  const [mostrarPreguntaAprovechables2, setMostrarPreguntaAprovechables2] =
    useState(false);
  const handleRespuestaAprovechablesChange1 = (event) => {
    setRespuestaAprovechables1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAprovechables1(true);
    } else {
      setMostrarPreguntaAprovechables1(false);
    }
    if (event.target.value === 'no') {
      setMostrarPreguntaAprovechables2(true);
    } else {
      setMostrarPreguntaAprovechables2(false);
    }
  };

  /* CONDICIONAL ACU */

  const [respuestaAcu, setRespuestaAcu] = useState('');
  const [mostrarPreguntaAcu, setMostrarPreguntaAcu] = useState(false);
  const handleRespuestaAcuChange = (event) => {
    setRespuestaAcu(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAcu(true);
    } else {
      setMostrarPreguntaAcu(false);
    }
  };
  const [respuestaAcu1, setRespuestaAcu1] = useState('');
  const [mostrarPreguntaAcu1, setMostrarPreguntaAcu1] = useState(false);
  const handleRespuestaAcu1Change = (event) => {
    setRespuestaAcu1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaAcu1(true);
    } else {
      setMostrarPreguntaAcu1(false);
    }
  };

  /* CONDICIONAL RAEE */

  const [respuestaRaee, setRespuestaRaee] = useState('');
  const [mostrarPreguntaRaee, setMostrarPreguntaRaee] = useState(false);
  const handleRespuestaRaeeChange = (event) => {
    setRespuestaRaee(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaRaee(true);
    } else {
      setMostrarPreguntaRaee(false);
    }
  };
  const [respuestaRaee1, setRespuestaRaee1] = useState('');
  const [mostrarPreguntaRaee1, setMostrarPreguntaRaee1] = useState(false);
  const handleRespuestaRaee1Change = (event) => {
    setRespuestaRaee1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaRaee1(true);
    } else {
      setMostrarPreguntaRaee1(false);
    }
  };

  /* CONDICIONAL RCD */

  const [respuestaRcd, setRespuestaRcd] = useState('');
  const [mostrarPreguntaRcd, setMostrarPreguntaRcd] = useState(false);
  const handleRespuestaRcdChange = (event) => {
    setRespuestaRcd(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaRcd(true);
    } else {
      setMostrarPreguntaRcd(false);
    }
  };
  const [respuestaRcd1, setRespuestaRcd1] = useState('');
  const [mostrarPreguntaRcd1, setMostrarPreguntaRcd1] = useState(false);
  const handleRespuestaRcd1Change = (event) => {
    setRespuestaRcd1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaRcd1(true);
    } else {
      setMostrarPreguntaRcd1(false);
    }
  };

  /* CONDICIONAL PELIGROSOS */

  const [respuestaPeligrosos, setRespuestaPeligrosos] = useState('');
  const [mostrarPreguntaPeligrosos, setMostrarPreguntaPeligrosos] =
    useState(false);
  const handleRespuestaPeligrososChange = (event) => {
    setRespuestaPeligrosos(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaPeligrosos(true);
    } else {
      setMostrarPreguntaPeligrosos(false);
    }
  };
  const [respuestaPeligrosos1, setRespuestaPeligrosos1] = useState('');
  const [mostrarPreguntaPeligrosos1, setMostrarPreguntaPeligrosos1] =
    useState(false);
  const handleRespuestaPeligrosos1Change = (event) => {
    setRespuestaPeligrosos1(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaPeligrosos1(true);
    } else {
      setMostrarPreguntaPeligrosos1(false);
    }
  };

  /* CONDICIONAL VOLUMINOSOS */

  const [respuestaVoluminosos, setRespuestaVoluminosos] = useState('');
  const [mostrarPreguntaVoluminosos, setMostrarPreguntaVoluminosos] =
    useState(false);
  const handleRespuestaVoluminososChange = (event) => {
    setRespuestaVoluminosos(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaVoluminosos(true);
    } else {
      setMostrarPreguntaVoluminosos(false);
    }
  };

  /* CONDICIONAL COMUNICACIÓN */

  const [respuestaComunicacion, setRespuestaComunicacion] = useState('');
  const [mostrarPreguntaComunicacion, setMostrarPreguntaComunicacion] =
    useState(false);
  const handleRespuestaComunicacionChange = (event) => {
    setRespuestaComunicacion(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaComunicacion(true);
    } else {
      setMostrarPreguntaComunicacion(false);
    }
  };

  /* CONDICIONAL MEJORA */

  const [respuestaMejora, setRespuestaMejora] = useState('');
  const [mostrarPreguntaMejora, setMostrarPreguntaMejora] = useState(false);
  const handleRespuestaMejoraChange = (event) => {
    setRespuestaMejora(event.target.value);
    if (event.target.value === 'si') {
      setMostrarPreguntaMejora(true);
    } else {
      setMostrarPreguntaMejora(false);
    }
  };
  ////////////////////////////////////////////////////////////////////

  const [pregunta1, setPregunta1] = useState('');
  const [pregunta1pdf, setPregunta1pdf] = useState(null);
  const [pregunta2, setPregunta2] = useState('');
  const [pregunta2pdf, setPregunta2pdf] = useState(null);
  const [pregunta3, setPregunta3] = useState('');
  const [pregunta3pdf, setPregunta3pdf] = useState(null);
  const [pregunta4, setPregunta4] = useState('');
  const [pregunta5, setPregunta5] = useState('');
  const [pregunta6, setPregunta6] = useState('');
  const [pregunta7, setPregunta7] = useState('');
  const [pregunta8, setPregunta8] = useState('');
  const [pregunta9, setPregunta9] = useState('');
  const [pregunta10, setPregunta10] = useState('');
  const [pregunta10pdf, setPregunta10pdf] = useState(null);
  const [pregunta11, setPregunta11] = useState('');
  const [pregunta12, setPregunta12] = useState('');
  const [pregunta12pdf, setPregunta12pdf] = useState(null);
  const [pregunta13, setPregunta13] = useState('');
  const [pregunta14, setPregunta14] = useState('');
  const [pregunta15, setPregunta15] = useState('');
  const [pregunta16, setPregunta16] = useState([]);
  const [pregunta17, setPregunta17] = useState('');
  const [pregunta17pdf, setPregunta17pdf] = useState(null);
  const [pregunta18, setPregunta18] = useState('');
  const [pregunta19, setPregunta19] = useState('');
  const [pregunta20, setPregunta20] = useState('');
  const [pregunta21, setPregunta21] = useState('');
  const [pregunta22, setPregunta22] = useState('');
  const [pregunta23, setPregunta23] = useState('');
  const [pregunta23pdf, setPregunta23pdf] = useState(null);
  const [pregunta24, setPregunta24] = useState('');
  const [pregunta25, setPregunta25] = useState('');
  const [pregunta26, setPregunta26] = useState('');
  const [pregunta27, setPregunta27] = useState([]);
  const [pregunta28, setPregunta28] = useState('');
  const [pregunta28pdf, setPregunta28pdf] = useState(null);
  const [pregunta29, setPregunta29] = useState('');
  const [pregunta30, setPregunta30] = useState('');
  const [pregunta31, setPregunta31] = useState('');
  const [pregunta31pdf, setPregunta31pdf] = useState(null);
  const [pregunta32, setPregunta32] = useState('');
  const [pregunta33, setPregunta33] = useState('');
  const [pregunta34, setPregunta34] = useState([]);
  const [pregunta35, setPregunta35] = useState('');
  const [pregunta35pdf, setPregunta35pdf] = useState(null);
  const [pregunta36, setPregunta36] = useState('');
  const [pregunta37, setPregunta37] = useState('');
  const [pregunta38, setPregunta38] = useState([]);
  const [pregunta39, setPregunta39] = useState('');
  const [pregunta40, setPregunta40] = useState('');
  const [pregunta40pdf, setPregunta40pdf] = useState(null);
  const [pregunta41, setPregunta41] = useState('');
  const [pregunta41pdf, setPregunta41pdf] = useState(null);

  // controladores de eventos para las preguntas

  const handlePregunta1Change = (event) => {
    setPregunta1(event.target.value);
  };
  const handlePregunta2Change = (event) => {
    setPregunta2(event.target.value);
  };
  const handlePregunta3Change = (event) => {
    setPregunta3(event.target.value);
  };
  const handlePregunta4Change = (event) => {
    setPregunta4(event.target.value);
  };
  const handlePregunta5Change = (event) => {
    setPregunta5(event.target.value);
  };
  const handlePregunta6Change = (event) => {
    setPregunta6(event.target.value);
  };
  const handlePregunta7Change = (event) => {
    setPregunta7(event.target.value);
  };
  const handlePregunta8Change = (event) => {
    setPregunta8(event.target.value);
  };
  const handlePregunta9Change = (event) => {
    setPregunta9(event.target.value);
  };
  const handlePregunta10Change = (event) => {
    setPregunta10(event.target.value);
  };
  const handlePregunta11Change = (event) => {
    setPregunta11(event.target.value);
  };
  const handlePregunta12Change = (event) => {
    setPregunta12(event.target.value);
  };
  const handlePregunta13Change = (event) => {
    setPregunta13(event.target.value);
  };
  const handlePregunta14Change = (event) => {
    setPregunta14(event.target.value);
  };
  const handlePregunta15Change = (event) => {
    setPregunta15(event.target.value);
  };
  const handlePregunta17Change = (event) => {
    setPregunta17(event.target.value);
  };
  const handlePregunta18Change = (event) => {
    setPregunta18(event.target.value);
  };
  const handlePregunta19Change = (event) => {
    setPregunta19(event.target.value);
  };
  const handlePregunta20Change = (event) => {
    setPregunta20(event.target.value);
  };
  const handlePregunta21Change = (event) => {
    setPregunta21(event.target.value);
  };
  const handlePregunta22Change = (event) => {
    setPregunta22(event.target.value);
  };
  const handlePregunta23Change = (event) => {
    setPregunta23(event.target.value);
  };
  const handlePregunta24Change = (event) => {
    setPregunta24(event.target.value);
  };
  const handlePregunta25Change = (event) => {
    setPregunta25(event.target.value);
  };
  const handlePregunta26Change = (event) => {
    setPregunta26(event.target.value);
  };
  const handlePregunta28Change = (event) => {
    setPregunta28(event.target.value);
  };
  const handlePregunta29Change = (event) => {
    setPregunta29(event.target.value);
  };
  const handlePregunta30Change = (event) => {
    setPregunta30(event.target.value);
  };
  const handlePregunta31Change = (event) => {
    setPregunta31(event.target.value);
  };
  const handlePregunta32Change = (event) => {
    setPregunta32(event.target.value);
  };
  const handlePregunta33Change = (event) => {
    setPregunta33(event.target.value);
  };
  const handlePregunta35Change = (event) => {
    setPregunta35(event.target.value);
  };
  const handlePregunta36Change = (event) => {
    setPregunta36(event.target.value);
  };
  const handlePregunta37Change = (event) => {
    setPregunta37(event.target.value);
  };
  const handlePregunta39Change = (event) => {
    setPregunta39(event.target.value);
  };
  const handlePregunta40Change = (event) => {
    setPregunta40(event.target.value);
  };
  const handlePregunta41Change = (event) => {
    setPregunta41(event.target.value);
  };

  //  controladores de eventos para los archivos PDF

  const handlePregunta1pdfChange = (event) => {
    setPregunta1pdf(event.target.files[0]);
  };
  const handlePregunta2pdfChange = (event) => {
    setPregunta2pdf(event.target.files[0]);
  };
  const handlePregunta3pdfChange = (event) => {
    setPregunta3pdf(event.target.files[0]);
  };
  const handlePregunta10pdfChange = (event) => {
    setPregunta10pdf(event.target.files[0]);
  };
  const handlePregunta12pdfChange = (event) => {
    setPregunta12pdf(event.target.files[0]);
  };
  const handlePregunta17pdfChange = (event) => {
    setPregunta17pdf(event.target.files[0]);
  };
  const handlePregunta23pdfChange = (event) => {
    setPregunta23pdf(event.target.files[0]);
  };
  const handlePregunta28pdfChange = (event) => {
    setPregunta28pdf(event.target.files[0]);
  };
  const handlePregunta31pdfChange = (event) => {
    setPregunta31pdf(event.target.files[0]);
  };
  const handlePregunta35pdfChange = (event) => {
    setPregunta35pdf(event.target.files[0]);
  };
  const handlePregunta40pdfChange = (event) => {
    setPregunta40pdf(event.target.files[0]);
  };
  const handlePregunta41pdfChange = (event) => {
    setPregunta41pdf(event.target.files[0]);
  };

  //  controladores de eventos para las preguntas de varias opciones

  const handlePregunta16Change = (event) => {
    const { value, checked } = event.target;
    setPregunta16((prevPregunta16) => {
      if (checked) {
        return [...prevPregunta16, value];
      } else {
        return prevPregunta16.filter((option) => option !== value);
      }
    });
  };

  const handlePregunta27Change = (event) => {
    const { value, checked } = event.target;
    setPregunta27((prevPregunta27) => {
      if (checked) {
        return [...prevPregunta27, value];
      } else {
        return prevPregunta27.filter((option) => option !== value);
      }
    });
  };

  const handlePregunta34Change = (event) => {
    const { value, checked } = event.target;
    setPregunta34((prevPregunta34) => {
      if (checked) {
        return [...prevPregunta34, value];
      } else {
        return prevPregunta34.filter((option) => option !== value);
      }
    });
  };

  const handlePregunta38Change = (event) => {
    const { value, checked } = event.target;
    setPregunta38((prevPregunta38) => {
      if (checked) {
        return [...prevPregunta38, value];
      } else {
        return prevPregunta38.filter((option) => option !== value);
      }
    });
  };

  //////////////////////////////////////////////////////////////////

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('userid', userNit);
      formData.append('pregunta1', pregunta1);
      formData.append('pregunta1pdf', pregunta1pdf);

      formData.append('pregunta2', pregunta2);
      formData.append('pregunta2pdf', pregunta2pdf);

      formData.append('pregunta3', pregunta3);
      formData.append('pregunta3pdf', pregunta3pdf);

      formData.append('pregunta4', pregunta4);
      formData.append('pregunta5', pregunta5);
      formData.append('pregunta6', pregunta6);
      formData.append('pregunta7', pregunta7);
      formData.append('pregunta8', pregunta8);
      formData.append('pregunta9', pregunta9);
      formData.append('pregunta10', pregunta10);
      formData.append('pregunta10pdf', pregunta10pdf);

      formData.append('pregunta11', pregunta11);
      formData.append('pregunta12', pregunta12);
      formData.append('pregunta12pdf', pregunta12pdf);

      formData.append('pregunta13', pregunta13);
      formData.append('pregunta14', pregunta14);
      formData.append('pregunta15', pregunta15);
      formData.append('pregunta16', pregunta16);

      formData.append('pregunta17', pregunta17);
      formData.append('pregunta17pdf', pregunta17pdf);

      formData.append('pregunta18', pregunta18);
      formData.append('pregunta19', pregunta19);
      formData.append('pregunta20', pregunta20);
      formData.append('pregunta21', pregunta21);
      formData.append('pregunta22', pregunta22);
      formData.append('pregunta23', pregunta23);
      formData.append('pregunta23pdf', pregunta23pdf);

      formData.append('pregunta24', pregunta24);
      formData.append('pregunta25', pregunta25);
      formData.append('pregunta26', pregunta26);
      formData.append('pregunta27', pregunta27);

      formData.append('pregunta28', pregunta28);
      formData.append('pregunta28pdf', pregunta28pdf);

      formData.append('pregunta29', pregunta29);
      formData.append('pregunta30', pregunta30);
      formData.append('pregunta31', pregunta31);
      formData.append('pregunta31pdf', pregunta31pdf);

      formData.append('pregunta32', pregunta32);
      formData.append('pregunta33', pregunta33);
      formData.append('pregunta34', pregunta34);

      formData.append('pregunta35', pregunta35);
      formData.append('pregunta35pdf', pregunta35pdf);

      formData.append('pregunta36', pregunta36);
      formData.append('pregunta37', pregunta37);
      formData.append('pregunta38', pregunta38);

      formData.append('pregunta39', pregunta39);
      formData.append('pregunta40', pregunta40);
      formData.append('pregunta40pdf', pregunta40pdf);

      formData.append('pregunta41', pregunta41);
      formData.append('pregunta41pdf', pregunta41pdf);

      await axios
        .post('/questions', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        })
        .then((res) => {
          const objectRoles = {
            1: 'COMERCIAL_Y_SERVICIOS',
            2: 'ORGANICOS',
            3: 'INSTITUCIONES_EDUCATIVAS',
            4: 'EVENTOS_MASIVOS',
            5: 'ENTIDADES_PUBLICAS',
            6: 'DESARROLLOS_MULTIFAMILIARES',
          };
          console.log('Datos enviados correctamente');
          const user = JSON.parse(localStorage.userInfo);
          const role = parseInt(user.idsector);
          let userRole = objectRoles[role];
          navigate(PATH_BY_ROLE.get(userRole));
        })
        .catch((err) => console.log(err));

      // Realizar acciones adicionales después del envío exitoso
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      // Realizar acciones adicionales en caso de error
    }

    handleCloseModal();
  };

  return (
    <Container className="small-container1">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="my-3">CUESTIONARIO MANUAL DE SGIRS</h4>
      <br></br>
      <Form onSubmit={submitHandler}>
        {/* PREGUNTA 1 */}
        <Form.Label>
          ¿Cuenta con un diagnóstico del SGIRS? Anexar documento de diagnóstico
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestadiagnostico === 'si' && pregunta1 === 'si'}
              onChange={(event) => {
                handleRespuestadiagnosticoChange(event);
                handlePregunta1Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestadiagnostico === 'no' && pregunta1 === 'no'}
              onChange={(event) => {
                handleRespuestadiagnosticoChange(event);
                handlePregunta1Change(event);
              }}
            />
          </div>
        ))}
        {mostrarPreguntadiagnostico && (
          <label>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handlePregunta1pdfChange}
              />
            </Form.Group>
          </label>
        )}
        {/* PREGUNTA 2 */}
        <Form.Label>
          ¿Cuenta con la definición de un esquema organizacional en la que se
          asignen roles y responsabilidades para el cumplimiento del SGIRS?
          Anexar esquema con asignación de roles
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaesquema === 'si' && pregunta2 === 'si'}
              onChange={(event) => {
                handleRespuestaesquemaChange(event);
                handlePregunta2Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaesquema === 'no' && pregunta2 === 'no'}
              onChange={(event) => {
                handleRespuestaesquemaChange(event);
                handlePregunta2Change(event);
              }}
            />
          </div>
        ))}
        {mostrarPreguntaesquema && (
          <label>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handlePregunta2pdfChange}
              />
            </Form.Group>
          </label>
        )}

        {/* PREGUNTA 3 */}
        <Form.Label>
          ¿Cuenta con una caracterización de residuos sólidos generados en el
          establecimiento? Si cuenta con la caracterización, anexar registro
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaCarectizacion === 'si' && pregunta3 === 'si'}
              onChange={(event) => {
                handleRespuestaCarectizacionChange(event);
                handlePregunta3Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaCarectizacion === 'no' && pregunta3 === 'no'}
              onChange={(event) => {
                handleRespuestaCarectizacionChange(event);
                handlePregunta3Change(event);
              }}
            />
          </div>
        ))}
        {mostrarPreguntaCarectizacion && (
          <label>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handlePregunta3pdfChange}
              />
            </Form.Group>
          </label>
        )}

        {/* PREGUNTA 4 */}
        <Form.Label>
          ¿Realiza separación en la fuente de acuerdo a la Resolución 2184 de
          2019?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={pregunta4 === 'si'}
              onChange={handlePregunta4Change}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={pregunta4 === 'no'}
              onChange={handlePregunta4Change}
            />
          </div>
        ))}

        {/* PREGUNTA 5 */}
        <Form.Label>
          ¿Cuenta con mobiliario para la separación de los residuos de acuerdo
          al código de colores exigidos en la Resolución 2184 de 2019?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={pregunta5 === 'si'}
              onChange={handlePregunta5Change}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={pregunta5 === 'no'}
              onChange={handlePregunta5Change}
            />
          </div>
        ))}

        {/* PREGUNTA 6 */}
        <Form.Label>
          ¿Cuénta con rutas de recolección interna de residuos?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={pregunta6 === 'si'}
              onChange={handlePregunta6Change}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={pregunta6 === 'no'}
              onChange={handlePregunta6Change}
            />
          </div>
        ))}

        {/* PREGUNTA 7 */}
        <Form.Label>
          ¿Cuenta con Unidad de Almacenamiento de Residuos (UAR)?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={pregunta7 === 'si'}
              onChange={handlePregunta7Change}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={pregunta7 === 'no'}
              onChange={handlePregunta7Change}
            />
          </div>
        ))}

        {/* PREGUNTA 8 */}
        <Form.Group controlId="pregunta8">
          <Form.Label>
            ¿Cuál es la empresa del servicio público de aseo que realiza la
            recolección de los residuos no aprovechables?
          </Form.Label>
          <Form.Select value={pregunta8} onChange={handlePregunta8Change}>
            <option>Seleccione una opción</option>
            <option value="VEOLIA SA ESP">VEOLIA SA ESP</option>
            <option value="PROMOCALI SA ESP">PROMOCALI SA ESP</option>
            <option value="PROMOVALLE SA ESP">PROMOVALLE SA ESP</option>
            <option value="CIUDAD LIMPIA SA ESP">CIUDAD LIMPIA SA ESP</option>
            <option value="PROASA SA ESP">PROASA SA ESP</option>
            <option value="LYS SA ESP">LYS SA ESP</option>
            <option value="MISION AMBIENTAL SA ESP">
              MISION AMBIENTAL SA ESP
            </option>
            <option value="PRO-AMBIENTALES SA ESP">
              PRO-AMBIENTALES SA ESP
            </option>
            <option value="SERVIAMBIENTALES SA ESP">
              SERVIAMBIENTALES SA ESP
            </option>
          </Form.Select>
        </Form.Group>
        <br></br>
        {/* PREGUNTA 9 */}
        <Form.Group controlId="pregunta9">
          <Form.Label>
            ¿Cuál es la frecuencia de recolección de residuos no aprovechables
            que realiza la empresa del servicio público de aseo?
          </Form.Label>
          <Form.Select value={pregunta9} onChange={handlePregunta9Change}>
            <option>Seleccione una opción</option>
            <option value="7 DÍAS A LA SEMANA">7 DÍAS A LA SEMANA</option>
            <option value="6 DÍAS A LA SEMANA">6 DÍAS A LA SEMANA</option>
            <option value="3 DÍAS A LA SEMANA">3 DÍAS A LA SEMANA</option>
            <option value="2 DÍAS A LA SEMANA">2 DÍAS A LA SEMANA</option>
            <option value="1 DÍA A LA SEMANA">1 DÍA A LA SEMANA</option>
          </Form.Select>
        </Form.Group>
        <br></br>
        {/* PREGUNTA 10 */}
        <Form.Label>
          ¿Se ha realizado aforo de los residuos ordinarios recolectados por la
          empresa del servicio público de aseo? Si cuenta con aforo, anexar el
          registro
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaAforo === 'si' && pregunta10 === 'si'}
              onChange={(event) => {
                handleRespuestaAforoChange(event);
                handlePregunta10Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaAforo === 'no' && pregunta10 === 'no'}
              onChange={(event) => {
                handleRespuestaAforoChange(event);
                handlePregunta10Change(event);
              }}
            />
          </div>
        ))}
        {mostrarPreguntaAforo && (
          <label>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handlePregunta10pdfChange}
              />
            </Form.Group>
          </label>
        )}

        {/* PREGUNTA 11 */}
        <Form.Label>
          ¿Cuenta con plazoleta de comida, restaurante u ofrece un servicio que
          genere residuos sólidos orgánicos? Como cáscara de frutas, verduras,
          cáscara de huevos, entre otros.
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={pregunta11 === 'si'}
              onChange={handlePregunta11Change}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={pregunta11 === 'no'}
              onChange={handlePregunta11Change}
            />
          </div>
        ))}

        {/* PREGUNTA 12 */}
        <Form.Label>
          ¿El establecimiento solicita la recolección de Residuos Sólidos
          Orgánicos - RSO a través de un gestor para su aprovechamiento? Si
          cuenta con certificados anexar en un solo archivo (formato PDF) los
          certificados correspondientes al periodo de reporte
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaOrganicos === 'si' && pregunta12 === 'si'}
              onChange={(event) => {
                handleRespuestaOrganicosChange(event);
                handlePregunta12Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-2`}
              value="no"
              checked={respuestaOrganicos === 'no' && pregunta12 === 'no'}
              onChange={(event) => {
                handleRespuestaOrganicosChange(event);
                handlePregunta12Change(event);
              }}
            />
          </div>
        ))}
        {mostrarPreguntaOrganicos && (
          <label>
            <label>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  type="file"
                  accept=".pdf"
                  onChange={handlePregunta12pdfChange}
                />
              </Form.Group>
            </label>
            {/* PREGUNTA 13 */}
            <Form.Group controlId="pregunta13">
              <Form.Label>
                Especificar cuál es el gestor de Residuos Sólidos Orgánicos -
                RSO
              </Form.Label>
              <Form.Select value={pregunta13} onChange={handlePregunta13Change}>
                <option>Seleccione una opción</option>
                <option value="HUMUS ABONOS ORGÁNICOS">
                  HUMUS ABONOS ORGÁNICOS
                </option>
                <option value="GEMA GRIN">GEMA GRIN</option>
                <option value="DISTRIABONOS LTDA">DISTRIABONOS LTDA</option>
                <option value="CORPOAMBIENTE">CORPOAMBIENTE</option>
                <option value="SOLTAC SAS">SOLTAC SAS</option>
                <option value="COMPOSTANDO">COMPOSTANDO</option>
                <option value="OTRO">OTRO</option>
              </Form.Select>
            </Form.Group>
            <br></br>
            {/* PREGUNTA 14 */}
            <Form.Group controlId="pregunta14">
              <Form.Label>
                ¿Cuál es la frecuencia de recolección de los residuos sólidos
                orgánicos?
              </Form.Label>
              <Form.Select value={pregunta14} onChange={handlePregunta14Change}>
                <option>Seleccione una opción</option>
                <option value="7 DÍAS A LA SEMANA">7 DÍAS A LA SEMANA</option>
                <option value="6 DÍAS A LA SEMANA">6 DÍAS A LA SEMANA</option>
                <option value="3 DÍAS A LA SEMANA">3 DÍAS A LA SEMANA</option>
                <option value="2 DÍAS A LA SEMANA">2 DÍAS A LA SEMANA</option>
                <option value="1 DÍA A LA SEMANA">1 DÍA A LA SEMANA</option>
              </Form.Select>
            </Form.Group>
            <br></br>
          </label>
        )}

        {/* PREGUNTA 15 */}
        <Form.Label>
          ¿El establecimiento genera residuos aprovechables? Como el papel,
          plastico, cartón, vídrio y metal
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaAprovechables === 'si' && pregunta15 === 'si'}
              onChange={(event) => {
                handleRespuestaAprovechablesChange(event);
                handlePregunta15Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              value="no"
              checked={respuestaAprovechables === 'no' && pregunta15 === 'no'}
              onChange={(event) => {
                handleRespuestaAprovechablesChange(event);
                handlePregunta15Change(event);
              }}
            />
          </div>
        ))}

        {mostrarPreguntaAprovechables && (
          <label>
            {/* PREGUNTA 16 */}
            <label>
              <Form.Label>
                ¿Cuáles son los residuos aprovechables que genera? Seleccione
                una o varias opciones.
              </Form.Label>
              <div className="mb-3">
                <Form.Check
                  inline
                  label="Plástico"
                  name="pregunta16"
                  type="checkbox"
                  value="plastico"
                  checked={pregunta16.includes('plastico')}
                  onChange={handlePregunta16Change}
                />
                <Form.Check
                  inline
                  label="Cartón"
                  name="pregunta16"
                  type="checkbox"
                  value="carton"
                  checked={pregunta16.includes('carton')}
                  onChange={handlePregunta16Change}
                />
                <Form.Check
                  inline
                  label="Vidrio"
                  name="pregunta16"
                  type="checkbox"
                  value="vidrio"
                  checked={pregunta16.includes('vidrio')}
                  onChange={handlePregunta16Change}
                />
                <Form.Check
                  inline
                  label="Papel"
                  name="pregunta16"
                  type="checkbox"
                  value="papel"
                  checked={pregunta16.includes('papel')}
                  onChange={handlePregunta16Change}
                />
                <Form.Check
                  inline
                  label="Metal"
                  name="pregunta16"
                  type="checkbox"
                  value="metal"
                  checked={pregunta16.includes('metal')}
                  onChange={handlePregunta16Change}
                />
              </div>
            </label>
            {/* PREGUNTA 17 */}

            <Form.Label>
              ¿Solicita recolección de residuos aprovechables a través de un
              gestor de aprovechamiento? Si cuenta con certificados de
              aprovechamiento anexar en un solo archivo (formato PDF) los
              certificados correspondientes al periodo de reporte
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={
                    respuestaAprovechables0 === 'si' && pregunta17 === 'si'
                  }
                  onChange={(event) => {
                    handleRespuestaAprovechablesChange0(event);
                    handlePregunta17Change(event);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-2`}
                  value="no"
                  checked={
                    respuestaAprovechables0 === 'no' && pregunta17 === 'no'
                  }
                  onChange={(event) => {
                    handleRespuestaAprovechablesChange0(event);
                    handlePregunta17Change(event);
                  }}
                />
              </div>
            ))}

            {mostrarPreguntaAprovechables0 && (
              <label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control
                    type="file"
                    accept=".pdf"
                    onChange={handlePregunta17pdfChange}
                  />
                </Form.Group>
                {/* PREGUNTA 18 */}
                <Form.Label>
                  ¿El gestor es una Organización de Recicladores de Oficio
                  reconocida por la UAESP?
                </Form.Label>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Si"
                      type={type}
                      id={`inline-${type}-1`}
                      value="si"
                      checked={
                        respuestaAprovechables1 === 'si' && pregunta18 === 'si'
                      }
                      onChange={(event) => {
                        handleRespuestaAprovechablesChange1(event);
                        handlePregunta18Change(event);
                      }}
                    />
                    <Form.Check
                      inline
                      label="No"
                      type={type}
                      id={`inline-${type}-2`}
                      value="no"
                      checked={
                        respuestaAprovechables1 === 'no' && pregunta18 === 'no'
                      }
                      onChange={(event) => {
                        handleRespuestaAprovechablesChange1(event);
                        handlePregunta18Change(event);
                      }}
                    />
                  </div>
                ))}
                {mostrarPreguntaAprovechables1 && (
                  <label>
                    {/* PREGUNTA 19 */}
                    <Form.Group controlId="pregunta19">
                      <Form.Label>
                        ¿Cuál es la organización de recicladores de oficio que
                        recolecta los residuos aprovechables?
                      </Form.Label>
                      <Form.Select
                        value={pregunta19}
                        onChange={handlePregunta19Change}
                      >
                        <option>Seleccione una opción</option>
                        <option value="AMURE">AMURE</option>
                        <option value="ARAC 22">ARAC 22</option>
                        <option value="ARC">ARC</option>
                        <option value="ARCO 20">ARCO 20</option>
                        <option value="ARENA">ARENA</option>
                        <option value="ASOBOCE">ASOBOCE</option>
                        <option value="ASOBOSUR">ASOBOSUR</option>
                        <option value="ASODECORES">ASODECORES</option>
                        <option value="ASOECOLÓGICO">ASOECOLÓGICO</option>
                        <option value="ASOFUTURO">ASOFUTURO</option>
                        <option value="ASOTRIUNFO">ASOTRIUNFO</option>
                        <option value="ASTECAM">ASTECAM</option>
                        <option value="BUEN FUTURO">BUEN FUTURO</option>
                        <option value="CALI RECICLA">CALI RECICLA</option>
                        <option value="CICLOS">CICLOS</option>
                        <option value="ECOFUTURO">ECOFUTURO</option>
                        <option value="ECOINNOVANDO">ECOINNOVANDO</option>
                        <option value="FRECOL">FRECOL</option>
                        <option value="FRIC">FRIC</option>
                        <option value="FUNREAMCALI">FUNREAMCALI</option>
                        <option value="FUNRECA">FUNRECA</option>
                        <option value="FUNSECO">FUNSECO</option>
                        <option value="FURVIN">FURVIN</option>
                        <option value="HUELLA AMBIENTAL - H. A. T.">
                          HUELLA AMBIENTAL - H. A. T.
                        </option>
                        <option value="NUESTRO PLANETA">NUESTRO PLANETA</option>
                        <option value="NUEVAS LUCES">NUEVAS LUCES</option>
                        <option value="REBIEN">REBIEN</option>
                        <option value="RECICLAR">RECICLAR</option>
                        <option value="REDECOL">REDECOL</option>
                        <option value="REMA">REMA</option>
                        <option value="RENACER NUEVO HORIZONTE">
                          RENACER NUEVO HORIZONTE
                        </option>
                        <option value="SER AMBIENTAL">SER AMBIENTAL</option>
                        <option value="UFPRAME">UFPRAME</option>
                        <option value="ZARANDA">ZARANDA</option>
                      </Form.Select>
                    </Form.Group>
                    <br></br>
                  </label>
                )}
                {mostrarPreguntaAprovechables2 && (
                  <label>
                    {/* PREGUNTA 20 */}
                    <Form.Group controlId="pregunta20">
                      <Form.Label>
                        Sino corresponde a una ORO reconocida por la UAESP ¿Cuál
                        es el gestor designado para la recolección de residuos
                        aprovechables?
                      </Form.Label>
                      <Form.Select
                        value={pregunta20}
                        onChange={handlePregunta20Change}
                      >
                        <option>Seleccione una opción</option>
                        <option value="GRUPO EMPRESARIAL DE LA RECUPERACIÓN Y TRANSFORMACIÓN DE MATERIALES S.A. E.S.P - GERT S.A. E.S.P">
                          GRUPO EMPRESARIAL DE LA RECUPERACIÓN Y TRANSFORMACIÓN
                          DE MATERIALES S.A. E.S.P - GERT S.A. E.S.P
                        </option>
                        <option value="SERVICIOS EMPRESARIALES DE ASEO S.A.S E.S.P">
                          SERVICIOS EMPRESARIALES DE ASEO S.A.S E.S.P
                        </option>
                        <option value="COCOAMBIENTAL S.A.S.">
                          COCOAMBIENTAL S.A.S.
                        </option>
                        <option value="GEO RECICLABLES DE COLOMBIA S.A.S.">
                          GEO RECICLABLES DE COLOMBIA S.A.S.
                        </option>
                        <option value="GRUPO EMPRESARIA BIO GREEN S.A.S. E.S.P.">
                          GRUPO EMPRESARIA BIO GREEN S.A.S. E.S.P.
                        </option>
                        <option value="APROVECHAMIENTO DE COLOMBIA S.A.S E.S.P">
                          APROVECHAMIENTO DE COLOMBIA S.A.S E.S.P
                        </option>
                        <option value="FUNDACIÓN DE RECICLADORES INDEPENDIENTES DE CALI">
                          FUNDACIÓN DE RECICLADORES INDEPENDIENTES DE CALI
                        </option>
                        <option value="INNOVACIÓN BIOAMBIENTAL S.A.S. E.S.P.">
                          INNOVACIÓN BIOAMBIENTAL S.A.S. E.S.P.
                        </option>
                        <option value="RECICLAJE INDUSTRIAL DE COLOMBIA S.A.S.">
                          RECICLAJE INDUSTRIAL DE COLOMBIA S.A.S.
                        </option>
                      </Form.Select>
                    </Form.Group>
                    <br></br>
                  </label>
                )}
                {/* PREGUNTA 21 */}
                <Form.Group controlId="pregunta21">
                  <Form.Label>
                    ¿Cual es la frecuencia de recolección de residuos
                    aprovechables?
                  </Form.Label>
                  <Form.Select
                    value={pregunta21}
                    onChange={handlePregunta21Change}
                  >
                    <option>Seleccione una opción</option>
                    <option value="7 DÍAS A LA SEMANA">
                      7 DÍAS A LA SEMANA
                    </option>
                    <option value="6 DÍAS A LA SEMANA">
                      6 DÍAS A LA SEMANA
                    </option>
                    <option value="3 DÍAS A LA SEMANA">
                      3 DÍAS A LA SEMANA
                    </option>
                    <option value="2 DÍAS A LA SEMANA">
                      2 DÍAS A LA SEMANA
                    </option>
                    <option value="1 DÍA A LA SEMANA">1 DÍA A LA SEMANA</option>
                  </Form.Select>
                </Form.Group>
                <br></br>
              </label>
            )}
          </label>
        )}
        {/* PREGUNTA 22 */}
        <Form.Label>
          ¿El establecimiento genera Aceite de Cocina Usado - ACU?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaAcu === 'si' && pregunta22 === 'si'}
              onChange={(event) => {
                handleRespuestaAcuChange(event);
                handlePregunta22Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaAcu === 'no' && pregunta22 === 'no'}
              onChange={(event) => {
                handleRespuestaAcuChange(event);
                handlePregunta22Change(event);
              }}
            />
          </div>
        ))}

        {mostrarPreguntaAcu && (
          <label>
            {/* PREGUNTA 23 */}
            <Form.Label>
              ¿El establecimiento solicita la recolección de Aceite de Cocina
              Usado - ACU a través de un gestor? Si cuenta con certificados
              anexar en un solo archivo (formato PDF) los certificados
              correspondientes al periodo de reporte
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={respuestaAcu1 === 'si' && pregunta23 === 'si'}
                  onChange={(event) => {
                    handleRespuestaAcu1Change(event);
                    handlePregunta23Change(event);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-1`}
                  value="no"
                  checked={respuestaAcu1 === 'no' && pregunta23 === 'no'}
                  onChange={(event) => {
                    handleRespuestaAcu1Change(event);
                    handlePregunta23Change(event);
                  }}
                />
              </div>
            ))}

            {mostrarPreguntaAcu1 && (
              <label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control
                    type="file"
                    accept=".pdf"
                    onChange={handlePregunta23pdfChange}
                  />
                </Form.Group>

                {/* PREGUNTA 24 */}
                <Form.Group controlId="pregunta24">
                  <Form.Label>
                    Especificar cuál es el gestor de Aceite de Cocina Usado -
                    ACU. Recuerde que la recolección solo se debe realizar por
                    un gestor autorizado por la autoridad ambiental competente,
                    para el Distrito de Santiago de Cali: DAGMA.
                  </Form.Label>
                  <Form.Select
                    value={pregunta24}
                    onChange={handlePregunta24Change}
                  >
                    <option>Seleccione una opción</option>
                    <option value="FUNDACIÓN EMPRENDIMIENTOS AMBIENTALES">
                      FUNDACIÓN EMPRENDIMIENTOS AMBIENTALES
                    </option>
                    <option value="FUNDACIÓN CRESE RED CICLAR">
                      FUNDACIÓN CRESE RED CICLAR
                    </option>
                    <option value="TRANSATLANTIC GREENTRADE SAS - GREENFUEL">
                      TRANSATLANTIC GREENTRADE SAS - GREENFUEL
                    </option>
                    <option value="CORPORACIÓN CÍVICA DANIEL GILLARD – CECAN (BIOPRAVU)">
                      CORPORACIÓN CÍVICA DANIEL GILLARD – CECAN (BIOPRAVU)
                    </option>
                    <option value="SEVALL SEBOS DEL VALLE SAS.">
                      SEVALL SEBOS DEL VALLE SAS.
                    </option>
                    <option value="REACEICO S.A.S.">REACEICO S.A.S.</option>
                    <option value="DAVID ESTEBAN ALZATE TAMAYO - ECOILENERGÍA">
                      DAVID ESTEBAN ALZATE TAMAYO - ECOILENERGÍA
                    </option>
                    <option value="BIOGRAS S.A.S.">BIOGRAS S.A.S.</option>
                    <option value="BIOILS COLOMBIA S.A.S.">
                      BIOILS COLOMBIA S.A.S.
                    </option>
                    <option value="CI CUBUX SAS - ECOGRAS COLOMBIA.">
                      CI CUBUX SAS - ECOGRAS COLOMBIA.
                    </option>
                    <option value="GERT S.A. E.S.P.">GERT S.A. E.S.P.</option>
                    <option value="VALCO CO S.A.S.">VALCO CO S.A.S.</option>
                    <option value="TI AGRONOMICAL">TI AGRONOMICAL</option>
                    <option value="ECO URBANO VALLE.">ECO URBANO VALLE.</option>
                    <option value="ANTIOTRADING SAS">ANTIOTRADING SAS</option>
                    <option value="BOL-FIT S.A.S.">BOL-FIT S.A.S.</option>
                    <option value="C.I SEVEN SEAS COLOMBIA S.A.S.">
                      C.I SEVEN SEAS COLOMBIA S.A.S.
                    </option>
                    <option value="JOSE STEVEN VALENCIA BURGOS / OLEO-VALLE.">
                      JOSE STEVEN VALENCIA BURGOS / OLEO-VALLE.
                    </option>
                    <option value="ANDRÉS FELIPE TORRES ABADIA - EMPRESA EVOAM.">
                      ANDRÉS FELIPE TORRES ABADIA - EMPRESA EVOAM.
                    </option>
                    <option value="GRUPO EMPRESARIAL COMATCOL SAS / ECOILENERGÍA.">
                      GRUPO EMPRESARIAL COMATCOL SAS / ECOILENERGÍA.
                    </option>
                    <option value="CI ECOGRAS COLOMBIA SAS">
                      CI ECOGRAS COLOMBIA SAS
                    </option>
                    <option value="ASOBOSUR - ASOCIACION DE RECICLADORES Y FAMIBODEGAS DEL SUR.">
                      ASOBOSUR - ASOCIACION DE RECICLADORES Y FAMIBODEGAS DEL
                      SUR.
                    </option>
                    <option value="RECUPERADORES INDUSTRIALES NACIONALES S.A.S. - RECUIN">
                      RECUPERADORES INDUSTRIALES NACIONALES S.A.S. - RECUIN
                    </option>
                  </Form.Select>
                </Form.Group>
                <br></br>
              </label>
            )}
            {/* PREGUNTA 25 */}
            <Form.Group controlId="pregunta25">
              <Form.Label>
                ¿Cuál es la frecuencia de recolección del Aceite de Cocina Usado
                - ACU?
              </Form.Label>
              <Form.Select value={pregunta25} onChange={handlePregunta25Change}>
                <option>Seleccione una opción</option>
                <option value="7 DÍAS A LA SEMANA">7 DÍAS A LA SEMANA</option>
                <option value="6 DÍAS A LA SEMANA">6 DÍAS A LA SEMANA</option>
                <option value="3 DÍAS A LA SEMANA">3 DÍAS A LA SEMANA</option>
                <option value="2 DÍAS A LA SEMANA">2 DÍAS A LA SEMANA</option>
                <option value="1 DÍA A LA SEMANA">1 DÍA A LA SEMANA</option>
              </Form.Select>
            </Form.Group>
            <br></br>
          </label>
        )}

        {/* PREGUNTA 26 */}
        <Form.Label>
          ¿El establecimiento genera residuos de aparatos eléctricos y
          electrónicos - RAEE? Como pilas, luminarias, computadores
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaRaee === 'si' && pregunta26 === 'si'}
              onChange={(event) => {
                handleRespuestaRaeeChange(event);
                handlePregunta26Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaRaee === 'no' && pregunta26 === 'no'}
              onChange={(event) => {
                handleRespuestaRaeeChange(event);
                handlePregunta26Change(event);
              }}
            />
          </div>
        ))}

        {mostrarPreguntaRaee && (
          <label>
            {/* PREGUNTA 27 */}
            <Form.Label>
              ¿Cuáles son los Residuos de Aparatos Eléctricos y Electrónicos -
              RAEE que genera? Seleccione una o varias opciones
            </Form.Label>
            <div className="mb-3">
              <Form.Check
                inline
                label="Electrodomésticos"
                name="pregunta27"
                type="checkbox"
                value="electrodomesticos"
                checked={pregunta27.includes('electrodomesticos')}
                onChange={handlePregunta27Change}
              />
              <Form.Check
                inline
                label="Equipos de informática"
                name="pregunta27"
                type="checkbox"
                value="equipos-informatica"
                checked={pregunta27.includes('equipos-informatica')}
                onChange={handlePregunta27Change}
              />
              <Form.Check
                inline
                label="Radiografias"
                name="pregunta27"
                type="checkbox"
                value="radiografias"
                checked={pregunta27.includes('radiografias')}
                onChange={handlePregunta27Change}
              />
              <Form.Check
                inline
                label="Herramientas eléctricas"
                name="pregunta27"
                type="checkbox"
                value="herramientas-electricas"
                checked={pregunta27.includes('herramientas-electricas')}
                onChange={handlePregunta27Change}
              />
              <Form.Check
                inline
                label="Baterias"
                name="pregunta27"
                type="checkbox"
                value="baterias"
                checked={pregunta27.includes('baterias')}
                onChange={handlePregunta27Change}
              />
              <Form.Check
                inline
                label="Pilas"
                name="pregunta27"
                type="checkbox"
                value="pilas"
                checked={pregunta27.includes('pilas')}
                onChange={handlePregunta27Change}
              />
              <Form.Check
                inline
                label="Juguetes electrónicos"
                name="pregunta27"
                type="checkbox"
                value="juguetes-electronicos"
                checked={pregunta27.includes('juguetes-electronicos')}
                onChange={handlePregunta27Change}
              />
              <Form.Check
                inline
                label="Lámparas"
                name="pregunta27"
                type="checkbox"
                value="lamparas"
                checked={pregunta27.includes('lamparas')}
                onChange={handlePregunta27Change}
              />
              <Form.Check
                inline
                label="Bombillas"
                name="pregunta27"
                type="checkbox"
                value="bombillas"
                checked={pregunta27.includes('bombillas')}
                onChange={handlePregunta27Change}
              />
              <Form.Check
                inline
                label="Luminarias"
                name="pregunta27"
                type="checkbox"
                value="luminarias"
                checked={pregunta27.includes('luminarias')}
                onChange={handlePregunta27Change}
              />
            </div>

            {/* PREGUNTA 28 */}
            <Form.Label>
              ¿El establecimiento solicita la recolección de residuos de
              aparatos electricos y electrónicos - RAEE a través de un gestor?
              Si cuenta con certificados anexar en un solo archivo (formato PDF)
              los certificados correspondientes al periodo de reporte
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={respuestaRaee1 === 'si' && pregunta28 === 'si'}
                  onChange={(event) => {
                    handleRespuestaRaee1Change(event);
                    handlePregunta28Change(event);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-1`}
                  value="no"
                  checked={respuestaRaee1 === 'no' && pregunta28 === 'no'}
                  onChange={(event) => {
                    handleRespuestaRaee1Change(event);
                    handlePregunta28Change(event);
                  }}
                />
              </div>
            ))}
            {mostrarPreguntaRaee1 && (
              <label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control
                    type="file"
                    accept=".pdf"
                    onChange={handlePregunta28pdfChange}
                  />
                </Form.Group>

                {/* PREGUNTA 29 */}
                <Form.Group controlId="pregunta29">
                  <Form.Label>
                    Especificar cuál es el gestor de los Residuos de Aparatos
                    Electricos y Electrónicos - RAEE. Recuerde que la
                    recolección solo se debe realizar por un gestor autorizado
                    por la autoridad ambiental competente para gestionar RAEE,
                    en este caso CVC.
                  </Form.Label>
                  <Form.Select
                    value={pregunta29}
                    onChange={handlePregunta29Change}
                  >
                    <option>Seleccione una opción</option>
                    <option value="C.I METALES Y METALES DE OCCIDENTE S.A.">
                      C.I METALES Y METALES DE OCCIDENTE S.A.
                    </option>
                    <option value="C.I PRIME METALS S.A.S">
                      C.I PRIME METALS S.A.S
                    </option>
                    <option value="CENTRO DE DISEÑO TECNOLÓGICO INDUSTRIAL REGIONAL VALLE">
                      CENTRO DE DISEÑO TECNOLÓGICO INDUSTRIAL REGIONAL VALLE
                    </option>
                    <option value="CI INNOAMBIENTAL S.A.S">
                      CI INNOAMBIENTAL S.A.S
                    </option>
                    <option value="DH ECOAMBIENTAL S.A. E.S.P">
                      DH ECOAMBIENTAL S.A. E.S.P
                    </option>
                    <option value="ECO ACCIÓN S.A.S.">ECO ACCIÓN S.A.S.</option>
                    <option value="FUNDIMENTAL DE COLOMBIA S.A.S">
                      FUNDIMENTAL DE COLOMBIA S.A.S
                    </option>
                    <option value="GAIA VITARE S.A.S">GAIA VITARE S.A.S</option>
                    <option value="HOMETAL RECYCLING S.A.S">
                      HOMETAL RECYCLING S.A.S
                    </option>
                    <option value="INNOVACIÓN AMBIENTAL - INNOVA S.A. E.S.P.">
                      INNOVACIÓN AMBIENTAL - INNOVA S.A. E.S.P.
                    </option>
                    <option value="LITO S.A.S.">LITO S.A.S.</option>
                    <option value="N.A.C. EQUIPOS Y OPERACIONES INDUSTRIALES S.A.S.">
                      N.A.C. EQUIPOS Y OPERACIONES INDUSTRIALES S.A.S.
                    </option>
                    <option value="PROCESOS AMBIENTALES DE COLOMBIA S.A.S. - PROAMBIENCO S.A.S.">
                      PROCESOS AMBIENTALES DE COLOMBIA S.A.S. - PROAMBIENCO
                      S.A.S.
                    </option>
                    <option value="RAOC S.A.S">RAOC S.A.S</option>
                    <option value="RECUPERADORA Y FUNDICIONES M&S S.A.S">
                      RECUPERADORA Y FUNDICIONES M&S S.A.S
                    </option>
                    <option value="REGEN.CO S.A.S">REGEN.CO S.A.S</option>
                    <option value="SOCIEDAD CLARIOS ANDINA S.A.S">
                      SOCIEDAD CLARIOS ANDINA S.A.S
                    </option>
                    <option value="SOCIEDAD COLECTA S.A.S">
                      SOCIEDAD COLECTA S.A.S
                    </option>
                    <option value="SOCIEDAD COMERCIALIZADORA PLASTIMETALES SAS">
                      SOCIEDAD COMERCIALIZADORA PLASTIMETALES SAS
                    </option>
                    <option value="TECNOLOGIAS ECOLOGICAS SAS - ECOTEC">
                      TECNOLOGIAS ECOLOGICAS SAS - ECOTEC
                    </option>
                    <option value="VEOLIA SERVICIOS INDUSTRIALES COLOMBIA S.A.S. E.S.P">
                      VEOLIA SERVICIOS INDUSTRIALES COLOMBIA S.A.S. E.S.P
                    </option>
                  </Form.Select>
                </Form.Group>
                <br></br>
              </label>
            )}
          </label>
        )}

        {/* PREGUNTA 30 */}
        <Form.Label>
          ¿El establecimento genera Residuos de Construcción y Demolición - RCD?
          Mal llamados escombros. Nota: Si el area de construcción donde se
          generan los RCD es igual o mayor a 2000 m2, la gestión de estos
          residuos les aplica otro tipo de lineamientos normativos.
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaRcd === 'si' && pregunta30 === 'si'}
              onChange={(event) => {
                handleRespuestaRcdChange(event);
                handlePregunta30Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaRcd === 'no' && pregunta30 === 'no'}
              onChange={(event) => {
                handleRespuestaRcdChange(event);
                handlePregunta30Change(event);
              }}
            />
          </div>
        ))}

        {mostrarPreguntaRcd && (
          <label>
            {/* PREGUNTA 31 */}
            <Form.Label>
              ¿El establecimiento solicita la recolección de Residuos de
              Construcción y Demolición - RCD a través de un gestor? Si cuenta
              con certificados anexar en un solo archivo (formato PDF) los
              certificados correspondientes al periodo de reporte
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={respuestaRcd1 === 'si' && pregunta31 === 'si'}
                  onChange={(event) => {
                    handleRespuestaRcd1Change(event);
                    handlePregunta31Change(event);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-1`}
                  value="no"
                  checked={respuestaRcd1 === 'no' && pregunta31 === 'no'}
                  onChange={(event) => {
                    handleRespuestaRcd1Change(event);
                    handlePregunta31Change(event);
                  }}
                />
              </div>
            ))}

            {mostrarPreguntaRcd1 && (
              <label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control
                    type="file"
                    accept=".pdf"
                    onChange={handlePregunta31pdfChange}
                  />
                </Form.Group>
                {/* PREGUNTA 32 */}
                <Form.Group controlId="pregunta32">
                  <Form.Label>
                    Especificar cuál es el gestor de los Residuos de
                    Construcción y Demolición - RCD. Recuerde que la recolección
                    solo se debe realizar por un gestor autorizado por la
                    autoridad ambiental competente, para el Distrito de Santiago
                    de Cali: DAGMA.
                  </Form.Label>
                  <Form.Select
                    value={pregunta32}
                    onChange={handlePregunta32Change}
                  >
                    <option>Seleccione una opción</option>
                    <option value="CHANEROS/BENEFICIARIOS DEL PROYECTO DE SUSTITUCIÓN ANIMAL">
                      CHANEROS/BENEFICIARIOS DEL PROYECTO DE SUSTITUCIÓN ANIMAL
                    </option>
                    <option value="GREMIO DE VOLQUETEROS">
                      GREMIO DE VOLQUETEROS
                    </option>
                    <option value="OPERADORES DEL SERVICIO PÚBLICO DE ASEO/LINEA 110">
                      OPERADORES DEL SERVICIO PÚBLICO DE ASEO/LINEA 110
                    </option>
                  </Form.Select>
                </Form.Group>
                <br></br>
              </label>
            )}
          </label>
        )}

        {/* PREGUNTA 33 */}
        <Form.Label>¿El establecimento genera Residuos Peligrosos?.</Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaPeligrosos === 'si' && pregunta33 === 'si'}
              onChange={(event) => {
                handleRespuestaPeligrososChange(event);
                handlePregunta33Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaPeligrosos === 'no' && pregunta33 === 'no'}
              onChange={(event) => {
                handleRespuestaPeligrososChange(event);
                handlePregunta33Change(event);
              }}
            />
          </div>
        ))}

        {mostrarPreguntaPeligrosos && (
          <label>
            {/* PREGUNTA 34 */}
            <Form.Label>
              ¿Cuáles son los Residuos Peligrosos que genera? Seleccione una o
              varias opciones
            </Form.Label>
            <div className="mb-3">
              <Form.Check
                inline
                label="Jeringas"
                name="pregunta34"
                type="checkbox"
                value="jeringas"
                checked={pregunta34.includes('jeringas')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Cortopunzantes"
                name="pregunta34"
                type="checkbox"
                value="cortopunzantes"
                checked={pregunta34.includes('cortopunzantes')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Medicinas y fármacos"
                name="pregunta34"
                type="checkbox"
                value="medicinas"
                checked={pregunta34.includes('medicinas')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Baterias"
                name="pregunta34"
                type="checkbox"
                value="baterias"
                checked={pregunta34.includes('baterias')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Aerosoles"
                name="pregunta34"
                type="checkbox"
                value="aerosoles"
                checked={pregunta34.includes('aerosoles')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Empaques de mantenimiento"
                name="pregunta34"
                type="checkbox"
                value="empaques"
                checked={pregunta34.includes('empaques')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Pintura"
                name="pregunta34"
                type="checkbox"
                value="pintura"
                checked={pregunta34.includes('pintura')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Solventes"
                name="pregunta34"
                type="checkbox"
                value="solventes"
                checked={pregunta34.includes('solventes')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Residuos productos de belleza y aseo"
                name="pregunta34"
                type="checkbox"
                value="productos-belleza"
                checked={pregunta34.includes('productos-belleza')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Plaguicidas"
                name="pregunta34"
                type="checkbox"
                value="plaguicidas"
                checked={pregunta34.includes('plaguicidas')}
                onChange={handlePregunta34Change}
              />
              <Form.Check
                inline
                label="Fungicidas"
                name="pregunta34"
                type="checkbox"
                value="fungicidas"
                checked={pregunta34.includes('fungicidas')}
                onChange={handlePregunta34Change}
              />
            </div>
            {/* PREGUNTA 35 */}
            <Form.Label>
              ¿El establecimiento solicita la recolección residuos peligrosos a
              través de un gestor? Si cuenta con certificados anexar en un solo
              archivo (formato PDF) los certificados correspondientes al periodo
              de reporte
            </Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Si"
                  type={type}
                  id={`inline-${type}-1`}
                  value="si"
                  checked={respuestaPeligrosos1 === 'si' && pregunta35 === 'si'}
                  onChange={(event) => {
                    handleRespuestaPeligrosos1Change(event);
                    handlePregunta35Change(event);
                  }}
                />
                <Form.Check
                  inline
                  label="No"
                  type={type}
                  id={`inline-${type}-1`}
                  value="no"
                  checked={respuestaPeligrosos1 === 'no' && pregunta35 === 'no'}
                  onChange={(event) => {
                    handleRespuestaPeligrosos1Change(event);
                    handlePregunta35Change(event);
                  }}
                />
              </div>
            ))}

            {mostrarPreguntaPeligrosos1 && (
              <label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control
                    type="file"
                    accept=".pdf"
                    onChange={handlePregunta35pdfChange}
                  />
                </Form.Group>
                {/* PREGUNTA 36 */}
                <Form.Group controlId="pregunta36">
                  <Form.Label>
                    Especificar cuál es el gestor de residuos peligrosos.
                    Recuerde que la recolección solo se debe realizar por un
                    gestor autorizado por la autoridad ambiental competente,
                    para el Distrito de Santiago de Cali: DAGMA.
                  </Form.Label>
                  <Form.Select
                    value={pregunta36}
                    onChange={handlePregunta36Change}
                  >
                    <option>Seleccione una opción</option>
                    <option value="AMBIENT">AMBIENT</option>
                    <option value="INGERECUPERAR">INGERECUPERAR</option>
                    <option value="PROMO AMBIENTAL CALI S.A ESP">
                      PROMO AMBIENTAL CALI S.A ESP
                    </option>
                    <option value="UNIVERSAL DE AIRES">
                      UNIVERSAL DE AIRES
                    </option>
                    <option value="ASEO DEL SUROCCIDENTE S.A. E.S.P">
                      ASEO DEL SUROCCIDENTE S.A. E.S.P
                    </option>
                    <option value="ASEO INTEGRAL DE RESIDUOS S.AS. ASIRP S.A.S">
                      ASEO INTEGRAL DE RESIDUOS S.AS. ASIRP S.A.S
                    </option>
                    <option value="ATECO SAS">ATECO SAS</option>
                    <option value="BRONALCO LTDA">BRONALCO LTDA</option>
                    <option value="CAT COMBUSTIBLES LTDA">
                      CAT COMBUSTIBLES LTDA
                    </option>
                    <option value="COMBUSTIBLES JUANCHITO S.A.S (ALCALÁ)">
                      COMBUSTIBLES JUANCHITO S.A.S (ALCALÁ)
                    </option>
                    <option value="COMBUSTIBLES JUANCHITO S.A.S (CANDELARIA)">
                      COMBUSTIBLES JUANCHITO S.A.S (CANDELARIA)
                    </option>
                    <option value="COMBUSTIBLES W.D.F LTDA">
                      COMBUSTIBLES W.D.F LTDA
                    </option>
                    <option value="GERMAN VALENCIA (ESTABLECIMIENTOS DE COMERCIO MADERAS PLÁSTICAS ECOLÓGICAS)">
                      GERMAN VALENCIA (ESTABLECIMIENTOS DE COMERCIO MADERAS
                      PLÁSTICAS ECOLÓGICAS)
                    </option>
                    <option value="INDUSTRIAL AMBIENTAL S.A.S">
                      INDUSTRIAL AMBIENTAL S.A.S
                    </option>
                    <option value="MANUCHAR COLOMBIA CÍA S.A.S">
                      MANUCHAR COLOMBIA CÍA S.A.S
                    </option>
                    <option value="PRODUCTORA NACIONAL DE METALES S.A.S">
                      PRODUCTORA NACIONAL DE METALES S.A.S
                    </option>
                    <option value="R.H S.A E.S.P.">R.H S.A E.S.P.</option>
                    <option value="RECATAM S.A.S">RECATAM S.A.S</option>
                    <option value="SOCIEDAD ENVASES Y SERVICIOS INDUSTRIALES S.A.S ENVASAS S.A.S">
                      SOCIEDAD ENVASES Y SERVICIOS INDUSTRIALES S.A.S ENVASAS
                      S.A.S
                    </option>
                    <option value="SOCIEDAD OCCIDENTAL ENERGY DE COMERCIALIZACIÓN INTERNACIONAL">
                      SOCIEDAD OCCIDENTAL ENERGY DE COMERCIALIZACIÓN
                      INTERNACIONAL
                    </option>
                    <option value="SOCIEDAD VEOLIA ASEO BUGA S.A. E.S.P">
                      SOCIEDAD VEOLIA ASEO BUGA S.A. E.S.P
                    </option>
                    <option value="SOLUCIONES AMBIENTALES IPSA S.A.S">
                      SOLUCIONES AMBIENTALES IPSA S.A.S
                    </option>
                    <option value="T.D.M. TRANSPORTES S.A.S">
                      T.D.M. TRANSPORTES S.A.S
                    </option>
                    <option value="WILLIAM MEJÍA VÉLEZ (ESTABLECIMIENTO DE COMERCIO LUBRICANTES PREMIER)">
                      WILLIAM MEJÍA VÉLEZ (ESTABLECIMIENTO DE COMERCIO
                      LUBRICANTES PREMIER)
                    </option>
                    <option value="C.I METALES Y METALES DE OCCIDENTE S.A.">
                      C.I METALES Y METALES DE OCCIDENTE S.A.
                    </option>
                    <option value="C.I PRIME METALS S.A.S">
                      C.I PRIME METALS S.A.S
                    </option>
                    <option value="CENTRO DE DISEÑO TECNOLÓGICO INDUSTRIAL REGIONAL VALLE">
                      CENTRO DE DISEÑO TECNOLÓGICO INDUSTRIAL REGIONAL VALLE
                    </option>
                    <option value="4.CI INNOAMBIENTAL S.A.S">
                      4.CI INNOAMBIENTAL S.A.S
                    </option>
                    <option value="DH ECOAMBIENTAL S.A. E.S.P">
                      DH ECOAMBIENTAL S.A. E.S.P
                    </option>
                    <option value="ECO ACCIÓN S.A.S.">ECO ACCIÓN S.A.S.</option>
                    <option value="FUNDIMENTAL DE COLOMBIA S.A.S">
                      FUNDIMENTAL DE COLOMBIA S.A.S
                    </option>
                    <option value="GAIA VITARE S.A.S">GAIA VITARE S.A.S</option>
                    <option value="HOMETAL RECYCLING S.A.S">
                      HOMETAL RECYCLING S.A.S
                    </option>
                    <option value="INNOVACIÓN AMBIENTAL - INNOVA S.A. E.S.P.">
                      INNOVACIÓN AMBIENTAL - INNOVA S.A. E.S.P.
                    </option>
                    <option value="LITO S.A.S.">LITO S.A.S.</option>
                    <option value="N.A.C. EQUIPOS Y OPERACIONES INDUSTRIALES S.A.S.">
                      N.A.C. EQUIPOS Y OPERACIONES INDUSTRIALES S.A.S.
                    </option>
                    <option value="PROCESOS AMBIENTALES DE COLOMBIA S.A.S. - PROAMBIENCO S.A.S.">
                      PROCESOS AMBIENTALES DE COLOMBIA S.A.S. - PROAMBIENCO
                      S.A.S.
                    </option>
                    <option value="RAOC SAS">RAOC SAS</option>
                    <option value="RECUPERADORA Y FUNDICIONES M&S S.A.S">
                      RECUPERADORA Y FUNDICIONES M&S S.A.S
                    </option>
                    <option value="REGEN.CO S.A.S">REGEN.CO S.A.S</option>
                    <option value="SOCIEDAD CLARIOS ANDINA S.A.S">
                      SOCIEDAD CLARIOS ANDINA S.A.S
                    </option>
                    <option value="SOCIEDAD COLECTA S.A.S">
                      SOCIEDAD COLECTA S.A.S
                    </option>
                    <option value="SOCIEDAD COMERCIALIZADORA PLASTIMETALES SAS">
                      SOCIEDAD COMERCIALIZADORA PLASTIMETALES SAS
                    </option>
                    <option value="TECNOLOGIAS ECOLOGICAS SAS - ECOTEC">
                      TECNOLOGIAS ECOLOGICAS SAS - ECOTEC
                    </option>
                    <option value="VEOLIA SERVICIOS INDUSTRIALES COLOMBIA S.A.S. E.S.P">
                      VEOLIA SERVICIOS INDUSTRIALES COLOMBIA S.A.S. E.S.P
                    </option>
                  </Form.Select>
                </Form.Group>
                <br></br>
              </label>
            )}
          </label>
        )}
        {/* PREGUNTA 37 */}
        <Form.Label>
          ¿El establecimento genera residuos voluminosos? Como colchones,
          muebles, estanterias
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaVoluminosos === 'si' && pregunta37 === 'si'}
              onChange={(event) => {
                handleRespuestaVoluminososChange(event);
                handlePregunta37Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaVoluminosos === 'no' && pregunta37 === 'no'}
              onChange={(event) => {
                handleRespuestaVoluminososChange(event);
                handlePregunta37Change(event);
              }}
            />
          </div>
        ))}
        {mostrarPreguntaVoluminosos && (
          <label>
            {/* PREGUNTA 38 */}

            <Form.Group controlId="pregunta38">
              <Form.Label>
                ¿Cuáles son los Residuos Voluminosos que genera? Seleccione una
                o varias opciones
              </Form.Label>
              <div className="mb-3">
                <Form.Check
                  inline
                  id="muebles"
                  label="Muebles"
                  type="checkbox"
                  value="muebles"
                  checked={pregunta38.includes('muebles')}
                  onChange={handlePregunta38Change}
                />
                <Form.Check
                  inline
                  id="estanterias"
                  label="Estanterias"
                  type="checkbox"
                  value="estanterias"
                  checked={pregunta38.includes('estanterias')}
                  onChange={handlePregunta38Change}
                />
                <Form.Check
                  inline
                  label="Colchones"
                  type="checkbox"
                  id="colchones"
                  value="colchones"
                  checked={pregunta38.includes('colchones')}
                  onChange={handlePregunta38Change}
                />
                <Form.Check
                  inline
                  label="Poltronas"
                  type="checkbox"
                  id="poltronas"
                  value="poltronas"
                  checked={pregunta38.includes('poltronas')}
                  onChange={handlePregunta38Change}
                />
                <Form.Check
                  inline
                  label="Armarios"
                  type="checkbox"
                  id="armarios"
                  value="armarios"
                  checked={pregunta38.includes('armarios')}
                  onChange={handlePregunta38Change}
                />
                <Form.Check
                  inline
                  label="Alacenas"
                  type="checkbox"
                  id="alacenas"
                  value="alacenas"
                  checked={pregunta38.includes('alacenas')}
                  onChange={handlePregunta38Change}
                />
              </div>
            </Form.Group>
          </label>
        )}

        {/* PREGUNTA 39 */}
        <Form.Label>
          ¿Conoce las lineas de atención para la recolección de Residuos
          Voluminosos?
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={pregunta39 === 'si'}
              onChange={handlePregunta39Change}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={pregunta39 === 'no'}
              onChange={handlePregunta39Change}
            />
          </div>
        ))}

        {/* PREGUNTA 40 */}

        <Form.Label>
          ¿El establecimiento cuenta con un programa de comunicación donde
          realiza actividades de Información Educación y Comunicación - IEC con
          relación a la implementación del SGIRS? Anexar registro de soportes y
          actividades de IEC
        </Form.Label>

        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaComunicacion === 'si' && pregunta40 === 'si'}
              onChange={(event) => {
                handleRespuestaComunicacionChange(event);
                handlePregunta40Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaComunicacion === 'no' && pregunta40 === 'no'}
              onChange={(event) => {
                handleRespuestaComunicacionChange(event);
                handlePregunta40Change(event);
              }}
            />
          </div>
        ))}
        {mostrarPreguntaComunicacion && (
          <label>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handlePregunta40pdfChange}
              />
            </Form.Group>
          </label>
        )}

        {/* PREGUNTA 41 */}
        <Form.Label>
          ¿El establecimiento realiza acciones de mejora continua al SGIRS?
          ¿Cuales acciones de mejora ha implementado teniendo en cuenta el
          cuadro de “acciones de mejora” establecido en el manual.
        </Form.Label>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Si"
              type={type}
              id={`inline-${type}-1`}
              value="si"
              checked={respuestaMejora === 'si' && pregunta41 === 'si'}
              onChange={(event) => {
                handleRespuestaMejoraChange(event);
                handlePregunta41Change(event);
              }}
            />
            <Form.Check
              inline
              label="No"
              type={type}
              id={`inline-${type}-1`}
              value="no"
              checked={respuestaMejora === 'no' && pregunta41 === 'no'}
              onChange={(event) => {
                handleRespuestaMejoraChange(event);
                handlePregunta41Change(event);
              }}
            />
          </div>
        ))}
        {mostrarPreguntaMejora && (
          <label>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept=".pdf"
                onChange={handlePregunta41pdfChange}
              />
            </Form.Group>
          </label>
        )}

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
              Cuestionario completado, por favor proceder a diligenciar el
              módulo de indicadores
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div className="boton">
              <Button
                variant="success"
                type="submit"
                onClick={(event) => submitHandler(event)}
              >
                Continuar
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
        <MyVerticallyCenteredModal
          show={modalShow}
          parrafo="¡Bienvenido/a a la plataforma dispuesta por la Alcaldía de Santiago de Cali para el reporte de indicadores e implementación del Decreto 0595 de 2022 relacionado a la adopción del Sistema de Gestión Integral de Residuos Sólidos – SGIRS. 
          Estamos encantados/as de tenerte aquí. Queremos promover prácticas responsables y sostenibles en el manejo de residuos en el Distrito de Santiago de Cali, y tu participación es fundamental para lograrlo, por lo que te invitamos a diligenciar honestamente el cumplimiento de este decreto, asegurando que tengas a mano el documento del SGIRS con cada uno de sus componentes, así como los certificados emitidos por los gestores.
          Recuerda que una vez iniciado el diligenciamiento debes finalizar el reporte. No se podrá realizar doble reporte. Tu compromiso y transparencia son clave para avanzar hacia un entorno más saludable y respetuoso con el medio ambiente. Juntos/as, podemos marcar la diferencia en la gestión de residuos sólidos. ¡Gracias por ser parte de este importante cambio!"
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
