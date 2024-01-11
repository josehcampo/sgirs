const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input placeholder={props.placeholder} required />
    </div>
  );
};

export default CampoTexto;
