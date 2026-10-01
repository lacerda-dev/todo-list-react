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
[] - Estilos

INTERMEDIARIO
[] - Persistencia
[] - Adicionar tarefa precionando enter
[] - Input de buscar tarefa (no topo do container da lista)
[] - Botão de editar tarefa (dentro de cada tarefa)
[] - Estilos

AVANÇADO
[] - Container de tarefas concluidas
[] - Tarefas concluidas
[] - Editar botão de concluir tarefa para levar a tarefa concluida para nova lista
[] - Botão de deletar tarefa
[] - Estilos

*/

import { Todo } from "./components/Todo/Todo";

function App() {
  return (
    <div className="app">
      <h1>To-do List</h1>
      <h2>By Matheus Lacerda</h2>
      <Todo />
    </div>
  );
}

export default App;
