import { Filters,PaginationContainer,ProductContainer } from "../components"
import { customFetch } from "../utils";
const url="/products";
export const loader= async ()=>{
  const response = await customFetch(url);
  console.log(response);
  return null;
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