import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Details = ({ data }) => {
  const { id, title, description } = data;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/details/${id}`}>
        <button className="btn btn-success">Booking</button>
      </Link>
    </div>
  );
};

Details.propTypes = {
  data: PropTypes.object,
};
export default Details;
