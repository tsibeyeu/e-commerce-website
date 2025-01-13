/* eslint-disable no-unused-vars */
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("login successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";

      toast.error(errorMessage);
      return null;
    }
  };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //create async function
  const loginGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@gmail.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("login as Guest");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 shadow-lg bg-base-100 flex flex-col gap-y-4"
      >
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
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
