import { Form, redirect } from "react-router-dom";
import { registerUser } from "../../api/axios";

export async function action({ request }) {
  const formData = await request.formData();
  const newUser = Object.fromEntries(formData);
  await registerUser(newUser);
  return redirect("/");
}
function Register() {
  return (
    <div className="mt-16 px-28 pb-10 flex flex-col justify-center items-center">
      <Form method="post" className="flex flex-col w-1/2 max-w-72 mb-5">
        <input
          type="text"
          name="username"
          className="bg-slate-700 text-gray-100 placeholder-gray-400 border border-gray-500 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-teal-500"
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          className="bg-slate-700 text-gray-100 placeholder-gray-400 border border-gray-500 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-teal-500"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          className="bg-slate-700 text-gray-100 placeholder-gray-400 border border-gray-500 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-teal-500"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          className="bg-slate-700 text-gray-100 placeholder-gray-400 border border-gray-500 rounded-md px-3 py-2 mb-3 focus:outline-none focus:border-teal-500"
          placeholder="Confirm Password"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </Form>
    </div>
  );
}

export default Register;
