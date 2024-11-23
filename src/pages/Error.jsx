import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="font-semibold text-9xl text-primary">404</p>
          <h1 className="mt-4 font-bold text-3xl tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 leading-7 text-lg">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">Go Back To Home</Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center text-4xl font-bold">Oops! There was error...</h4>
    </main>
  );
};

export default Error;
