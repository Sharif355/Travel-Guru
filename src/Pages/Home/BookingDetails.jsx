import { useLoaderData, useParams } from "react-router-dom";
import SingleBooking from "./SingleBooking";

const BookingDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const findData = data.find((item) => item.id == id);

  return (
    <div>
      {findData ? (
        <SingleBooking key={findData.id} findData={findData}></SingleBooking>
      ) : (
        <p>Don't have any data for:{id}</p>
      )}
    </div>
  );
};

export default BookingDetails;
