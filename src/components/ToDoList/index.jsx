import React from "react";
import PropTypes from "prop-types";

ToDoList.propTypes = {

  todos: PropTypes.array,
  onTodoList: PropTypes.func,
};


ToDoList.defaultProps = {

  todos: [],
  onTodoList: null,
};

function ToDoList(props) {

  const { todos, onTodoList } = props;

  function handleClick(todo) {
    
    if (onTodoList) {
      onTodoList(todo);
    }
  }


  return (

    <ul className="todo-list">

      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
