import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { Checkbox, makeStyles } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUpdateTodoMutation, useDeleteTodoMutation } from "../api/apiSlice";

export interface TodoTypes {
  id: number;
  title: String;
  completed: boolean;
  createdOn: String;
}

export interface TodoPropTypes {
  todo: TodoTypes;
}

export default function TodoCard({ todo }: TodoPropTypes) {
  let style = todo.completed ? { textDecoration: "line-through" } : {};
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  return (
    <Card
      style={{ margin: "9px", padding: "8px" }}
      sx={{ minWidth: 380, maxWidth: 380 }}
      
    >
      <CardHeader
        avatar={
          <Checkbox
            onChange={(e) =>
              updateTodo({ ...todo, completed: !todo.completed })
            }
            checked={todo.completed}
          />
        }
        action={
          <IconButton onClick={() => deleteTodo(todo)} aria-label="settings">
            <DeleteIcon color="error" />
          </IconButton>
        }
        title={todo.title}
        subheader={todo.createdOn}
      />
    </Card>
  );
}
