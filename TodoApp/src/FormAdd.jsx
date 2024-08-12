import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";

function FormAdd() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTodo = {
      id: Math.floor(Math.random() * 888888) + 100000,
      name: data.name,
      isDone: false,
      createdAt: new Date().toLocaleString(),
    };
    dispatch(addTodo(newTodo));
    reset();
    console.log(newTodo);
  };

  return (
    <div className="w-full p-4 ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
        <input
          placeholder="Enter todo"
          className="border border-slate-600 rounded-md p-2 w-full"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
          })}
        />

        <input
          type="submit"
          value="Add Todo"
          className="ml-2 bg-blue-500 text-white rounded-md p-2 cursor-pointer"
        />
      </form>
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    </div>
  );
}

export default FormAdd;
