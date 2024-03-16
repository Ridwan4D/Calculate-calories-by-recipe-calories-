import PropTypes from "prop-types";

const Recipe = ({ recipe,handleWantToCook }) => {
  // console.log(recipe);
  const {
    name,
    recipe_img,
    description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
//   console.log(recipe_img);
  return (
    <div className="p-4 border-2 border-gray-400 rounded-2xl">
      <img src={recipe_img} alt="images" className="mx-auto" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="mt-3 text-base sm-color border-b-2 border-dashed pb-3">
        {description.slice(0, 63)}
      </p>
      <h4 className="text-lg font-medium mt-3">
        Ingredients: {ingredients.length}
      </h4>
      <ul className="text-lg sm-color list-disc pl-5 border-b-2 border-dashed pb-3">
        <li>{ingredients[0]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
      </ul>
      <div className="my-3 flex gap-7">
        <div className="text-[#282828CC] flex gap-2 items-center">
          <i className="fa-regular fa-clock"></i>
          <p>{preparing_time} minutes</p>
        </div>
        <div className="text-[#282828CC] flex gap-2 items-center">
          <i className="fa-solid fa-fire"></i>
          <p>{calories} calories</p>
        </div>
      </div>
      <button onClick={()=>handleWantToCook(recipe)} className="btn px-5 rounded-full btn-bg btn-text">
        Want to Cook
      </button>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object,
  handleWantToCook: PropTypes.func,
};
export default Recipe;
