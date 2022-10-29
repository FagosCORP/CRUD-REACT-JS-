import React from "react";
//importar paschoal case
import PropTypes from "prop-types";


//estou passando as funcoes principais da classe e os metodos que aqui 
// so sao uma referencia e se alteram por completo 
// agora fiz a desestruturacao para utilizar como parametros.
export default function Form({ handleSubmit, handleChange, novaTarefa }) {
    return (
        <form onSubmit={handleSubmit} action="#" >
            {/* toda vez que mudar eu vou pegar o valor e adcionar ao array */}
            {/* funcao ativa primeiro que o valor */}
            <input onChange={handleChange} type="text" value={novaTarefa} />
            <button type="submit">Enviar</button>
        </form>
    );
}
//valor default para o parametro que chegar 
// Form.defaultProps = {
//     novaTarefa: "valor default para o parametro"

// }
//validar agora sera em camel-case o propTypes
Form.propTypes = {
    //agora o objeto e do import PropTypes
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}