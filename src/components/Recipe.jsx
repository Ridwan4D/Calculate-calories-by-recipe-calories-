import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    // console.log(recipe);
    const {name,id} = recipe;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};
Recipe.propTypes ={
    recipe: PropTypes.object
}
export default Recipe;