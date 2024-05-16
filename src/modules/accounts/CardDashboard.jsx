import PropTypes from "prop-types";

export const CardDashboard = ({ name, imageUrl, amount }) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <p className="text-xl font-bold text-black">{name}</p>
          <img src={imageUrl} alt="" />
        </div>
        <div className="bottom">
          <div className="texts">
            <p className="text-2xl font-bold text-black">Rs. {amount}</p>
            <p className="text-xl font-bold text-grey">Rs. {amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};
CardDashboard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};
