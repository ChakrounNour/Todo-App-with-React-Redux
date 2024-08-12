import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: 1,
      name: "learn HTML",
      isDone: false,
      createdAt: new Date().toLocaleString(),
    },
    {
      id: 2,
      name: "learn CSS",
      isDone: false,
      createdAt: new Date().toLocaleString(),
    },
    {
      id: 3,
      name: "JavaScript",
      isDone: true,
      createdAt: new Date().toLocaleString(),
    },
  ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              isDone: action.payload.isDone,
              updatedAt: action.payload.updatedAt,
            }
          : todo
      );
    },
  },
});
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
