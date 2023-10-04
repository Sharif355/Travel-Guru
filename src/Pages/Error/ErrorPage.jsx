import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <Helmet>
        <title>Travel Guru | Error!</title>
      </Helmet>
      <h2 className="tex-3xl ">Error 404!</h2>
      <h2 className="tex-3xl ">The page you looking does not exist!</h2>
      <Link to="/">
        <button className="btn btn-error normal-case">Return Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
