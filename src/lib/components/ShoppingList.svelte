<script>
    // components
    import Ingredient from "$lib/components/Ingredient.svelte";
    import IngredientList from "$lib/components/IngredientList.svelte";
    import { randomMeals } from '$lib/state/meals.svelte.js'
  </script>
  
  <h1>Shopping List</h1>
  
  <div class="shoppingList">
    <h2>Ingredients</h2>
    <IngredientList ingredients={randomMeals.shoppingList} />
  </div>
  
  <div class="planned-meals"></div>