import React from "react";

function RecipeDisplay ({recipes, deleteHandler}) {
    //const [status, setStatus] = useState(true);
    
    

     return recipes.map((recipe, index) => {
            return (
                <tr key={index}>
                    <td>{recipe.name}</td>
                    <td>{recipe.cuisine}</td>
                    <td><img src={recipe.photo} alt="food"/></td>
                    <td id="wider" className="scrollBar" >{recipe.ingredients}</td>
                    <td id="wider" className="scrollBar" >{recipe.preparation}</td>
                    <td><button name="delete" onClick={() => deleteHandler(recipe)} key={index} >delete</button></td>
                </tr>
            );
         
    })
}

export default RecipeDisplay