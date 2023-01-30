
import { Todo } from "./features/todo/todo";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack
      paddingY="2rem"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Todo />
    </Stack>
  );
}

export default App;
