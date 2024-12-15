// /* eslint-disable no-case-declarations */
// import { RouterProvider, createBrowserRouter } from "react-router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Orders,
  Products,
  Register,
  SingleProduct,
  Login,
  
} from "./pages";
import { ErrorElement } from "./components";
import {loader as loadingLanding} from "./pages/Landing"
import {loader as singleProdcutLoading} from "./pages/SingleProduct" ;
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader:loadingLanding
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader:singleProdcutLoading
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
