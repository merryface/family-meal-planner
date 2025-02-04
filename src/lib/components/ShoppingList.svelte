<script>
    // components
    import Ingredient from "$lib/components/Ingredient.svelte";
    import IngredientList from "$lib/components/IngredientList.svelte";
    import { randomMeals } from '$lib/state/meals.svelte.js'
  </script>
  
  
  <div class="shoppingList">
    <h2>Shopping List</h2>
    <IngredientList ingredients={randomMeals.shoppingList} />
  </div>
  
<style>
  .shoppingList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    max-width: 400px;
    padding-top: 2rem;
    border: 2px solid #adacac;
    border-radius: 3px;
    padding: 0.5rem;
  }
  h2 {
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
</style>