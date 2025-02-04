<script>
    // components
    import { randomMeals } from '$lib/state/meals.svelte.js'
    import MealList from './MealList.svelte';
  </script>
  
  
  <div class="mealList">
    {#if randomMeals.meals.mealListSolo.length > 0}
      <MealList meals={randomMeals.meals.mealListSolo} header="Meals when Tarik on Tour" />
    {/if}
    {#if randomMeals.meals.mealListWithTarik.length > 0}
      <MealList meals={randomMeals.meals.mealListWithTarik} header="Meals when Tarik home" />
    {/if}
  </div>

  <style>
    .mealList {
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

  </style>