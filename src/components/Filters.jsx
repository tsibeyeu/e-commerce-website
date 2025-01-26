import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
import { Form, useLoaderData, Link } from "react-router-dom";
const Filters = () => {
  const { meta,params } = useLoaderData();
  console.log("meta in filter",meta)
  const { search,category, company, order, price, shipping } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        name="search"
        size="input-sm"
        type="search"
        label="search product"
        defaultValue={search}
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange name="price" label="select price" size="range-sm"  defaultValue={price}/>
      <FormCheckbox label='free shipping' name='shipping' size='checkbox-sm' defaultValue={shipping} />

      <button type="submit" className="btn btn-primary btn-sm ">
        Search
      </button>
      <Link to="/products" type="submit" className="btn btn-accent btn-sm ">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
