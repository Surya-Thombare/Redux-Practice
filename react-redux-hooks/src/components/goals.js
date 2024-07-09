import * as React from "react"
import { handleAddGoal, handleDeleteGoal } from "../actions/goals"
import { useSelector, useDispatch } from 'react-redux'
import List from "./list"


export default function Goals() {
  const dispatch = useDispatch()
  const goals = useSelector((state) => state.goals)
  const input = React.useRef('')


  const addGoal = (e) => {
    e.preventDefault()
    const name = input.current.value
    dispatch(handleAddGoal(name, () => input.current.valuee = ''))
  }

  const removeItem = (goal) => {
    dispatch(handleDeleteGoal(goal))
  }

  return (
    <div>
      <h1>Goal List</h1>
      <input
        type='text'
        placeholder='Goal'
        ref={input}
      />
      <button onClick={addGoal}>Add Goal</button>
      <List
        items={goals}
        remove={removeItem}
      />
    </div>
  )
}