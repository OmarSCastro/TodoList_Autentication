import React,{ useContext } from 'react'
import { NavBar } from './../../components/NavBar/NavBar';
import { TodoList } from '../../helpers/TodoList';
import { ValContext } from './../../context/ValContext';
import { LogoutButton } from "../../components/LogoutButton/LogoutButton";


export const TodoPage = () => {

    const {todos, todosCount, pendingTodosCount, newTodo, deleteTodo, toggleTodo, deleteAllTodos} = useContext(ValContext);

  return (
    <div>
    <div className='flex justify-content-center'>

    <h1 className='text-cyan-50 text-center'>MIS TAREAS</h1>
    <div className='absolute top-0 right-0  text-white font-bold flex align-items-center justify-content-center w-16rem h-4rem border-round'>
    <LogoutButton />
    </div>
    </div>
    <div className="App ">
    <h2>Has completado {pendingTodosCount} de {todosCount} tareas</h2>
    <NavBar newTodo={ newTodo } deleteTodos ={ deleteAllTodos } />
    <div  >
      <TodoList 
        todos = { todos }
        handleDelete = { deleteTodo } 
        handleToggle = { toggleTodo }
        />
    </div>

        </div>
  </div>
  )
}
