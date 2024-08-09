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
  },
});
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
