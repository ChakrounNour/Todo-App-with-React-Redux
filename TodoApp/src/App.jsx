import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function App() {
  const { todoList } = useSelector((state) => state.todo);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList &&
            todoList.map((todo) => (
              <TodoItem
                key={todo.id}
                name={todo.name}
                isDone={todo.isDone}
                createdAt={todo.createdAt}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
