import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { registerUser } from "../../api/axios";
import FormInput from "../FormInput";

export async function action({ request }) {
  const formData = await request.formData();
  const newUser = Object.fromEntries(formData);
  await registerUser(newUser);
  return redirect("/");
}

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMessage: "Email should be a valid email address!",
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "password",
      label: "Password",
      required: true,
    },
    {
      id: 4,
      name: "passwordConfirmation",
      type: "text",
      placeholder: "Password Confirmation",
      label: "Password Confirmation",
      required: true,
      errorMessage: "Passwords don't match!",
      pattern: values.password,
    },
  ];

  const handleChange = (e) => {
    console.log(values);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-16 px-28 pb-10 flex flex-col justify-center items-center">
      <Form method="post" className="flex flex-col w-1/2 max-w-72 mb-5">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            handleChange={handleChange}
          />
        ))}

        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </Form>
    </div>
  );
}

export default Register;
