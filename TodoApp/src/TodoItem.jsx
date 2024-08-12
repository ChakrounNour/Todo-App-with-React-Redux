import { FaCheck, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateTodo } from "./redux/todoSlice";

function TodoItem({ id, name, isDone, createdAt, updatedAt, onClickRemove }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updateTodo({ id, isDone: true, updatedAt: new Date().toLocaleString() })
    );
  };
  return (
    <tr>
      <td className="border border-slate-700">
        <p className={`todo-item ${isDone ? "line-through" : ""}`}>{name}</p>
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          {createdAt}
        </span>
      </td>
      <td className="border border-slate-700">
        <span
          className={`items-center rounded-md inline-flex px-2 py-1 text-xs font-medium ring-1 ring-inset ${
            isDone
              ? "bg-green-50 text-green-700 ring-green-600/20"
              : "bg-yellow-50 text-yellow-800 ring-yellow-600/20"
          }`}
        >
          {isDone ? "Completed" : "Pending"}
        </span>
        {isDone && <p>{updatedAt}</p>}
      </td>
      {!isDone && (
        <td className="border border-slate-700">
          <div>
            <FaCheck className="text-green-700" onClick={() => handleClick()} />
          </div>
        </td>
      )}
      <td colSpan={isDone ? 2 : 1} className="border border-slate-700">
        <div>
          <FaTimes
            className="text-red-700 cursor-pointer"
            onClick={() => onClickRemove({ id })}
          />
        </div>
      </td>
    </tr>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  onClickRemove: PropTypes.func.isRequired,
};

export default TodoItem;
