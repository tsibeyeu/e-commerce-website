import { Hero } from "../components";
import { customFetch } from "../utils";
import {FeaturedProducts} from "../components";
const url = "/products?featured=true";
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  // console.log(response);

  return { products };
};
const Landing = () => {
  return (
    <>
      <div>Landing</div>
      <Hero />
      <FeaturedProducts/>
    </>
  );
};

export default Landing;
