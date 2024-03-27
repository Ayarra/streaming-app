import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { loginUser } from "../../api/axios";
import FormInput from "../FormInput";
import Svg from "../Svg";

export async function action({ request }) {
  const formData = await request.formData();
  const newUser = Object.fromEntries(formData);
  await loginUser(newUser);
  return redirect("/");
}

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",

      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
      required: true,
    },
  ];

  const handleChange = (e) => {
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
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </Form>

      <div className="text-gray-100 w-1/2 max-w-72 flex items-center justify-center">
        <hr className="border border-gray-500 flex-grow mx-4" />
        <div className="text-gray-400">Or</div>
        <hr className="border border-gray-500 flex-grow mx-4" />
      </div>
      <div className="text-gray-200">
        Join Streamy with one of your social media accounts:
      </div>
      <div className="flex items-center justify-center bg-slate-700 py-4 rounded-lg mt-4">
        <ul className="flex space-x-4">
          <button className="flex flex-col items-center text-blue-500">
            <Svg icon="facebook" className="w-10 fill-blue-400 rounded-lg" />
            <span className="mt-2">Facebook</span>
          </button>
          <button className="flex flex-col items-center text-red-500">
            <Svg icon="google" className="w-10 fill-red-400 rounded-lg" />
            <span className="mt-2">Google</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <Svg icon="github" className="w-10 fill-gray-400 rounded-lg" />
            <span className="mt-2">Github</span>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Login;
