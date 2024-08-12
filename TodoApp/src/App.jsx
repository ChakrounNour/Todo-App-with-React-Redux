import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import TodoItem from "./TodoItem";
import FormAdd from "./FormAdd";
import ModalDelete from "./ModalDelete";
import { removeTodo } from "./redux/todoSlice";

function App() {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [deleteTodo, setDeleteTodo] = useState(null);

  const handleClickRemove = (todo) => {
    setDeleteTodo(todo);
    setShow(true);
  };

  const handleConfirmDelete = () => {
    if (deleteTodo) {
      dispatch(removeTodo({ id: deleteTodo.id }));
    }
    setShow(false);
    setDeleteTodo(null);
  };

  const handleCloseModal = () => {
    setShow(false);
    setDeleteTodo(null);
  };

  return (
    <div className="mt-8 bg-center">
      <div className="container py-10 text-center rounded-lg bg-slate-50 overflow-hidden shadow-2xl">
        <ModalDelete
          open={show}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
        <div className="flex justify-center mb-4">
          <FormAdd />
        </div>
        <div className="flex justify-center p-4">
          <table className="border-collapse w-full border border-slate-500 table-auto text-center">
            <thead>
              <tr>
                <th className="border border-slate-600">Name</th>
                <th className="border border-slate-600">Status</th>
                <th className="border border-slate-600" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {todoList &&
                todoList.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    isDone={todo.isDone}
                    createdAt={todo.createdAt}
                    updatedAt={todo.updatedAt}
                    onClickRemove={handleClickRemove}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
