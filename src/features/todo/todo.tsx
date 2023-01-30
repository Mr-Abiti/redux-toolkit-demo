import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import { Button, Grid, Paper, TextField } from "@mui/material";
import TodoCard, { TodoTypes } from "./todoCard";
import {
  useGetTodosQuery,
  useAddTodoMutation,
} from "../api/apiSlice";

export function Todo() {
  const todoList = useSelector((state: RootState) => state.todo);
  let dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();


  function saveTodo() {
    addTodo({
      id: todoList.toDos.length,
      title: newTodo,
      completed: false,
      createdOn: new Date().toISOString(),
    });
    setNewTodo("");
  }


  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = todos.map((todo: TodoTypes) => (
      <TodoCard key={todo.id} todo={todo} />
    ));
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <TextField
            style={{ minWidth: "320px" }}
            size="small"
            minRows="12"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
        </Grid>
        <Grid item marginLeft="8px">
          <Button disabled={!newTodo} onClick={saveTodo} variant="outlined">
            Add
          </Button>
        </Grid>
      </Grid>
      <Paper style={{ marginTop: "24px" }}>{content}</Paper>
    </>
  );
}
