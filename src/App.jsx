import { useState } from 'react';
import './App.css'
import { Header } from './components/Header/Header'
import { TodoInput } from './components/TodoInput/TodoInput';
import { Todos } from './components/Todos/Todos';
import data from './data.json';

function App() {
  const [todos, setTodos] = useState(data);
  
  /*
    TODO:
    [✅] 1. Use the todos state to render the todos
    [ ] 2. Pass the setTodos function to the relevant 
        components, so that they can update the todos state
  */

    return (
    <>
      <Header/>      
      <TodoInput />      
      <Todos todos={todos}/>
    </>

  )
}

export default App
