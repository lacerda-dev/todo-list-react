/*
Itens para To-do List

BÁSICO
[X] - Container principal
[X] - Título
[X] - Sub-titulo
[X] - Container para lista
[X] - Container para área de input
[X] - Input
[X] - Botão de criar tarefa
[X] - Container para área de tarefas
[X] - Tarefas
[X] - Botão de concluir
[X] - Estilos

INTERMEDIARIO
[X] - Persistencia
[X] - Adicionar tarefa precionando enter
[X] - Input de buscar tarefa (no topo do container da lista)
[X] - Botão de editar tarefa (dentro de cada tarefa)
[X] - Estilos

AVANÇADO
[X] - Tarefas concluidas
[X] - Editar botão de concluir tarefa para levar a tarefa concluida para nova lista
[X] - Criar botão de restaurar
[meio] - Botão de deletar tarefa
[X] - Estilos

*/

import "./App.css";
import { ToastContainer } from "react-toastify";

import { Todo } from "./components/Todo/Todo";

function App() {
  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      <section className="wrapper">
        <div className="container-title">
          <h1 className="title">To-do List</h1>
          <h2 className="sub-title">By Matheus Lacerda</h2>
        </div>
        <Todo />
      </section>
    </div>
  );
}

export default App;
