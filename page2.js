let recipeList = [
  {
    recipe_name: "Grill chicken",
    image: {
      url: "img/leo-roza-P_z_xlMGuEk-unsplash@2x.png",
      altInfo: "Grill image",
    },
    food_type: "veg",
    Ingredients_required: "",
    Steps_to_prepare: "",
  },
  {
    recipe_name: "Grill chicken",
    image: {
      url: "img/leo-roza-P_z_xlMGuEk-unsplash@2x.png",
      altInfo: "Grill image",
      food_type: "veg",
      Steps_to_prepare: "",
    },
  },
];

const addRecipeForm = document.querySelector("#add-recipe-form");
addRecipeForm.addEventListener("summit", function (event) {
  const formdata = new FormData(addRecipeForm);

  const recipe = {
    id: new Date().getTime(),

    recipe_name: formdata.get(""),
  };
});
