import React, { Component } from 'react';
import Form from '../Form';
import List from '../List';


export default class Main extends Component {
    //declarei uma variavel
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1
    };

    handleChange = (evento) => {
        this.setState({
            novaTarefa: evento.target.value,
        })
    }

    handleEdit = (evento, index) => {
        //valor do input quando ele mudar 
        const { tarefas } = this.state;
        this.setState({
            index,
            novaTarefa: tarefas[index],
        });

    }
    handleSubmit = (evento) => {
        evento.preventDefault();

        // console.log("valor do input");
        // Nova tarefa digitada
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        // tarefas pelo Componente de estado
        // limpando a nova tarefa
        novaTarefa = novaTarefa.trim();
        //se nao encontrar a tarefa
        if (tarefas.indexOf(novaTarefa) !== -1) return;

        const novasTarefas = [...tarefas];
        //copiando o existente para o novo atualizando
        // spreading de tarefas em novastarefas
        //push infinito que sempre fica acumulando
        // Um novo array
        if (index === -1) {
            // se o index for menos um eu estarei adicionando
            const novasTarefasFinal = [...novasTarefas, novaTarefa];
            this.setState({
                tarefas: novasTarefasFinal,
                novaTarefa: ''
            })
        }
        else {
            //so de clicar no editar ja mudou o valor para o valor do index do edit
            // o handle edit ja virou o state do index para o valor do item
            const novasTarefasEditar = [...novasTarefas];

            novasTarefasEditar[index] = novaTarefa;

            this.setState({
                tarefas: novasTarefasEditar,
                index: -1
            });
        }
        //pegou  a tarefas
        //pegou o valor do input
        //spreading nao atualiza a condicao

        //Toda vez que se der o submit sera atualizado o state copiando e reescrevendo



        //so mostra o valor de insercao depois que for chamado novamente o state 
        //inserir mas nao atualizou entao mostra sempre atrasado (++)

    }

    handleDelete = (evento, index) => {
        // ultimo estado do array de tarefas

        const { tarefas } = this.state;

        // spreading  novastarefas
        const novasTarefas = [...tarefas];


        novasTarefas.splice(index, 1);


        this.setState({
            tarefas: novasTarefas,
        });

    }



    //agora quando o componente for montado ele pega o evento e faz algo 
    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));
        if (!tarefas) return;
        this.setState({
            tarefas
        });
    }

    //toda vez que o estado sera atualizado ele fara algo this.state
    componentDidUpdate(prevProps, prevState) {
        //se o estado anterior for igual o novo nao faz nada
        //valor anterior antes do componente atualizar com o novo 
        //mas quem? somente as tarefas
        const { tarefas } = this.state;
        if (tarefas === prevState.tarefas) return;
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    render() {
        // funcoes nao atualiza o estado => o render mostra o ultimo estado depois de ter 
        // realizado todas as funcoes e remontar o componente
        //usando a variavel declarada e o array declarado.
        //esse e o ultimo estado do componente atualizado
        //toda vez que o component this.state for atualizado ele faz algo no state effect

        // o form  so usa novas tarefas mas o metodos alteram o state 
        //principal da classe

        const { novaTarefa, tarefas } = this.state;
        //O componente e montado quando roda o motor do java script
        return (
            //passei o metodo direto do componente logo ele tem acesso 
            //variavies e metodos unicos da classe principal
            <section>
                <h1>Lista de tarefas: </h1>
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    novaTarefa={novaTarefa}
                />
                {/* Retornando o componente montado para ele ter os metodos e propiedades da 
                    classe
                */}
                <List
                    //agora ele tem acesso ao metodo da classe
                    // E como a funcao esta aqui ela ja altera o valor da questao 
                    // Como por exemplo a questao do novatarefa nao ser mandado 
                    // mas o metodo tem acesso a ela mas como e utilizado no componente
                    //O array por isso eu tive que passar ele la para ser alterado
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    tarefas={tarefas}
                />
            </section>


        )

    }



}