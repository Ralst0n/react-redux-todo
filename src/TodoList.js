import React from 'react'

function TodoList(props) {
    const todos = props.items.map( (item,i) =>
    <li className="items" key={i}>
      <input onChange={props.marked} type="checkbox"/>
      {item}
    </li>
  );
  return (
    <ul>{todos}</ul>
  )
}

export default TodoList;
