import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodoTypes } from "../todo/todoCard";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<TodoTypes[], number>({
      query: () => "/todos",
      providesTags: ["Todos"],
      transformResponse: (res: TodoTypes[]) => res.sort((a, b) => b.id - a.id),
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (todo: TodoTypes) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }: TodoTypes) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
