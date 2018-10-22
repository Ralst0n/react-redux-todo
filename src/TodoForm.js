import React from 'react'

function TodoForm(props) {
  return(
    <form className="todo-form" onSubmit={props.onSubmit}>
      <input value={props.value} onChange={props.onChange}/>
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoForm;
