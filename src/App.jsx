import AddTodo from "./components/AddTodo.jsx";
import CompletedTodos from "./components/CompletedTodos.jsx";
import TodosProvider from "./components/store/todo-context.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  return (
    <TodosProvider>
      <div className="h-screen flex flex-col items-center justify-center my-6">
        <h1 className="text-2xl font-bold mb-4">LETS DO IT!</h1>
        <AddTodo />
        <Todos />
        <CompletedTodos />
      </div>
    </TodosProvider>
  );
}

export default App;
