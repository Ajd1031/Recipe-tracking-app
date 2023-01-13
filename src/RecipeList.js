import React from "react";
import RecipeDisplay from "./RecipeDisplay";

function RecipeList({recipes, deleteHandler}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  // Line 23 is where I will call another componenet. It will be called ListDisplay & its job will be to create a template that will accept the data from RecipeCreate.js
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th id="wider" >Ingredients</th>
            <th id="wider">Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <RecipeDisplay recipes={recipes} deleteHandler={deleteHandler} />
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
