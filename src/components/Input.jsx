import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { id, label, type, isTextarea, ...props },
  ref
) {
  const className =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 transition-colors";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea {...{ id, className, ref }} {...props} />
      ) : (
        <input
          {...{ id, type, className, ref }}
          {...props}
          autoComplete="off"
        />
      )}
    </p>
  );
});

export default Input;
