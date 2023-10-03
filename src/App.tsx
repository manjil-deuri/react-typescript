import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <AddTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
