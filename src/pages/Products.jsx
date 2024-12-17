import { Filters,PaginationContainer,ProductContainer } from "../components"
import { customFetch } from "../utils";
const url="/products";
export const loader= async ()=>{
  const response = await customFetch(url);
  const products=response.data.data;
  const meta = response.data.meta;
  console.log(response);
  return {products: products, meta: meta};
}
const Products = () => {
  return (
    <>
    <Filters/>
    <ProductContainer/>
    <PaginationContainer/>
    </>
  )
}

export default Products