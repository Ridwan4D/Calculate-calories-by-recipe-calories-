import PropTypes from "prop-types";

const CookTable = ({ reSendCart }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-center md:mx-10 pb-3 border-b-2 border-dashed mt-5">
        Currently cooking: {reSendCart.length}
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
            {reSendCart.map((item, idx) => (
              <tr key={idx} className="bg-[#28282808] text-sm">
                <td className="td-4">{idx + 1}</td>
                <td>{item.name}</td>
                <td className="td">{item.preparing_time} minute</td>
                <td className="td">{item.calories} calories</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
CookTable.propTypes = {
  reSendCart: PropTypes.array,
};
export default CookTable;
