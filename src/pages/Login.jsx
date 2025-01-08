/* eslint-disable no-unused-vars */
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
export const action=(store)=> async ()=>{
  console.log(store);
  return null;
}
const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 shadow-lg bg-base-100 flex flex-col gap-y-4"
      >
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="example@.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button className="btn btn-primary btn-block">Guest User</button>
        <p className="text-center">
          Not Registerd Yet?{" "}
          <Link
            to="/register"
            className="ml-2 link  link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
