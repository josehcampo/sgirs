import './ListaOpciones.css';

const ListaOpciones = () => {
  //Metodo map -> arreglo.map((equipos, index)=>{
  // return <option></option>
  //})

  const equipos = [
    'Entidades publicas',
    'Eventos masivos',
    'Desarrollos multifamiliares',
    'Instituciones educativas',
    'Comercial y servicios',
    'Organico',
  ];

  return (
    <div className="lista-opciones">
      <label>Sector</label>
      <select>
        {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
