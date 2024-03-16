import CookTable from "./CookTable";
import Table from "./Table";
import PropTypes from "prop-types";

const Cooking = ({ sendItem,handlePreparing,reSendCart,time,calories}) => {
  return (
    <div className="w-full md:w-2/4 p-2 border-2 border-gray-400 rounded-2xl h-full md:mt-5">
      <Table handlePreparing={handlePreparing} sendItem={sendItem}></Table>
      <CookTable reSendCart={reSendCart}></CookTable>
      <div className="my-5 px-2 md:px-5 md:text-2xl font-semibold text-[#282828CC] flex">
        <p>Total Time = {time} minutes</p>
        <p>Total Calories = {calories} calories</p>
      </div>
    </div>
  );
};
Cooking.propTypes = {
  sendItem: PropTypes.array,
  handlePreparing: PropTypes.func,
  reSendCart: PropTypes.array,
  time: PropTypes.number,
  calories: PropTypes.number,
};
export default Cooking;
