import PropTypes from "prop-types";

const Carousel = ({ data }) => {
  const { id, title, description, image_url, bg_url } = data;

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full flex ">
        <img src={image_url} className="w-1/2" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.object,
};

export default Carousel;
