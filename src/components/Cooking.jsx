import Table from "./Table";
import PropTypes from "prop-types";

const Cooking = ({ sendItem,handlePreparing }) => {
  return (
    <div className="w-full md:w-2/4 p-2 border-2 border-gray-400 rounded-2xl h-full md:mt-5">
      <h3 className="text-2xl font-semibold text-center md:mx-10 pb-3 border-b-2 border-dashed">
        Want to cook: {sendItem.length}
      </h3>
      <Table handlePreparing={handlePreparing} sendItem={sendItem}></Table>
    </div>
  );
};
Cooking.propTypes = {
  sendItem: PropTypes.array,
  handlePreparing: PropTypes.func,
};
export default Cooking;
