import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoTypes } from "./todoCard";

export interface CounterState {
  toDos: TodoTypes[];
}

const initialState: CounterState = {
  toDos: [],
};

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoTypes>) => {
      state.toDos.push(action.payload);
    },
  },
});

export const { add } = counterSlice.actions;

export default counterSlice.reducer;
