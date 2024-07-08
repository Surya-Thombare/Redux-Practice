import * as React from "react"
import { handleAddGoal, handleDeleteGoal } from "../actions/goals"
import { connect } from 'react-redux'
import List from "./list"


class Goals extends React.Component {

  addGoal = (e) => {
    e.preventDefault()

    const name = this.input.value
    this.props.dispatch(handleAddGoal(name, () => this.input.value = ''))
  }

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }

  render() {
    return (
      <div>
        <h1>Goal List</h1>
        <input
          type='text'
          placeholder='Goal'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addGoal}>Add Goal</button>
        <List
          items={this.props.goals}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)