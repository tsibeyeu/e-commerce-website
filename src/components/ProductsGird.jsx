import { Link, useLoaderData } from "react-router-dom";

const ProductsGird = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        const { title, price, image } = product;
        return (
          <Link key={product.id} to={`product/${product.id}`}>
            <figure>
              <img src={image} alt={title} />
            </figure>
            <div>
              <h2>{title}</h2>
              <span>{price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGird;
