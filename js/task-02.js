const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');

const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = ingredient;
    return listItem;
  })
}

const ingredientListItems = makeIngredientsList(ingredients)

ingredientList.append(...ingredientListItems)