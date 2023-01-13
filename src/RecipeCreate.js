import React, { useState } from "react";

function RecipeCreate({addRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  // This section has no <thead> section which means it will only be displayed as a row. Here I will be creating the forms that will accept inputs from users.
  // I now have the correct structure for the inputs/textareas but now I must use state in a way that allows me to 
  // I want data from addrecipes to be = {name: userInput, cuisine: userInput, ......}/ addPosts is a function that adds an object to the array recipes.

let initialData = {
  name: "", 
  cuisine: "", 
  photo: "", 
  ingredients: "",
  preparation: "",
}

  const [data, setData] = useState({...initialData})
  const changeHandler = ({target}) => {
    setData({...data, [target.name]: target.value })
    
  }
  const submitHandler = (event) => {
    event.preventDefault();
    //here I am calling addRecipes with an object that containes whatever the userInput in all of the forms. This will allow me to access the data in the App component which will then allow me to use the data anywhere in this project
    addRecipes(data)
    setData({...initialData})
  }
  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            
              <td name="name">
                <input type="text" name="name" className="name" onChange={changeHandler} value={data.name} placeholder="Name" />
              </td>

              <td name="cuisine">
              <input type="text" name="cuisine" className="cuisine" onChange={changeHandler} value={data.cuisine} placeholder="Cuisine" />
              </td>

              <td name="photo" >
              <input type="text" name="photo" className="photo" onChange={changeHandler} value={data.photo} placeholder="URL"/>
              </td>

              <td name="ingredients" id="wider">
              <textarea type="text" name="ingredients" className="ingredients" onChange={changeHandler} value={data.ingredients}  placeholder="Ingredients" />
              </td>

              <td name="preparation" id="wider">
              <textarea type="text" name="preparation" className="preparation" onChange={changeHandler} value={data.preparation} placeholder="Preparation" />
              </td>
              
              <td>
                <button type="submit" >Create</button>
              </td>
            
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
