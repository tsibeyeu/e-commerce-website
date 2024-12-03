import { Link } from "react-router-dom";
import image1 from "../assets/girl1.jpg";
import image2 from "../assets/girl2.jpg";
import image3 from "../assets/girl3.jpg";
import image4 from "../assets/girl4.jpg";
import image5 from "../assets/girl5.jpg";
const carouselImages = [image1, image5, image3, image4, image2];
const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight">
          {" "}
          Change the way you shop!
        </h1>
        <p className="max-w-lg text-lg leading-8 mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed
          inventore iure exercitationem officia error mollitia praesentium
          minima, dolor itaque libero quae eaque laborum vel quis odio esse
          ratione nam.
        </p>
        <div className="btn btn-primary mt-2">
          <Link to="products">Our Products</Link>
        </div>
      </div>
      <div className=" hidden h-[28rem] lg:carousel space-x-4 carousel-center p-4 bg-neutral rounded-box">
        <div className="carousel-item">
          {carouselImages.map((image, index) => (
            <img className="h-full object-cover w-80 rounded-box" src={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;
