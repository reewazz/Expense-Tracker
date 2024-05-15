import PropTypes from "prop-types";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });

  const suffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${suffix(day)} ${month}`;
};

export const MainSchedule = ({ scheduledRows }) => {
  return (
    <>
      <p className="text-xl font-bold text-black">Scheduled Expenses</p>
      <div className="scheduletable">
        {scheduledRows.length > 0 ? (
          scheduledRows.map((row) => (
            <div className="transactions" key={row._id}>
              <div className="statement">
                <p className="text font-bold text-black">{row.statement}</p>
                <h3 className="text-sm leading-6 font-medium text-gray-400">
                  {formatDate(row.date)}
                </h3>
              </div>
              <div className="amount">
                <p className="text font-bold text-black">Rs. {row.amount}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No scheduled transactions found</p>
        )}
      </div>
    </>
  );
};

MainSchedule.propTypes = {
  scheduledRows: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      statement: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      account: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      period: PropTypes.string,
      recursion: PropTypes.string,
    })
  ).isRequired,
};
