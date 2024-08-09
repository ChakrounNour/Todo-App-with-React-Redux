import { FaCheck, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

function TodoItem({ name, isDone, createdAt }) {
  return (
    <>
      <tr>
        <td>
          <p>{name}</p>
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {createdAt}
          </span>
        </td>
        <td>
          <span
            className={`items-center rounded-md inline-flex px-2 py-1 text-xs font-medium ring-1 ring-inset ${
              isDone
                ? "bg-green-50 text-green-700 ring-green-600/20"
                : "bg-yellow-50 text-yellow-800 ring-yellow-600/20"
            }`}
          >
            {isDone ? "Completed" : "Pending"}
          </span>
        </td>
        <td>
          <div>
            <FaCheck className="text-green-700" />
          </div>
        </td>
        <td>
          <div>
            <FaTimes className="text-red-700" />
          </div>
        </td>
      </tr>
    </>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default TodoItem;
