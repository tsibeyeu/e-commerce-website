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
// Loaders
import {loader as loadingLanding} from "./pages/Landing"
import {loader as singleProdcutLoading} from "./pages/SingleProduct" ;
import {loader as prodcutsLoading} from "./pages/Products" ;
import {loader as checkoutLoading} from "./pages/Checkout" ;
// Actions
import {action as registerAction} from "./pages/Register";
import {action as loginAction} from "./pages/Login";
import {action as checkoutAction} from "./components/CheckoutForm";
import store from "./store";
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
        errorElement: <ErrorElement />,
        loader: prodcutsLoading
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
        loader:checkoutLoading(store),
        action:checkoutAction(store),
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
    action: loginAction(store),

  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
