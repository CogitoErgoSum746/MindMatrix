import React from "react";
import imggall1 from "../../../src/images/imagegallery/imggall1.jpeg";
import imggall2 from "../../../src/images/imagegallery/imggall2.jpg";
import imggall3 from "../../../src/images/imagegallery/imggall3.jpg";
import imggall4 from "../../../src/images/imagegallery/imggall4.webp";
import imggall5 from "../../../src/images/imagegallery/imggall5.webp";
import imggall6 from "../../../src/images/imagegallery/imggall6.jpg";
import imggall7 from "../../../src/images/imagegallery/imggall7.jpg";
import imggall8 from "../../../src/images/imagegallery/imggall8.jpg";
import imggall9 from "../../../src/images/imagegallery/imggall9.webp";
import imggall10 from "../../../src/images/imagegallery/imggall10.webp";
import imggall11 from "../../../src/images/imagegallery/imggall11.jpg";
import imggall12 from "../../../src/images/imagegallery/imggall12.jpg";
import imggall13 from "../../../src/images/imagegallery/imggall13.webp";
import imggall14 from "../../../src/images/imagegallery/imggall14.webp";
import imggall15 from "../../../src/images/imagegallery/imggall15.webp";
import Carousel from "react-multi-carousel";

const images = [
  imggall1,
  imggall2,
  imggall3,
  imggall4,
  imggall5,
  imggall6,
  imggall7,
  imggall8,
  imggall9,
  imggall10,
  imggall11,
  imggall12,
  imggall13,
  imggall14,
  imggall15,
];
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const ImageGalary = () => {
  return (
    <div>
      <p className="text-black text-xl md:text-3xl lg:text-5xl font-semibold font-['Inter']">
        Image Gallery
      </p>
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          className="skill-slider mt-10"
          stopOnHover={true}
        >
          {images.map((image, index) => (
            <div key={index} className="item">
              <img
                src={image}
                alt={`Image${index + 1}`}
                style={{ width: "500px", height: "400px" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageGalary;
