import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utils";

import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().user.user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      numItemsInCart,
      cartItems,
    };
    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      store.dispatch(clearCart());
      toast.success("Order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "there was an error making order";
      toast.error(errorMessage);
      return null;
    }
  };
const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4 ">
      <h4 className="capitalize text-xl font-medium"> shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place Order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
