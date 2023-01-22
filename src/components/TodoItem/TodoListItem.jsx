import React from "react";
import { ACTIONS } from "../TodoList/TodoList";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faLock,
  faLockOpen,
  faTrash,
} from "@fortawesome/fontawesome-free-solid";

function TodoListItem({ todo, dispatch, editTodoHandler }) {
  return (
    <Container>
      {todo.complete ? (
        <CompleteDiv>{todo.name}</CompleteDiv>
      ) : (
        <UncompletedDiv>{todo.name}</UncompletedDiv>
      )}
      <div>
        <CompletButton
          onClick={() => {
            dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } });
          }}
        >
          {!todo.complete ? (
            <FontAwesomeIcon icon={faLock} />
          ) : (
            <FontAwesomeIcon icon={faLockOpen} />
          )}
        </CompletButton>
        <EditButton
          onClick={() => {
            editTodoHandler(todo.name, todo.id);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </EditButton>
        <DeleteButton
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </DeleteButton>
      </div>
    </Container>
  );
}

export default TodoListItem;

const CompleteDiv = styled.div`
  font-size: 30px;
  color: #0fd408;
  text-decoration: line-through;
`;
const UncompletedDiv = styled.div`
  font-size: 30px;
  color: #f8f2f2;
`;
const Container = styled.div`
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 30px;
  border-radius: 50px;
  box-shadow: 5px 5px 5px 5px black;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #00ff26;
  border-radius: 20px;
  box-shadow: 5px 5px 5px black;
  margin-right: 20px;
`;

const DeleteButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #df0e20;
  border-radius: 20px;
  box-shadow: 5px 5px 5px black;
`;
const CompletButton = styled.button`
  padding: 10px 20px;
  width: 60px;
  color: white;
  background-color: #df0e20;
  border-radius: 20px;
  box-shadow: 5px 5px 5px black;
  margin-right: 20px;
`;
