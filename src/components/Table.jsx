import PropTypes from "prop-types";

const Table = ({ sendItem,handlePreparing }) => {
//   console.log(sendItem);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td className="td">Name </td>
            <td className="td">Time </td>
            <td className="td">Calories</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {sendItem.map((item, idx) => (
            <tr key={idx} className="bg-[#28282808] text-sm">
              <td className="td-4">{idx+1}</td>
              <td>{item.name}</td>
              <td className="td">{item.preparing_time} minute</td>
              <td className="td">{item.calories} calories</td>
              <td className="td">
                <button onClick={()=>handlePreparing(item.id)} className="btn md:px-5 py-0 rounded-full btn-bg btn-text text-sm">
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  sendItem: PropTypes.array,
  handlePreparing: PropTypes.func,
};
export default Table;
