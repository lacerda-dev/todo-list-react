import "./App.css";
import { ToastContainer } from "react-toastify";

import { Todo } from "./components/Todo/Todo";

function App() {
  return (
    <div className="app">
      <ToastContainer position="top-right" autoClose={3000} />
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
