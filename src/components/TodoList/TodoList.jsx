import React, { useReducer } from "react";
import { useState } from "react";
import TodoListItem from "../TodoItem/TodoListItem";
import styled from "styled-components";
export const ACTIONS = {
  ADD_TODO: "add_todo",
  COMPLETE_TODO: "complete_todo",
  DELETE_TODO: "delete_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.COMPLETE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}
function newTodo(name) {
  return {
    id: Math.random() + new Date().getMilliseconds().toString(),
    name: name,
    complete: false,
  };
}
function TodoList() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random() + new Date().getMilliseconds().toString(),
      name: "Buy apple",
      complete: false,
    },
    {
      id: Math.random() + new Date().getMilliseconds().toString(),
      name: "Buy banana",
      complete: false,
    },
    {
      id: Math.random() + new Date().getMilliseconds().toString(),
      name: "Buy milk",
      complete: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const enebled = title.length > 0;

  function addTodoHandler(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: title } });
    todos.filter((item) => item.id === todos.id);
    setTitle("");
  }

  const editTodoHandler = (name, id) => {
    setTitle(name);
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
  };
  return (
    <>
      <FormDiv>
        <Title>My todo app</Title>
        <Div>
          <form>
            <Input
              value={title}
              placeholder="Write your task..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          <AddButton onClick={addTodoHandler} disabled={!enebled}>
            ADD TASK
          </AddButton>
        </Div>
      </FormDiv>

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoListItem
              todo={todo}
              dispatch={dispatch}
              editTodoHandler={editTodoHandler}
            />
          </div>
        );
      })}
    </>
  );
}

export default TodoList;

const FormDiv = styled.div`
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 50px;
  background-image: linear-gradient(
    to bottom,
    #fe0616,
    #ff004c,
    #f00081,
    #bc00bb,
    #2b0eee
  );
`;
const Title = styled.div`
  color: #230d6e;
  font-size: 40px;
  font-weight: 30px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  &:focus {
    background-color: #08f7f7;
  }
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: blue;
  box-shadow: 5px 5px 5px black;
  color: azure;
  font-weight: 30px;
  border-radius: 20px;
  border: none;
  margin-left: 20px;
  &:disabled {
    background-color: red;
  }
`;
