
import React from 'react'

function List(props) {
  return (
    <ul>
      {
        props.items.map((item) => (

          <li onClick={() => props.toggleItem && props.toggleItem(item)} style={{ textDecoration: item.complete ? 'line-through' : 'none' }} key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => props.remove(item)} >remove</button>
          </li>
        ))
      }
    </ul>
  )
}

export default List