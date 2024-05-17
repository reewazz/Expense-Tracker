import PropTypes from "prop-types";

export const Card = ({ name, imageUrl, amount, onDelete, onEdit }) => {
  return (
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
        <div className="buttons">
          {/* <i
            className="ri-pencil-line"
            onClick={() => onEdit({ name, imageUrl, amount })}
          ></i> */}
          <i className="ri-delete-bin-6-line" onClick={onDelete}></i>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
