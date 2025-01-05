import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("Data to send:", data);

  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';

    toast.error(errorMessage);
    return null;
  }
};
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 shadow-lg bg-base-100 flex flex-col gap-y-4"
      >
        <h4 className="text-center font-bold text-3xl">Register</h4>
        <FormInput type="text" label="username" name="username" defaultValue="name" />
        <FormInput
          type="email"
          label="email"
          name="email"
          defaultValue="example@gmail.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <button className="btn btn-primary btn-block">Guest User</button>
        <p className="text-center">
          you have account ?{" "}
          <Link
            to="/login"
            className="ml-2 link  link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
