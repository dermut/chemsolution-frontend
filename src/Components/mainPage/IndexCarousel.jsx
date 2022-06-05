import main_visu1 from "../../images/main_visu1.jpg";
import main_visu2 from "../../images/main_visu2.jpg";
import main_visu3 from "../../images/main_visu3.jpg";
import Carousel from "react-material-ui-carousel";

function IndexCarousel() {
  var images = [
    {
      object: main_visu1,
      alt: "Main Image1",
    },
    {
      object: main_visu2,
      alt: "Main Image2",
    },
    {
      object: main_visu3,
      alt: "Main Image3",
    },
  ];

  return (
    <div>
      <Carousel indicators={false}>
        {images.map((image, i) => (
          <img
            className="carousel_image"
            key={i}
            src={image.object}
            alt={image.alt}
          ></img>
        ))}
      </Carousel>
    </div>
  );
}

export default IndexCarousel;
