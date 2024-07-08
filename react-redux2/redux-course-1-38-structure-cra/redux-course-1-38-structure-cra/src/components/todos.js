import * as React from "react"
import { connect } from 'react-redux'
import List from './list'
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from "../actions/todos"

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    const name = this.input.value
    this.props.dispatch(handleAddTodo(name, () => this.input.value = ''))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }

  toggleTodo = (todo) => {
    this.props.dispatch(handleToggleTodo(todo.id))
  }

  render() {
    return (
      <div>
        <h1>Todo List With React</h1>
        <input
          type='text'
          placeholder='Add Todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>

        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggleItem={this.toggleTodo}
        />
      </div>
    )
  }
}


export default connect((state) => ({
  todos: state.todos
}))(Todos)