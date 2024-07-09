import * as React from "react"
import { useDispatch, useSelector } from 'react-redux'
import List from './list'
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from "../actions/todos"

export default function Todos() {
  const input = React.useRef('')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const addItem = (e) => {
    e.preventDefault()
    const name = input.current.value
    dispatch(handleAddTodo(name, () => input.current.value = ''))
  }

  const removeItem = (todo) => {
    dispatch(handleDeleteTodo(todo))
  }

  const toggleTodo = (todo) => {
    dispatch(handleToggleTodo(todo.id))
  }

  return (
    <div>
      <h1>Todo List With React</h1>
      <input
        type='text'
        placeholder='Add Todo'
        ref={input}
      />
      <button onClick={addItem}>Add Todo</button>

      <List
        items={todos}
        remove={removeItem}
        toggleItem={toggleTodo}
      />
    </div>
  )
}