import React from "react";
import PropTypes from "prop-types";

//so estou usando as funcoes como referencia nao em si criando uma nova mas 
// usando as existentes na classe do componente main  principal
export default function List({ tarefas, handleDelete, handleEdit }) {
    // ao certo quando eu faco isso estou retornando um componente JSX
    return (
        <aside>
            <ul className="tarefas" >
                {/* O index esta vindo do map */}
                {tarefas.map((tarefa, index) => (
                    <li key={tarefa} >
                        {/* EXIBINDO A TAREFA */}
                        {tarefa}
                        <div>
                            <span onClick={(evento) => handleDelete(evento, index)}
                                className='delete'
                            >   Apagar
                            </span>

                            <span className='edit'
                                onClick={(evento) => handleEdit(evento, index)}
                            > Editar </span>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

// esse propTypes aqui e a na verdade um metodo especifico
List.propTypes = {
    //o array nao e permitido mas voce pode utilizar 
    tarefas: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
}