import { Filters,PaginationContainer,ProductContainer } from "../components"
import { customFetch } from "../utils";
const url="/products";
export const loader= async ({request})=>{

  const params= Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  // const params =new URL(request.url).searchParams;
  // const paramsObject = Object.fromEntries(params.entries()); 
  // console.log(paramsObject);
  const response = await customFetch(url,{params});
  const products=response.data.data;
  const meta = response.data.meta;
  console.log(response);
  return {products: products, meta: meta,params:params};
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