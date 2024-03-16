import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
    const [recipes,setRecipes]=useState([])
    useEffect(()=>{
        fetch('fake-data.json')
        .then(res=>res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="w-2/3">
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;