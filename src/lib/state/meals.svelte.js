import mealRandomiser from '../scripts/mealRandomiser.js'
import shoppingListBreakdown from '../scripts/shoppingListBreakdown.js'

export const mealCounts = $state({
    total: 0,
    withTarik: 0
})

export const randomMeals = $state({
  meals: [],
  updateRandomMeals(totalMealCounts, mealWithTarikCounts, mealLibraryArray) {
    this.meals = mealRandomiser(totalMealCounts, mealWithTarikCounts, mealLibraryArray);
  },
  shoppingList: [],
  updateShoppingList() {
    this.shoppingList = shoppingListBreakdown(this.meals)
  },
  manuallyAddMeal(meal) {
    this.meals.push(meal)
  }
});
