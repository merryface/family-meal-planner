export default (mealGroups) => {
  // add all the ingredients to one array
  const mealListWithTarikIngredients = extractAllIngredients(mealGroups.mealListWithTarik)
  const mealListSoloIngredients = extractAllIngredients(mealGroups.mealListSolo)

  // add up the quantities of the ingredients
  const mealListWithTarikIngredientsQuantities = addUpIngredientQuantities(mealListWithTarikIngredients, 2);
  const mealListSoloIngredientsQuantities = addUpIngredientQuantities(mealListSoloIngredients);

  // create a shopping list
  const shoppingList = createShoppingList(mealListWithTarikIngredientsQuantities, mealListSoloIngredientsQuantities);
  return shoppingList
}


function addUpIngredientQuantities(ingredients, numberOfPeople = 1) {
  const ingredientsQuantities = {};

  ingredients.forEach((ingredient) => {
    const { label, quantity, unit } = ingredient;
    
    // Use the label value as the key for ingredientsQuantities
    if (ingredientsQuantities[label]) {
      ingredientsQuantities[label].quantity += (quantity/2) * numberOfPeople;
    } else {
      ingredientsQuantities[label] = { quantity: (quantity/2) * numberOfPeople, unit };
    }
  });

  return ingredientsQuantities;
}

function extractAllIngredients(mealsList) {
  return mealsList.reduce((acc, meal) => {
    return acc.concat(meal.ingredients);
  }, []);
}

function createShoppingList(mealListWithTarikIngredientsQuantities, mealListSoloIngredientsQuantities) {
  const combinedIngredients = {};

  // Process first meal list
  Object.entries(mealListWithTarikIngredientsQuantities).forEach(([label, details]) => {
    combinedIngredients[label] = {
      label,
      quantity: details.quantity,
      unit: details.unit
    };
  });

  // Process second meal list and combine matching ingredients
  Object.entries(mealListSoloIngredientsQuantities).forEach(([label, details]) => {
    if (combinedIngredients[label]) {
      // If ingredient exists, add quantities
      combinedIngredients[label].quantity += details.quantity;
    } else {
      // If ingredient doesn't exist, add it
      combinedIngredients[label] = {
        label,
        quantity: details.quantity,
        unit: details.unit
      };
    }
  });

  // Convert back to array
  return Object.values(combinedIngredients);
}