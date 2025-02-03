import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { ComplexPaginationContainer, OrderList, SectionTitle } from "../components";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().user.user;
    if (!user) {
      toast.warn("Please login to continue");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: { Authorization: `Bearer ${user.token}` },
      });
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Error occured when placing order";
      toast.error(errorMessage);
      if (error.response.status === 401 || error.response.status === 403)
        return redirect("/login");
      return null;
    }
  };
const Orders = () => {
  const {meta}=useLoaderData();
  if(meta.pagination.total < 1) return <SectionTitle text="Please Make an Order"/>
  return <>
  <SectionTitle text="Your Orders" />
  <OrderList/>
  <ComplexPaginationContainer/>
  </>;
};

export default Orders;
