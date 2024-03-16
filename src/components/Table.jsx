import PropTypes from "prop-types";

const Table = ({ sendItem, handlePreparing }) => {
  //   console.log(sendItem);
  return (
    <div>
      <h3 className="text-2xl font-semibold text-center md:mx-10 pb-3 border-b-2 border-dashed">
        Want to cook: {sendItem.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {sendItem.map((item, idx) => (
              <tr key={idx} className="bg-[#28282808] text-sm">
                <td className="td-4">{idx + 1}</td>
                <td>{item.name}</td>
                <td className="td">{item.preparing_time} minute</td>
                <td className="td">{item.calories} calories</td>
                <td className="td">
                  <button
                    onClick={() => handlePreparing(item)}
                    className="btn md:px-5 py-0 rounded-full btn-bg btn-text text-sm"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
Table.propTypes = {
  sendItem: PropTypes.array,
  handlePreparing: PropTypes.func,
};
export default Table;
