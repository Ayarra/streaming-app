import { useState } from "react";

function FormInput(props) {
  const { label, handleChange, id, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col">
      <label className="text-gray-300" htmlFor={id}>
        {label}:
      </label>
      <input
        id={id}
        className=" bg-slate-700 text-gray-100 placeholder-gray-400 border border-gray-500 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-teal-500 peer"
        {...inputProps}
        onChange={handleChange}
        onBlur={(e) => {
          setFocused(true);
        }}
        focused={focused.toString()}
      />
      <span
        className={`text-rose-300 mb-2 text-sm italic hidden ${
          focused ? "peer-invalid:block" : ""
        }`}
      >
        {errorMessage}
      </span>
    </div>
  );
}

export default FormInput;
