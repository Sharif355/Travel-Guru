import PropTypes from "prop-types";
import dataIcon from "../../assets/icons/calender_icon.png";

const SingleBooking = ({ findData }) => {
  console.log(findData);
  const { title, description } = findData;
  return (
    <div className="flex justify-between gap-5 mt-20">
      <div className="w-full">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="bg-[#FFFFFF] w-full">
        <div className="">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Origin</span>
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Destination</span>
                  </label>
                  <input
                    type="password"
                    placeholder=""
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="flex justify-between gap-5">
                  <div className="flex flex-col w-full">
                    <label className="label">
                      <span className="label-text font-medium">From</span>
                    </label>
                    <p className="border text-lg font-medium p-2 bg-[#F2F2F2] ">
                      01/09{" "}
                      <img
                        className="inline ml-9 w-8"
                        src={dataIcon}
                        alt="date icon"
                      />
                    </p>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="label">
                      <span className="label-text font-medium">To</span>
                    </label>
                    <p className="border text-lg font-medium p-2 bg-[#F2F2F2] ">
                      04/09{" "}
                      <img
                        className="inline ml-9 w-8"
                        src={dataIcon}
                        alt="date icon"
                      />
                    </p>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn normal-case bg-[#F9A51A]">
                    Start Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBooking.propTypes = {
  findData: PropTypes.object,
};
export default SingleBooking;
