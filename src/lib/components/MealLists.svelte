<script>
    // components
    import { randomMeals } from '$lib/state/meals.svelte.js'
    import MealList from './MealList.svelte';
  </script>
  
  <h1>Meals</h1>
  
  <div class="mealList">
    {#if randomMeals.meals.mealListSolo.length > 0}
      <MealList meals={randomMeals.meals.mealListSolo} header="Meals when Tarik on Tour" />
    {/if}
    {#if randomMeals.meals.mealListWithTarik.length > 0}
      <MealList meals={randomMeals.meals.mealListWithTarik} header="Meals when Tarik home" />
    {/if}
  </div>