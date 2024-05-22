
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 40000, min: 900 },
      slidesToSlide: 1,
      items: 1
    }
  };
  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      infinite={true}
      autoPlay={true}
      containerClass="carousel-container"
      className= "slider"
      removeArrowOnDeviceType={'desktop'}
    >
      <div className="banner">
        <img className="bannerImg" src="/src/pictures/banner.png" />
      </div>
      <div className="banner">
        <img className="bannerImg" src="/src/pictures/banner2.png" />
      </div>
      <div className="banner">
        <img className="bannerImg" src="/src/pictures/banner3.png" />
      </div>
    </Carousel>
  );
}
