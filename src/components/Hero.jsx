import { Link } from "react-router-dom";
import image1 from "../assets/girl1.jpg";
import image2 from "../assets/girl2.jpg";
import image3 from "../assets/girl3.jpg";
import image4 from "../assets/girl4.jpg";
import image5 from "../assets/girl5.jpg";
const carouselImages = [image1, image5, image3, image4, image2];
const Hero = () => {
  return (
    <div className=" grid lg:grid-cols-2  gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-5xl font-bold tracking-tight sm:text-6xl">
          {" "}
          We are changing the way people shop
        </h1>
        <p className="max-w-xg text-lg leading-8 mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed
          inventore iure exercitationem officia error mollitia praesentium
          minima, dolor itaque libero quae eaque laborum vel quis odio esse
          ratione nam.
        </p>
        <div className="mt-10">
          <Link className="btn btn-primary mt-2" to="products">
            Our Products
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box '>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
